#!/usr/bin/env node
/**
 * Screenshot generator for Jughead theme
 *
 * Generates screenshots of the theme in different configurations:
 * - Light and dark modes
 * - Desktop and mobile viewports
 * - Home, blog post, and resume pages
 *
 * Usage: node scripts/screenshots.mjs [--serve]
 *   --serve: Start Hugo server automatically (otherwise assumes server running on :1313)
 */

import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const IMAGES_DIR = join(PROJECT_ROOT, 'images');

const BASE_URL = 'http://localhost:1313';

// Viewport sizes
const DESKTOP = { width: 1280, height: 800 };
const MOBILE = { width: 375, height: 812 };

// Screenshots to capture
// themeMode: 'light' sets data-theme="ink-light", 'dark' sets data-theme="ink-dark"
const SCREENSHOTS = [
  // Desktop screenshots
  { name: 'screenshot.png', path: '/', viewport: DESKTOP, themeMode: 'light' },
  { name: 'screenshot-dark.png', path: '/', viewport: DESKTOP, themeMode: 'dark' },

  // Mobile screenshots
  { name: 'screenshot-mobile.png', path: '/', viewport: MOBILE, themeMode: 'light' },
  { name: 'screenshot-mobile-dark.png', path: '/', viewport: MOBILE, themeMode: 'dark' },

  // Resume screenshots
  { name: 'screenshot-resume.png', path: '/resume/', viewport: DESKTOP, themeMode: 'light' },
  { name: 'screenshot-resume-dark.png', path: '/resume/', viewport: DESKTOP, themeMode: 'dark' },

  // Theme preview (used for Hugo themes site)
  { name: 'tn.png', path: '/', viewport: { width: 900, height: 600 }, themeMode: 'light' },
];

async function startHugoServer() {
  console.log('Starting Hugo server...');

  const hugo = spawn('hugo', ['server'], {
    cwd: join(PROJECT_ROOT, 'exampleSite'),
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  // Wait for server to be ready
  return new Promise((resolve, reject) => {
    let output = '';

    hugo.stdout.on('data', (data) => {
      output += data.toString();
      if (output.includes('Web Server is available')) {
        console.log('Hugo server ready');
        resolve(hugo);
      }
    });

    hugo.stderr.on('data', (data) => {
      output += data.toString();
    });

    hugo.on('error', reject);

    // Timeout after 30 seconds
    setTimeout(30000).then(() => {
      if (!output.includes('Web Server is available')) {
        hugo.kill();
        reject(new Error('Hugo server failed to start:\n' + output));
      }
    });
  });
}

async function captureScreenshots() {
  const shouldServe = process.argv.includes('--serve');
  let hugoProcess = null;

  try {
    if (shouldServe) {
      hugoProcess = await startHugoServer();
      await setTimeout(1000); // Extra wait for server stability
    }

    console.log('Launching browser...');
    const browser = await chromium.launch();

    for (const shot of SCREENSHOTS) {
      console.log(`Capturing ${shot.name}...`);

      const context = await browser.newContext({
        viewport: shot.viewport,
        colorScheme: shot.themeMode,
      });

      const page = await context.newPage();
      await page.goto(`${BASE_URL}${shot.path}`, { waitUntil: 'networkidle' });

      // Force the theme mode by setting data-theme attribute
      // This ensures dark mode works regardless of prefers-color-scheme support
      await page.evaluate((mode) => {
        const theme = document.documentElement.dataset.theme || 'ink';
        const baseTheme = theme.replace(/-light$|-dark$/, '');
        document.documentElement.dataset.theme = `${baseTheme}-${mode}`;
      }, shot.themeMode);

      // Wait for any animations/transitions
      await setTimeout(300);

      await page.screenshot({
        path: join(IMAGES_DIR, shot.name),
        fullPage: false,
      });

      await context.close();
    }

    await browser.close();
    console.log('Done! Screenshots saved to images/');

  } finally {
    if (hugoProcess) {
      console.log('Stopping Hugo server...');
      hugoProcess.kill();
    }
  }
}

captureScreenshots().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
