# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15.5 (App Router), React 19.2, TypeScript 5.9, and Tailwind CSS v4. It's a single-page application showcasing software engineering, music, and photography work. The site uses npm for package management and runs with Turbopack in development.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

Development server runs on http://localhost:3000

## Future Considerations

- **ESLint Migration**: Next.js 15.5 deprecates `next lint` in favor of direct ESLint CLI usage. Consider migrating the lint script before Next.js 16. The project already uses modern ESLint flat config (`eslint.config.mjs`), making migration straightforward.

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

**Font Configuration**:

- Centralized in `layout.tsx` using Next.js `next/font/local` optimization
- Local font files stored in `public/fonts/` directory
- Uses generic CSS variable `--font-primary` mapped to both `--font-sans` and `--font-mono`
- Current font: IosevkaFira with full weight range (300, 400, 500, 700) and italic variants
- To change fonts: Only modify the font loader in `layout.tsx`
- CSS references remain unchanged using `var(--font-primary)`

**Data Management**: External links centralized in `collections/links.ts` for easy maintenance.

## Code Style

- **Prettier**: 120 character line width, single quotes, semicolons, 2-space tabs
- **ESLint**: Next.js core-web-vitals and TypeScript rules
- **TypeScript**: Strict mode enabled, path alias `@/*` maps to `./src/*`
- **Import Paths**: Use `@/app/...` alias instead of relative imports
- **React Patterns**: Use named exports, avoid `FC` type, use explicit prop typing

