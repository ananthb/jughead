# Jughead - Portfolio & Blog Theme for Hugo

![logo](https://raw.githubusercontent.com/ananthb/jughead/refs/heads/main/images/logo.png)

Jughead is a simple and powerful portfolio and blog theme for Hugo.
It features a Resume page, Giscus comments, Mermaid diagrams, and KaTeX formulae.

## Features

- [JSON Resume](https://jsonresume.org) support.
- Comments powered by [giscus](https://giscus.app).
- [MermaidJS](https://mermaid.js.org) diagrams.
- [KaTeX](https://katex.org) for rendering math formulae.
- Reading time indicators.
- Offline caching with a service worker.
- [Pico CSS](https://picocss.com) colour schemes.
- i18n support. Translations welcomed!

## Installation

Add jughead to your hugo config files in the modules section.

```toml
[module]
[[module.imports]]
path = "github.com/ananthb/jughead"
```

For more information read the official [setup guide](https://gohugo.io/installation).

## JSON Resume

Render your JSON resume by configuring your unique
[JSON Resume Registry](https://registry.jsonresume.org) slug in the
`params` section of your site configuration file.
The slug is the string that appears after `registry.jsonresume.org/` in your
resume's URL.

```toml
[params]
jsonResumeRegistrySlug = "your-github-username"
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

## Write Posts

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

## Sample Config File

```toml
baseURL = "https://ananthb.github.io/jughead/"
languageCode = "en"
title = "Jughead"
copyright = "© Your Name Here"
paginate = 10
enableGitInfo = true

# Code Highlight
pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

[params]
# Add a logo to your site by placing an image in the assets directory
# and setting the path here. Preferably a square png image.
logo = "images/logo.png"

# Choose a colour scheme from one of the Pico CSS colurs.
colourScheme = "blue"

# Turn on offline caching with a service worker and cache all pages.
serviceWorker = "precache"
# Or cache pages on-demand.
# serviceWorker = true

# Add a subtitle on the home page.
subtitle = "Minimal and Clean [blog theme for Hugo](https://github.com/ananthb/jughead)"

# Site GitHub Repository slig
# If enableGitInfo is true, this will add a link to the source code of the site.
siteRepo = "your-github-org/your-site-repo"

# JSON Resume Registry slug
# Or create a resume.json file in the data directory.
jsonResumeRegistrySlug = "your-github-username"

# Comments
# Get these values by filling out the form on https://giscus.app
[params.giscus]
repo = "your-github-org/your-comments-repo"
repoID = "your-github-repo-id"
category = "your-announcement-category"
categoryID = "your-announcement-category-id"

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

## Screenshots

<details>

<summary>Screenshots</summary>

![Home](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot.png)
![Home Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-dark.png)
![Resume](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-resume.png)
![Resume Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-resume-dark.png)
![Mobile](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile.png)
![Mobile Dark](https://raw.githubusercontent.com/ananthb/jughead/main/images/screenshot-mobile-dark.png)

</details>


## [License](LICENSE)

Fork of [archie](https://github.com/athul/archie).

Jughead is available under the terms of the MIT License.
