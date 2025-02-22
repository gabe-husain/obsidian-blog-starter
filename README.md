# Obsidian Blog Starter

Yo, this is a quick way to turn your Obsidian vault into a sick website using Next.js. Built this because I wanted my notes to be shareable and I figure you might too.

Made with Claude 3.5 Sonnet and Trae because why reinvent the wheel when you can build on top of it?

## What's in the box

- Next.js + TypeScript because we're not savages
- Tailwind CSS for styling without the headache
- Full Markdown/MDX support
- Wiki-style linking between pages (yeah, just like Obsidian)
- All the good Obsidian stuff:
  - Internal links work exactly like you expect
  - Callouts (the > [!info] things)
  - YAML frontmatter for metadata
- Looks good on phones too
- SEO stuff handled for you

## Getting Started

1. Grab the code:
```bash
git clone https://github.com/yourusername/obsidian-blog-starter.git
cd obsidian-blog-starter
```

2. Install the goods:
```bash
npm install
# or if you're fancy
yarn install
```

3. Fire it up:
```bash
npm run dev
# or
yarn dev
```

4. Check it out at [http://localhost:3000](http://localhost:3000)

## Adding Your Stuff

1. Drop your markdown files in `content/`
2. Add some metadata at the top of your files:
```markdown
---
title: Some Cool Thing
date: 2024-02-22
tags: [notes, ideas]
---

# Your brilliant thoughts here
```

3. Link stuff together like you would in Obsidian:
```markdown
Check out my thoughts on [[that-other-thing]]
```

## Making It Your Own

Here's where everything lives:
- `src/app/` - Next.js pages
- `src/components/` - React components
- `src/lib/` - Helper functions
- `content/` - Your actual content
- `public/` - Images and other static stuff

## Deployment

Just push it to GitHub and hook it up to Vercel. It's actually that simple.

## Help Out

If you make this better:
- Fork it
- Branch it
- PR it

## License

MIT License - do whatever you want with it, just don't sue me.

## Support

If this helps you out:
- Star the repo
- Share it
- Fix my bugs

Also check out Obsidian and the Zettelkasten method if you haven't - it's how I organize all my notes and why this template works the way it does.

Now go build something cool.