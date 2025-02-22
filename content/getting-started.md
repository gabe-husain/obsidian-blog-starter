---
title: Getting Started with Obsidian Blog
date: 2024-02-21
tags: [obsidian, tutorial, markdown]
---

# Getting Started with Obsidian Blog

Welcome to your new Obsidian-powered blog! This post will show you how to use various Obsidian features that are supported in this blog setup.

## Wiki Links

You can create internal links using Obsidian's [[wiki-link]] syntax. For example:
- Check out my [[about|About Page]]
- Read more in the [[digital-garden]] section

## Callouts

Obsidian supports various types of callouts:

> [!note]
> This is a standard note callout

> [!warning]
> Be careful with this feature!

> [!tip]
> You can customize the appearance of these callouts using CSS

## Markdown Features

All standard Markdown features work as well:

### Lists
- Unordered
- List
- Items

1. Ordered
2. List
3. Items

### Code Blocks
```typescript
interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  content: string;
}
```

### Tables
| Feature | Support |
|---------|----------|
| Wiki Links | ✅ |
| Callouts | ✅ |
| Frontmatter | ✅ |
| Tables | ✅ |

## Metadata

You can use YAML frontmatter at the top of your posts to add metadata like:
- Title
- Date
- Tags
- Custom fields

This metadata can be used for organizing and displaying your posts.