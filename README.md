Khosrat A Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS to showcase my projects, skills, and contact info.

📑 Table of Contents

1. About

2. Features

3. 🚀 Tech Stack

4. ⚙️ Installation

5. 💻 Development

6. 📦 Build

7. ☁️ Deploy

8. 📂 Project Structure

9. 🔧 Configuration

10. 🤝 Contributing

10.📄 License

12. 👤 Author


🔍 About

A minimal, responsive portfolio template that highlights my work:

Modern UI: Clean, mobile-first design

Dark Mode: Seamless theme toggle

Accessibility: WCAG-compliant color contrast & ARIA

SEO Friendly: Meta tags & semantic HTML

Use it as a starting point for your personal site or customize it further.

⚡ Features

Feature

Description

Responsive Design

Mobile-first layout

Dark Mode

Light ↔ Dark theme switch

Smooth Animations

Subtle transitions via framer-motion

Alias Imports

@/ → /src for clean imports

SEO Optimized

Proper meta tags & semantic markup

Accessibility

ARIA attributes & color contrast compliance

🚀 Tech Stack

Framework: React 18

Language: TypeScript

Bundler: Vite

Styling: Tailwind CSS

Animations: Framer Motion (optional)

⚙️ Installation

Clone this repo

git clone https://github.com/yourusername/kos-portfolio.git
cd kos-portfolio

Install dependencies

npm install

💻 Development

Start server

npm run dev

Open in browser: http://localhost:5173

Hot module replacement (HMR) reloads on file changes.

📦 Build

Generate production files

npm run build

Preview locally

npm run preview

☁️ Deploy

Deploy to Vercel, Netlify, GitHub Pages, etc.

GitHub Pages example

Install adapter

npm install gh-pages --save-dev

Add to package.json scripts

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Run

npm run deploy

📂 Project Structure

kos-portfolio/
├─ public/             # Static assets & index.html
│  └─ preview.png      # README screenshot
├─ src/                # Source files
│  ├─ assets/          # Images, fonts, etc.
│  ├─ components/      # Reusable React components
│  ├─ App.tsx          # Root component
│  ├─ main.tsx         # Entry point
│  └─ index.css        # Global styles
├─ vite.config.ts      # Vite + alias config
├─ tsconfig.app.json   # TS config for app
├─ tsconfig.node.json  # TS config for Vite
├─ package.json        # Scripts & dependencies
└─ README.md           # This file

🔧 Configuration

Aliases in vite.config.ts:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})

🤝 Contributing

Contributions welcome! Please:

Fork this repo

Create a feature branch

Open a PR with your changes

📄 License

This project is MIT‑licensed.

👤 Author

Khosrat A. — Junior .NET Developer & Frontend Enthusiast

🌐 Portfolio

💻 GitHub

📧 Khosrat.Abobakri@hotmail.com
