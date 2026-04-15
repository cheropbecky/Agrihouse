# AgriHouse - React + Vite + Tailwind CSS

A modern agricultural web application built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Project Setup

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx           # Main app component
├── App.css           # App styles
├── index.css         # Global styles (includes Tailwind)
├── main.jsx          # React entry point
└── assets/           # Static assets
```

## Tailwind CSS

This project is configured with Tailwind CSS v4 which uses the new `@tailwindcss/vite` plugin for faster builds.

Add Tailwind classes to your JSX:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello World
</div>
```

## Hot Module Replacement (HMR)

The dev server supports HMR for instant updates without full page reload.

## ESLint Configuration

Code quality is maintained through ESLint. The configuration includes React-specific rules and React Hooks best practices.
