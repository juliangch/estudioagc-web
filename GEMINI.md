# Project Overview
`estudioagc-web` is the official digital platform for **Estudio AGC**, a prestigious accounting and consulting firm based in Puerto Madero, Buenos Aires. The project focuses on delivering a high-end, professional, and accessible user experience that reflects the firm's excellence in audit, tax defense, and strategic consulting.

## Core Technologies
- **Framework:** Astro 5 (using View Transitions and Server Islands where applicable)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Language:** TypeScript (Strict mode)
- **Typography:** Manrope (Google Fonts, weights 400-800)
- **Icons:** Material Symbols Outlined (weight 300)
- **Animations:** Native CSS animations + Intersection Observer for scroll-reveal.

## Architecture & File Structure

```
src/
  assets/          # Optimized images and SVG assets
  components/
    layout/        # High-level structural components (Navbar, Footer, Section, Container)
    ui/            # Atomic, reusable UI primitives (Button, Icon, Badge, Input, Select)
  layouts/
    BaseLayout.astro # Main HTML wrapper with SEO, fonts, and global meta tags
  pages/
    index.astro      # Homepage (Current primary landing)
  styles/
    global.css       # Tailwind v4 configuration (@theme) and global base styles
```

## Design System (Tailwind v4 `@theme`)

### Color Palette
- **Primary (Teal/Navy):** `--color-primary-900: #0A596C`. Used for headers, main buttons, and brand accents.
- **Surface:** `--color-surface-50: #FAFAFA` (Main background), `--color-surface-white: #FFFFFF`.
- **Gray Scale:** Standard Tailwind-like scale for text and borders.
- **Semantic:** `success` (#059669), `error` (#DC2626), `info` (#2563EB), `warning` (#D97706).

### Typography
- **Display:** 3rem, extra-bold (Main hero)
- **H1:** 2.25rem, bold (Section headers)
- **H2:** 1.5rem, semi-bold
- **H3:** 1.125rem, semi-bold
- **Body-lg:** 1.125rem (Lead text)
- **Body-sm:** 0.875rem (Fine print/labels)

### UI Tokens
- **Border Radius:** Default 8px (`rounded-DEFAULT`).
- **Shadows:** Soft, professional shadows (`shadow-sm`, `shadow-md`).
- **Container:** Max-width 1400px, centered.

## Development Conventions

### Component Guidelines
- **UI Components:** Should be highly reusable and agnostic of business logic. Use props for all variants.
- **Layout Components:** Handle positioning, spacing between sections, and structural integrity.
- **Spacing:** Adhere to the 8pt grid system using Tailwind's default spacing scale.

### Interactions & Motion
- **Scroll Reveal:** Use the `.reveal` class combined with the `IntersectionObserver` in `index.astro` for smooth entrance animations.
- **Hero Stagger:** Use `.hero-stagger` for immediate entrance animations on page load.
- **Transitions:** Use `transition-all duration-200` for hover states on buttons and cards.

### SEO & Accessibility
- **Meta Tags:** Managed in `BaseLayout.astro`. Always provide `title` and `description` props.
- **Images:** Use Astro's `<Image />` component for automatic optimization.
- **Icons:** Use the `Icon` component with Material Symbols names.

## UI Component Reference

| Component | Key Props | Usage |
| :--- | :--- | :--- |
| `Button` | `variant` (primary, outline, ghost), `size` (sm, md, lg), `icon`, `href` | Main actions and navigation. |
| `Badge` | `variant` (default, new, success, error, info) | Status indicators and labels. |
| `Icon` | `name` (Material Symbol name), `size`, `class` | Vector icons. |
| `Input` | `label`, `name`, `type`, `placeholder` | Form fields. |
| `Section` | `id`, `class` | Vertical page segments with standard padding. |
| `Container` | `class` | Horizontal constraint (max-width 1400px). |

## Key Commands
| Command | Action |
| :--- | :--- |
| `npm install` | Setup dependencies |
| `npm run dev` | Local development at `localhost:4321` |
| `npm run build` | Production build |
| `npm run preview` | Local preview of the production build |
