# andrewwestling.com with Next.js

This is my static homepage rewritten with Next.js, TypeScript, MDX, and Tailwind.

## Setup

To get up and running in development, run these inside this folder:

```
npm install
npm run dev
```

## Theme

The "theme" is available in [`tailwind.config.ts`](tailwind.config.ts). It's not precious, and I change my mind sometimes. I basically just extended the base Tailwind theme with values in the same structure as my old Theme UI theme file from a prior iteration of this website.

## Deployment

I'm using Vercel to deploy this. I just followed their instructions. I'm using the Next.js preset and I linked to the GitHub repo from their site.

## Meta

This repo was bootstrapped from this:

```bash
npx create-next-app@latest
```

I added MDX by following [these instructions](https://nextjs.org/docs/app/building-your-application/configuring/mdx).
