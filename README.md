# Jughead - A Hugo theme

Jughead is a minimal and clean theme for hugo with a markdown-ish UI.

## [Demo](https://ananthb.github.io/jughead)

<details>

<summary>Screenshots</summary>

![Theme](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot.png)
![Dark mode](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-dark.png)

</details>

## Features

- Reading time indicators
- Comments powered by [utterances](https://utteranc.es)
- [MermaidJS](https://mermaid.js.org) diagrams
- [MathJax](https://www.mathjax.org) & [KaTeX](https://katex.org) rendering

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

Toggle MermaidJS, MathJax, and KaTeX support in your post frontmatter.
Set `mermaid` to `true` to enable MermaidJS support,
`mathjax` to `true` to enable MathJax support,
and `katex` to `true` to enable KaTeX support.

```yml
---
title: Diagrams & Equations
mermaid: true
mathjax: true
katex: true
---
```

## Sample Config File

```toml
baseURL = "https://ananthb.github.io/jughead/"
languageCode = "en-in"
title = "Jughead"
copyright = "© Your Name Here"
paginate = 3

# Code Highlight
pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

[params]
# Choose a colour scheme from one of the Pico CSS colurs.
colourScheme = "teal"
# Show your love for Hugo and Jughead!
attribution = true
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
name = "Home"
url = "/"
weight = 1

[[menu.main]]
name = "Posts"
url = "/posts"
weight = 2

[[menu.main]]
name = "About"
url = "/about"
weight = 3

[[menu.main]]
name = "Tags"
url = "/tags"
weight = 4
```

## [License](LICENSE)

Fork of [archie](https://github.com/athul/archie).

Jughead is available under the terms of the MIT License.
