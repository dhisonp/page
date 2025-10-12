# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15.3 (App Router), React 19, TypeScript, and Tailwind CSS v4. It's a single-page application showcasing software engineering, music, and photography work. The site uses Yarn for package management and runs with Turbopack in development.

## Development Commands

```bash
# Start development server with Turbopack
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run ESLint
yarn lint
```

Development server runs on http://localhost:3000

## Architecture

### Directory Structure

```
src/app/
├── collections/       # Data collections (e.g., links.ts for external URLs)
├── components/        # Reusable React components
├── styles/           # Global CSS with Tailwind, animations, and custom utilities
├── home.tsx          # Main page component
├── layout.tsx        # Root layout with font configuration
└── page.tsx          # App entry point that renders Home component
```

### Key Patterns

**Page Routing**: Uses Next.js App Router. The main entry is `app/page.tsx` which imports and renders the `Home` component from `app/home.tsx`.

**Component Structure**:

- All components use modern React function syntax (no `FC` type)
- Named exports for all components except Next.js required pages
- `Home` component (`home.tsx`) is the main page content
- `Subsection` component wraps themed sections with emoji and header
- `Subheading` provides consistent text styling
- Components use TypeScript with explicit prop interfaces (e.g., `SubsectionProps`, `SubheadingProps`)

**Styling Approach**:

- Tailwind CSS v4 for utility classes
- Custom CSS animations in `styles/globals.css` using `@layer components`
- Fade-in animations with delay utilities (`delay-200`, `delay-400`, etc.)
- Dark mode support using Tailwind's `dark:` variants
- Responsive design using Tailwind's `md:` breakpoints

**Data Management**: External links centralized in `collections/links.ts` for easy maintenance.

## Code Style

- **Prettier**: 120 character line width, single quotes, semicolons, 2-space tabs
- **ESLint**: Next.js core-web-vitals and TypeScript rules
- **TypeScript**: Strict mode enabled, path alias `@/*` maps to `./src/*`
- **Import Paths**: Use `@/app/...` alias instead of relative imports
- **React Patterns**: Use named exports, avoid `FC` type, use explicit prop typing
