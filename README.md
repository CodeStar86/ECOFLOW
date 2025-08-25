# ECOFLOW

React + Vite + Tailwind project prepared for **GitHub Pages** auto-deploy via **GitHub Actions**.

## 🚀 Quickstart

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build & preview
npm run build && npm run preview
```

## 🌐 Deployment (GitHub Pages via Actions)

This repo is configured to deploy the `dist/` folder to **GitHub Pages** using the official GitHub Actions workflow.

- The Vite `base` is set to `/ECOFLOW/` so assets resolve correctly under `https://CodeStar86.github.io/ECOFLOW/`.
- Each push to the `main` branch will build and deploy automatically.
- The workflow also copies `index.html` → `404.html` so client-side routing works on refresh.

### One-time repo setting (GitHub UI)
1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source = GitHub Actions**.

### First-time push (local commands)

```bash
git init -b main
git add .
git commit -m "chore: initial commit"
git remote add origin https://github.com/CodeStar86/ECOFLOW.git
git push -u origin main
```

After the first successful workflow run, your site will be live at:  
**https://CodeStar86.github.io/ECOFLOW/**
