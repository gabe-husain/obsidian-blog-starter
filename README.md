# Obsidian Blog Starter

Yo, this is a quick way to turn your Obsidian vault into a sick website using Next.js. Built this because I wanted my notes to be shareable and I figure you might too.

Made with Claude 3.5 Sonnet and Trae because why reinvent the wheel when you can build on top of it?

## Prerequisites

Before you start, make sure you have:
- Node.js 18.17 or later installed
- Git (for cloning the repo)
- A GitHub account (for deployment)
- Basic familiarity with Markdown
- [Optional] An Obsidian vault you want to turn into a website

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
git clone https://github.com/gabe-husain/obsidian-blog-starter
cd obsidian-blog-starter
```

2. Install the goods:
```bash
npm install
# or if you're fancy
yarn install
```

3. Set up your environment:
- Copy the example environment file to create your own:
```bash
cp .env.example .env
```
- Open `.env` in your favorite editor and customize the values:
  - `NEXT_PUBLIC_SITE_URL`: Your site's URL (use http://localhost:3000 for local development)
  - `NEXT_PUBLIC_SITE_NAME`: Your site's name
  - `NEXT_PUBLIC_SITE_DESCRIPTION`: A brief description of your site
  - Optional: Configure Google Analytics and social media handles if desired

4. Fire it up:
```bash
npm run dev
# or
yarn dev
```

5. Check it out at [http://localhost:3000](http://localhost:3000)

> [!note]
> The `.env` file is ignored by git (listed in .gitignore) to keep your settings private. Always make sure to set up your environment variables when deploying or working on a new machine.

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

1. Push your code to GitHub
2. Sign up for [Vercel](https://vercel.com) if you haven't already
3. Connect your GitHub repo to Vercel
4. Add your environment variables in Vercel:
   - Go to Project Settings > Environment Variables
   - Add the same variables from your `.env` file
5. Deploy! Vercel will automatically build and deploy your site

> [!tip]
> Enable automatic deployments so your site updates whenever you push changes to GitHub.

## Troubleshooting

Common issues and solutions:

1. **Build fails on Vercel**
   - Make sure all environment variables are set correctly
   - Check if you're using Node.js 18.17 or later

2. **Links not working**
   - Ensure your markdown files are in the `content/` directory
   - Check that internal links use the `[[wiki-style]]` format
   - File names should match the links (case-sensitive)

3. **Images not showing**
   - Place images in the `public/` directory
   - Reference them in markdown as `/image-name.jpg`

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