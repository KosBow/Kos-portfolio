Kos Portfolio



A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Showcases projects, skills, and contact information.

About

This repository contains a modern, responsive portfolio website template designed to highlight projects, skills, and experiences. It leverages:

React for UI components

TypeScript for type safety

Vite for fast bundling and development

Tailwind CSS for utility-first styling

Use this as a foundation for your own portfolio or personal website.

Features

Responsive Design: Mobile-first layout that looks great on any device.

Dark Mode: Easy switch between light and dark themes.

Smooth Animations: Subtle transitions with framer-motion.

Alias Imports: @/ points to /src for clean import paths.

SEO Optimized: Meta tags and semantic HTML.

Accessible: WCAG-compliant color contrasts and ARIA attributes.

Tech Stack

Framework: React 18

Language: TypeScript

Bundler: Vite

Styling: Tailwind CSS

Animations: Framer Motion (optional)

Installation

Clone the repository

git clone https://github.com/yourusername/kos-portfolio.git
cd kos-portfolio

Install dependencies

npm install

Development

Start the development server with hot-module replacement:

npm run dev

Open your browser and go to http://localhost:5173 (or the port shown in your terminal).

Build

Generate a production-ready build:

npm run build

Preview the build locally:

npm run preview

Deploy

You can deploy your site to platforms like Vercel, Netlify, or GitHub Pages.

Example with GitHub Pages:

Install the adapter:

npm install gh-pages --save-dev

Add deploy scripts to package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Run:

npm run deploy

Project Structure

kos-portfolio/
├─ public/           # Static assets and index.html
│  └─ preview.png    # Screenshot for README
├─ src/              # Source files
│  ├─ assets/        # Images, fonts, etc.
│  ├─ components/    # Reusable React components
│  ├─ App.tsx        # Application root component
│  ├─ main.tsx       # Entry point
│  └─ index.css      # Global styles
├─ vite.config.ts    # Vite configuration with alias
├─ tsconfig.app.json # TypeScript config for app
├─ tsconfig.node.json# TypeScript config for Vite
├─ package.json      # Scripts and dependencies
└─ README.md         # This file

Configuration

Aliases are configured in vite.config.ts:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

Contributing

Contributions are welcome! Please open an issue or submit a pull request for:

Bug fixes

New features

Improvements to documentation

License

This project is licensed under the MIT License.

Author

Khosrat A.Junior .NET Developer & Frontend Enthusiast

Portfolio: https://yourdomain.com

GitHub: https://github.com/yourusername

Email: Khosrat.Abobakri@hotmail.com


