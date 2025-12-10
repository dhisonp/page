# Functional Design System

## Information-Dense, Engineering-First UI/UX Principles

> Based on Edward Tufte's data visualization philosophy applied to interface design.
> Maximize information-to-noise ratio. Dense, not sparse. Explicit over implicit.

---

## Core Philosophy

### The Data-Ink Ratio for UI

**Formula**: Information Content ÷ Total Visual Elements = Information Density

**Goal**: Maximize useful information per pixel while maintaining readability.

**Not**: Minimalism (hiding information)  
**But**: Information maximalism with disciplined execution

### Five Foundational Principles

1. **Above all else, show the data** - Content is primary, chrome is secondary
2. **Maximize information density** - More useful information in less space
3. **Eliminate decorative elements** - No element without informational purpose
4. **Expose state and inner workings** - Show system status, don't hide complexity
5. **Dense, not sparse** - Use space efficiently, avoid artificial whitespace

---

## Visual Design System

### Typography

#### Font Selection

```css
/* Primary: Monospace for data, sans-serif for prose */
--font-mono: 'Berkeley Mono', 'IBM Plex Mono', 'Consolas', monospace;
--font-sans: 'Inter', 'Helvetica', 'Arial', sans-serif;
--font-serif: 'Georgia', 'Times New Roman', serif;

/* Sizes: Functional hierarchy */
--text-xs: 11px; /* Metadata, labels */
--text-sm: 13px; /* Secondary content */
--text-base: 15px; /* Body text */
--text-lg: 17px; /* Emphasis */
--text-xl: 20px; /* Section headers */
--text-2xl: 24px; /* Page titles */
```

**Rules**:

- Use monospace for data, numbers, codes, technical content
- Tight line-height (1.4-1.5) for density
- No font weights below 400 or above 600
- Tabular numbers (`font-variant-numeric: tabular-nums`) for alignment

#### Example

```css
.data-table {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.4;
  font-variant-numeric: tabular-nums;
}

.prose {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: 1.5;
}
```

### Color System

#### Functional Palette

```css
:root {
  /* Grayscale - the workhorse */
  --gray-50: #fafafa;
  --gray-100: #f5f5f5;
  --gray-200: #e5e5e5;
  --gray-300: #d4d4d4;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;

  /* Semantic - minimal use */
  --color-primary: #2563eb; /* Links, primary actions */
  --color-success: #16a34a; /* Positive states */
  --color-warning: #ea580c; /* Warnings */
  --color-error: #dc2626; /* Errors */

  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: var(--gray-50);
  --bg-tertiary: var(--gray-100);

  /* Borders */
  --border-primary: var(--gray-300);
  --border-secondary: var(--gray-200);

  /* Text */
  --text-primary: var(--gray-900);
  --text-secondary: var(--gray-600);
  --text-tertiary: var(--gray-500);
}
```

**Rules**:

- Use grayscale for 95% of UI
- Reserve color for semantic meaning only
- Never use color as the sole indicator (accessibility)
- High contrast ratios (WCAG AAA: 7:1 for body text)

### Spacing & Layout

#### Functional Grid System

```css
:root {
  /* Tight spacing scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;

  /* Consistent gaps */
  --gap-xs: var(--space-2);
  --gap-sm: var(--space-3);
  --gap-md: var(--space-4);
  --gap-lg: var(--space-6);
}
```

**Layout Principles**:

- Minimum viable whitespace
- Consistent, predictable spacing
- Dense information blocks with clear separators
- Use borders/lines liberally for structure

#### Example Layout

```css
.container {
  max-width: 1400px; /* Wide for information density */
  padding: var(--space-4);
}

.section {
  margin-bottom: var(--space-6);
  padding: var(--space-4);
  border: 1px solid var(--border-primary);
}

.info-row {
  display: grid;
  grid-template-columns: 120px 1fr; /* Label : Value */
  gap: var(--space-2);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--border-secondary);
}
```

### Borders & Visual Structure

**Heavy use of borders for structure**:

