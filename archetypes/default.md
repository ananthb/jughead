+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true

## Metadata

# Tags group related posts together
tags = []

# Categories broadly relate posts to each other
# Add a post to the "featured" category to display it on the homepage.
categories = []

summary = "{{ replace .File.ContentBaseName "-" " " | title }}"
+++
