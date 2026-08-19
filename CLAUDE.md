# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 16.3 (App Router), React 19.2, TypeScript 5.9, and Tailwind CSS v4. It's a single-page application showcasing software engineering, music, and photography work. The site uses npm for package management and runs with Turbopack in development.

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

- **`themeColor` metadata**: `themeColor` still sits in the `metadata` export in `layout.tsx` and `blog/[slug]/page.tsx`; Next 16 wants it in a `viewport` export and warns on every build.

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

- Centralized in `layout.tsx`. Two families, two loaders.
- **Atkinson Hyperlegible Next** via `next/font/google` — variable weight axis 200–800, roman and italic. Exposed as `--font-sans`.
- **Go Mono** via `next/font/local` — vendored woff2 in `public/fonts/` (BSD-3, see `GO-MONO-LICENSE.txt`). Exposed as `--font-mono`. **Only weights 400 and 700 exist**; never apply `font-medium`/`font-semibold` to a monospace element or the browser will synthesise the weight.
- `--font-serif` is not a separate face. `globals.css` aliases it to `--font-sans` in the `@theme inline` block, so `body { @apply font-serif }` and every `var(--font-serif)` reference resolve to Atkinson.
- To change fonts: modify the loader in `layout.tsx`; CSS references stay as `var(--font-sans)` / `var(--font-mono)`.

**Typography & Spacing Tokens**:

- The scale lives in `:root` in `styles/globals.css` as `--text-xs` … `--text-4xl` (standard ramp, 1rem base) and mirrors `tokens.json`. Roughly 19 CSS rules read these via `var()`, and only two font-size utilities exist in all of `src/**/*.tsx` — so changing a token propagates site-wide.
- Tailwind v4's font-size namespace is `--text-*`, **not** `--font-size-*`. The `@theme inline` block re-exports the `:root` values (`--text-base: var(--text-base)`) plus `--text-*--line-height: 1.4` companions, so `@apply text-*` does not pull in Tailwind's default 1.5 leading.
- `--spacing-*` and the parallel `--space-*` vars follow the stock Tailwind ramp and must be kept in sync with each other.

**Data Management**: External links centralized in `collections/links.ts` for easy maintenance.

## Code Style

- **Prettier**: 120 character line width, single quotes, semicolons, 2-space tabs
- **ESLint**: Next.js core-web-vitals and TypeScript rules
- **TypeScript**: Strict mode enabled, path alias `@/*` maps to `./src/*`
- **Import Paths**: Use `@/app/...` alias instead of relative imports
- **React Patterns**: Use named exports, avoid `FC` type, use explicit prop typing

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