```css
/* Default border style */
.bordered {
  border: 1px solid var(--border-primary);
}

/* Section separators */
.separator {
  border-top: 1px solid var(--border-secondary);
  margin: var(--space-4) 0;
}

/* Table-like structures */
.grid-borders {
  border-collapse: collapse;
}

.grid-borders > * {
  border: 1px solid var(--border-secondary);
  padding: var(--space-2) var(--space-3);
}
```

---

## Component Patterns

### 1. Dense Data Tables

**Goal**: Maximum information in scannable format

```html
<table class="data-table">
  <thead>
    <tr>
      <th>Metric</th>
      <th class="numeric">Value</th>
      <th class="numeric">Change</th>
      <th class="numeric">%</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>API Latency</td>
      <td class="numeric">234ms</td>
      <td class="numeric">-12ms</td>
      <td class="numeric">-4.9%</td>
      <td><span class="status-good">●</span> Normal</td>
    </tr>
  </tbody>
</table>
```

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
  font-family: var(--font-mono);
}

.data-table th {
  text-align: left;
  font-weight: 600;
  padding: var(--space-2) var(--space-3);
  border-bottom: 2px solid var(--border-primary);
  background: var(--bg-secondary);
}

.data-table td {
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--border-secondary);
}

.data-table .numeric {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.status-good {
  color: var(--color-success);
}
```

### 2. Information-Dense Cards

**Not**: Large padded cards with excessive whitespace  
**But**: Compact, border-separated blocks

```html
<div class="info-card">
  <div class="info-card-header">
    System Status
    <span class="timestamp">Updated 2s ago</span>
  </div>
  <div class="info-card-body">
    <div class="info-row">
      <span class="label">CPU Usage</span>
      <span class="value">23.4%</span>
    </div>
    <div class="info-row">
      <span class="label">Memory</span>
      <span class="value">4.2GB / 16GB</span>
    </div>
    <div class="info-row">
      <span class="label">Uptime</span>
      <span class="value">14d 7h 23m</span>
    </div>
  </div>
</div>
```

```css
.info-card {
  border: 1px solid var(--border-primary);
  background: var(--bg-primary);
}

.info-card-header {
  padding: var(--space-3);
  border-bottom: 1px solid var(--border-primary);
  background: var(--bg-secondary);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-card-header .timestamp {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-weight: 400;
}

.info-card-body {
  padding: var(--space-3);
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: var(--space-2) 0;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.info-row:not(:last-child) {
  border-bottom: 1px solid var(--border-secondary);
}

.info-row .label {
  color: var(--text-secondary);
}

.info-row .value {
  font-weight: 500;
  color: var(--text-primary);
}
```

### 3. Explicit State Indicators

**Show, don't hide system state**

```html
<div class="state-banner">
  <div class="state-indicator">
    <span class="state-dot state-active"></span>
    <span class="state-label">Connected</span>
  </div>
  <div class="state-meta">Last sync: 12:34:56 | Latency: 45ms | Queue: 3 items</div>
</div>
```

```css
.state-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  font-size: var(--text-sm);
  font-family: var(--font-mono);
}

.state-indicator {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.state-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.state-active {
  background: var(--color-success);
}
.state-warning {
  background: var(--color-warning);
}
.state-error {
  background: var(--color-error);
}

.state-meta {
  color: var(--text-secondary);
}
```

### 4. Dense Form Layouts

**Compact, scannable forms**

```html
<form class="dense-form">
  <div class="form-row">
    <label class="form-label">Username</label>
    <input type="text" class="form-input" placeholder="Enter username" />
    <span class="form-hint">Must be unique</span>
  </div>
  <div class="form-row">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" placeholder="user@example.com" />
    <span class="form-hint">Verification required</span>
  </div>
</form>
```

```css
.dense-form {
  display: grid;
  gap: var(--space-3);
}

.form-row {
  display: grid;
  grid-template-columns: 120px 1fr 200px;
  gap: var(--space-3);
  align-items: baseline;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border-secondary);
}

.form-label {
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--text-primary);
}

.form-input {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-primary);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--bg-primary);
}

.form-input:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: -1px;
}

