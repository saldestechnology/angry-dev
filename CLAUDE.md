# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack (optimized build tool)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 15 application using the App Router pattern with:

- **Framework**: Next.js 15.4.5 with App Router architecture
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Image Optimization**: Next.js Image component with optimized loading
- **Client Components**: Uses 'use client' directive for interactive functionality

### Key Structure

- `app/page.tsx` - Main landing page with interactive click effects, animations, and clipboard functionality
- `app/layout.tsx` - Root layout with metadata, SEO configuration, and font setup (Geist fonts)
- `app/components/Gallery3D.tsx` - Responsive image gallery component with hover effects
- `app/globals.css` - Global Tailwind styles
- `public/images/` - Static image assets for the gallery

### Notable Patterns

- **Interactive Effects**: Click handlers generate animated emoji sparks at cursor position
- **State Management**: Uses React useState for managing UI effects (sparks, popups, explosions)
- **Clipboard API**: Implements modern clipboard API with fallback for older browsers
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Animation**: Tailwind-based animations with custom timing delays

### Configuration Files

- `tsconfig.json` - TypeScript config with strict mode and Next.js plugin
- `eslint.config.mjs` - ESLint with Next.js and TypeScript presets
- `next.config.ts` - Minimal Next.js configuration
- `postcss.config.mjs` - PostCSS with Tailwind plugin

## Content Theme

This is a cryptocurrency meme coin website with an "angry developer" theme. The content includes interactive elements, animated effects, and crypto-related functionality (contract address copying, external links to trading platforms).