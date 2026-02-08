# Jughead - Portfolio & Blog Theme for Hugo

<img src="https://raw.githubusercontent.com/ananthb/jughead/main/images/logo-small.png" alt="logo" width="100">

Jughead is a simple and powerful portfolio and blog theme for Hugo.
It features a Resume page, Giscus comments, Mermaid diagrams, and KaTeX formulae.

![screenshot](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot.png)

<details>
<summary>More screenshots</summary>

![Home Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-dark.png)
![Resume](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-resume.png)
![Resume Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-resume-dark.png)
![Mobile](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile.png)
![Mobile Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile-dark.png)

</details>

## Features

- [JSON Resume](https://jsonresume.org) support.
- Comments powered by [giscus](https://giscus.app).
- [MermaidJS](https://mermaid.js.org) diagrams.
- [KaTeX](https://katex.org) for rendering math formulae.
- Reading time indicators.
- Offline caching with a service worker.
- Two themes: `ink` (newspaper/OLED) and `earth` (rust/slate).
- Auto light/dark mode with manual override option.
- i18n support. Translations welcomed!

## Installation

Add jughead to your hugo config files in the modules section.

```toml
[module]
[[module.imports]]
path = "github.com/ananthb/jughead"
```

## Quickstart

Copy the [`hugo.toml`](./exampleSite/hugo.toml) configuration file from [./exampleSite](./exampleSite).
Edit parameters as needed.

### Themes

Configure your theme in `hugo.toml`:

```toml
[params]
  theme = "ink"        # "ink" or "earth"
  themeMode = "auto"   # "auto", "light", or "dark"
```

## Features

### JSON Resume

Render your JSON resume by configuring your unique
[JSON Resume Registry](https://registry.jsonresume.org) slug in the
`params` section of your site configuration file.
The slug is the string that appears after `registry.jsonresume.org/` in your
resume's URL.
`qr` enables a QR code for your resume.

```toml
[params]
[params.jsonResume]
slug = "your-github-username"
qr = true
```

You can also render a local `resume.json` file by placing it in the
`data` directory of your site.

The local `resume.json` file will take precedence over the JSON Resume Registry.

This will add a basic portfolio section from your resume to your site's
homepage.

You can also render your resume in any page in your site
by creating a new empty page and setting its layout to `resume` in frontmatter.

```markdown
+++
layout = "resume"
date = "2025-01-01"
+++
```

### Write Posts

Use `hugo new posts/my-first-post.md` to create a new post.
Edit the frontmatter and write your post in markdown.
Add a `featured` category to your post to feature it on the homepage
and blog page.

Toggle MermaidJS and KaTeX support in your post frontmatter.
Set `mermaid` to `true` to enable MermaidJS support,
and `katex` to `true` to enable KaTeX support.

```markdown
+++
title = "Diagrams & Equations"
mermaid = true
katex = true
+++
```

MermaidJS and KaTeX are JavaScript heavy.
Enable them when necessary.

## [License](LICENSE)

Fork of [archie](https://github.com/athul/archie).

Jughead is available under the terms of the MIT License.
