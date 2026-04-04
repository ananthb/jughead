# Jughead - Blog Theme for Hugo

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ananthb/jughead/main/images/logo-light.svg">
  <img src="https://raw.githubusercontent.com/ananthb/jughead/main/images/logo.svg" alt="Jughead" width="64">
</picture>

Jughead is a simple and powerful blog theme for Hugo.
It features Giscus comments, Mermaid diagrams, and KaTeX formulae.

![screenshot](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot.png)

<details>
<summary>More screenshots</summary>

![Home Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-dark.png)
![Mobile](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile.png)
![Mobile Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile-dark.png)

</details>

## Features

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

### Custom Homepage

By default the homepage shows featured and recent posts.
To add custom content above the post listings, create `content/_index.md`:

```markdown
---
title: "Home"
---

Welcome to my blog!
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

Fork of [archie](https://github.com/athul/archie) which is MIT licensed.

This work is dual licensed under the terms of the MIT license for contributions up to January 2026
and under the terms of the GPL 3.0 for later contributions.
