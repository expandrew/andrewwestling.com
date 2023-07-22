# jsonresume-theme-andrewwestling

(My fork of the Actual theme for JSON Resume)

Below is just the regular README content with some stuff changed and removed as it makes sense

---

Minimalist and modern theme for [JSON Resume](https://jsonresume.org/) standard, designed for
the [v1.0.0 version](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json).

- Only meaningful information
- Single color
- Single font-family
- Single page? Up to you!

## Table of contents

- [What is JSON Resume?](#what-is-json-resume)
- [Prerequisites](#prerequisites)
- [Export resume](#export-resume)
- [Development](#development)

## What is JSON Resume?

> JSON Resume is a community driven open source initiative to create JSON-based standard for resumes.

## Prerequisites

- [node.js](https://nodejs.org/en/) runtime with [resume-cli](https://github.com/jsonresume/resume-cli/)

```bash
npm install -g resume-cli
```

## Export resume

- Create your [resume.json](https://jsonresume.org/schema/) file

```bash
resume export resume.pdf --format pdf --theme ./jsonresume-theme-andrewwestling
resume export resume.html --format html --theme ./jsonresume-theme-andrewwestling
```

## Development

```bash
npm install

gulp
```

You can live edit any .scss or .pug file
