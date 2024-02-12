# andrewwestling.com with Next.js

This is my static homepage rewritten with Next.js, TypeScript, MDX, and Theme UI.

## Setup

To get up and running in development, run these inside this folder:

```
yarn install
yarn dev
```

## Theme

The theme is available in [`theme.ts`](theme.ts). It's not precious, and I change my mind sometimes. I tried to keep color contrasts and font sizes accessible enough, but it's not scientific.

## Deployment

I'm using Vercel to deploy this. I just followed their instructions. I'm using the Next.js preset and I linked to the GitHub repo from their site.

## Meta

This repo was bootstrapped from this:

```bash
npx create-next-app --example with-mdx with-mdx-app
```