.form-hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
}
```

### 5. Technical Documentation Layout

```html
<div class="doc-layout">
  <aside class="doc-sidebar">
    <nav class="doc-nav">
      <div class="nav-section">
        <div class="nav-header">Getting Started</div>
        <a href="#" class="nav-link">Installation</a>
        <a href="#" class="nav-link active">Configuration</a>
      </div>
    </nav>
  </aside>
  <main class="doc-content">
    <article class="doc-article">
      <h1>Configuration</h1>
      <p>Technical content with inline code <code>like this</code>.</p>
      <pre class="code-block">
const config = {
  apiKey: process.env.API_KEY,
  timeout: 5000
};</pre
      >
    </article>
  </main>
</div>
```

```css
.doc-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 0;
  min-height: 100vh;
}

.doc-sidebar {
  border-right: 1px solid var(--border-primary);
  background: var(--bg-secondary);
  padding: var(--space-6) var(--space-4);
}

.nav-section {
  margin-bottom: var(--space-6);
}

.nav-header {
  font-weight: 600;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
}

.nav-link {
  display: block;
  padding: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-primary);
  text-decoration: none;
  border-left: 2px solid transparent;
}

.nav-link:hover {
  background: var(--bg-tertiary);
}

.nav-link.active {
  border-left-color: var(--color-primary);
  background: var(--bg-tertiary);
  font-weight: 500;
}

.doc-content {
  padding: var(--space-6) var(--space-8);
  max-width: 900px;
}

.doc-article h1 {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-4);
  border-bottom: 2px solid var(--border-primary);
  padding-bottom: var(--space-3);
}

.doc-article code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--bg-secondary);
  padding: 2px 6px;
  border-radius: 3px;
}

.code-block {
  background: var(--gray-900);
  color: var(--gray-100);
  padding: var(--space-4);
  border-radius: 4px;
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.5;
}
```

---

## Layout Patterns

### 1. Dense Dashboard Grid

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
}

/* Or explicit columns for control */
.dashboard-grid-fixed {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
```

### 2. Master-Detail Layout

```css
.master-detail {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 0;
  height: 100vh;
}

.master-panel {
  border-right: 1px solid var(--border-primary);
  overflow-y: auto;
}

.detail-panel {
  overflow-y: auto;
  padding: var(--space-6);
}
```

### 3. Terminal/Console Layout

```css
.console-layout {
  background: var(--gray-900);
  color: var(--gray-100);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  padding: var(--space-4);
  border: 1px solid var(--gray-700);
  height: 400px;
  overflow-y: auto;
}

.console-line {
  padding: 2px 0;
  white-space: pre-wrap;
  word-break: break-all;
}

.console-line.error {
  color: var(--color-error);
}
.console-line.warning {
  color: var(--color-warning);
}
.console-line.success {
  color: var(--color-success);
}
```

---

## Animation & Interaction

### Minimal, Functional Motion

**Principle**: Animation should clarify state changes, not decorate.

```css
/* Subtle hover feedback */
.interactive:hover {
  background: var(--bg-secondary);
  transition: background 150ms ease;
}

/* Clear focus indicators */
.interactive:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Loading states - explicit */
.loading {
  opacity: 0.6;
  pointer-events: none;
  position: relative;
}

.loading::after {
  content: 'Loading...';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

/* State transitions */
.fade-in {
  animation: fadeIn 200ms ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## Anti-Patterns to Avoid

### ❌ Excessive Whitespace

```css
/* BAD */
.card {
  padding: 48px 64px;
  margin: 32px 0;
}

/* GOOD */
.card {
  padding: 12px 16px;
  margin: 8px 0;
}
```

### ❌ Hidden Information

```css
/* BAD - Tooltip-only info */
<span title="Important details here">?</span>

