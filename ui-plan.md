# Next.js-UI# UI Plan

## Goal
Provide a small, reusable UI system and a responsive skeleton built with Next.js (App Router) + Tailwind CSS.

## Component categories

### Reusable Presentational Components
- Button (primary/secondary/ghost) — `src/components/ui/Button.tsx`
- Input (text, search) — `src/components/ui/Input.tsx`
- Icon (wrapper for svgs) — `src/components/ui/Icon.tsx`
- Avatar — `src/components/ui/Avatar.tsx`
- Card — `src/components/ui/Card.tsx`

### Layout Components
- Navbar — `src/components/layout/Navbar.tsx`
- Footer — `src/components/layout/Footer.tsx`
- DashboardLayout — `src/components/layout/DashboardLayout.tsx` (Sidebar + content)
- AuthLayout — `src/components/layout/AuthLayout.tsx` (optional)

### Page-level Components
- HomePage (landing) — `src/app/page.tsx`
- DashboardPage — `src/app/dashboard/page.tsx`
- SettingsPage — `src/app/dashboard/settings/page.tsx`

## Design Principles
- One component per file, named exports where appropriate.
- Small, focused components with Tailwind utility classes for styling/responsiveness.
- Props driven for variants and reusability.
- Keep layout components composition-friendly (children prop).