# Jughead - Portfolio & Blog Theme for Hugo

Jughead is a simple and powerful portfolio and blog theme for Hugo.
Its responsive and loads fast on all devices.
It supports comments, diagrams, and math formulae.

## [Demo](https://ananthb.github.io/jughead)

<details>

<summary>Screenshots</summary>

![Full Page](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot.png)
![Full Page Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-dark.png)
![Home Page](https://raw.githubusercontent.com/ananthb/jughead/main/images/homepage.png)
![Home Page](https://raw.githubusercontent.com/ananthb/jughead/main/images/homepage-dark.png)
![Mobile](https://raw.githubusercontent.com/ananthb/jughead/main/images/mobile.png)
![Mobile Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/mobile-dark.png)

</details>

## Features

- Comments powered by [utterances](https://utteranc.es).
- [MermaidJS](https://mermaid.js.org) diagrams.
- [KaTeX](https://katex.org) for rendering math formulae.
- Reading time indicators.

## Installation

Add jughead to your hugo config files in the modules section.

```toml
[module]
[[module.imports]]
path = 'github.com/ananthb/jughead'
```

For more information read the official [setup guide](https://gohugo.io/installation).

## Writing Posts

Create a new `.md` file in the *content/posts* folder

```yml
---
title: Title of the post
description:
date:
tldr: (optional)
draft: true/false (optional)
tags: [tag names] (optional)
---
```

Toggle MermaidJS and KaTeX support in your post frontmatter.
Set `mermaid` to `true` to enable MermaidJS support,
and `katex` to `true` to enable KaTeX support.

```yml
---
title: Diagrams & Equations
mermaid: true
katex: true
---
```

## Sample Config File

```toml
baseURL = "https://ananthb.github.io/jughead/"
languageCode = "en-in"
title = "Jughead"
copyright = "© Your Name Here"
paginate = 10

# Code Highlight
pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

[params]
# Choose a colour scheme from one of the Pico CSS colurs.
colourScheme = "blue"
# Add a subtitle on the home page.
subtitle = "Minimal and Clean [blog theme for Hugo](https://github.com/ananthb/jughead)"

# Social Tags

[[params.social]]
name = "GitHub"
icon = "github"
url = "https://github.com/ananthb/jughead"

[[params.social]]
name = "Twitter"
icon = "twitter"
url = "https://twitter.com/your-name-here/"

[[params.social]]
name = "GitLab"
icon = "gitlab"
url = "https://gitlab.com/ananthb/"

# Main menu Items

[[menu.main]]
name = "Blog"
url = "/blog"
weight = 1
```

## [License](LICENSE)

Fork of [archie](https://github.com/athul/archie).

Jughead is available under the terms of the MIT License.