/* GOOD - Visible by default */
<span class="label">Status: <strong>Active</strong></span>
```

### ❌ Decorative Elements

```css
/* BAD */
.hero {
  background: linear-gradient(45deg, purple, pink);
  padding: 120px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* GOOD */
.header {
  background: var(--bg-secondary);
  padding: var(--space-4);
  border-bottom: 1px solid var(--border-primary);
}
```

### ❌ Color as Primary Indicator

```css
/* BAD - Color only */
.status {
  color: green;
}

/* GOOD - Color + text/icon */
.status::before {
  content: '✓ ';
  color: var(--color-success);
}
.status {
  color: var(--text-primary);
}
```

---

## Accessibility Considerations

### High Contrast

```css
/* Ensure WCAG AAA compliance */
--contrast-ratio: 7: 1; /* for body text */
--contrast-ratio-large: 4.5: 1; /* for large text (18px+) */
```

### Keyboard Navigation

```css
/* Visible focus indicators */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Screen Reader Support

```html
<!-- Use semantic HTML -->
<main role="main">
  <nav role="navigation" aria-label="Main navigation">
    <table role="table" aria-label="User data">
      <!-- Provide text alternatives -->
      <span class="status-dot" aria-label="Status: Active"></span>
    </table>
  </nav>
</main>
```

---

## Responsive Behavior

### Mobile-First Dense Design

```css
/* Base: Mobile-optimized density */
.container {
  padding: var(--space-3);
}

.data-table {
  font-size: var(--text-xs);
}

/* Tablet: Increase density */
@media (min-width: 768px) {
  .container {
    padding: var(--space-4);
  }

  .data-table {
    font-size: var(--text-sm);
  }
}

/* Desktop: Maximum density */
@media (min-width: 1024px) {
  .container {
    max-width: 1400px;
    padding: var(--space-6);
  }

  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Implementation Checklist

### Before You Start

- [ ] Define information hierarchy
- [ ] Identify all data to be displayed
- [ ] Determine required user actions
- [ ] List all system states to show

### During Development

- [ ] Use monospace fonts for technical content
- [ ] Implement tight spacing (1.4-1.5 line-height)
- [ ] Border-separate distinct information blocks
- [ ] Show system status visibly (no tooltips for critical info)
- [ ] Use color sparingly (semantic only)
- [ ] Tabular numbers for data alignment
- [ ] High contrast ratios (7:1 for body text)
- [ ] Visible focus indicators

### After Implementation

- [ ] Remove unnecessary whitespace
- [ ] Eliminate decorative elements
- [ ] Verify all information is visible (not hidden)
- [ ] Test keyboard navigation
- [ ] Check contrast ratios
- [ ] Validate semantic HTML
- [ ] Measure information density (can more fit?)

---

## Quick Start Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Functional Design Example</title>
    <style>
      :root {
        --font-mono: 'Berkeley Mono', 'Consolas', monospace;
        --font-sans: 'Inter', 'Helvetica', sans-serif;

        --gray-100: #f5f5f5;
        --gray-300: #d4d4d4;
        --gray-600: #525252;
        --gray-900: #171717;

        --color-primary: #2563eb;

        --space-2: 8px;
        --space-3: 12px;
        --space-4: 16px;

        --text-sm: 13px;
        --text-base: 15px;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: var(--font-sans);
        font-size: var(--text-base);
        line-height: 1.5;
        color: var(--gray-900);
        background: white;
      }

      .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-4);
      }

      .section {
        border: 1px solid var(--gray-300);
        padding: var(--space-4);
        margin-bottom: var(--space-4);
      }

      .section-header {
        font-weight: 600;
        margin-bottom: var(--space-3);
        padding-bottom: var(--space-2);
        border-bottom: 1px solid var(--gray-300);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="section">
        <div class="section-header">System Overview</div>
        <!-- Your content here -->
      </div>
    </div>
  </body>
</html>
```

---

## Further Reading

- Edward Tufte: _The Visual Display of Quantitative Information_ (1983)
- Edward Tufte: _Envisioning Information_ (1990)
- Web Content Accessibility Guidelines (WCAG) 2.1
- IBM Design Language: Carbon Design System
- Technical documentation: MDN Web Docs style

---

## Philosophy Summary

> "Perfection is achieved not when there is nothing more to add,  
> but when there is nothing left to take away... **except when adding information.**"
>
> — Adaptation of Antoine de Saint-Exupéry

This system inverts the minimalist philosophy: **maximize information, minimize decoration**.

Design decisions should be justified by:

1. Does this add information value?
2. Does this clarify system state?
3. Does this improve scannability?
4. Does this aid user decision-making?

If the answer is no, remove it.

---

_Last updated: December 2024_
