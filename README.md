# AgriHouse

AgriHouse is a modern agriculture-themed website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- React Router
- Framer Motion
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```txt
src/
  assets/         # images and static design assets
  components/     # shared UI components (e.g., Navbar)
  pages/          # page/section components
  App.jsx         # app composition and routing
  main.jsx        # React entry point
  index.css       # global styles + Tailwind import
```

## Deploying to Vercel

This project works out of the box on Vercel.

### Option 1: Deploy from GitHub (recommended)

1. Push your branch to GitHub.
2. In Vercel: **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite** (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Why you cannot see the project in Vercel (collaborator case)

Being a **GitHub collaborator** does **not** automatically give access to the project in Vercel.

You have 3 valid paths:

1. Ask the repo/project owner to add you to their **Vercel Team** and grant project access.
2. Ask the owner to import the repo in their Vercel account, then invite you to that Vercel project.
3. Fork the repo to your own GitHub account and import the **fork** into your own Vercel account.

If you only have GitHub collaborator access, the owner must still configure Vercel-side access.

### Option 2: Deploy with Vercel CLI

If GitHub import is blocked by permissions:

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

This creates deployment under your own Vercel account/team.
