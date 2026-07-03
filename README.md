# Solvane Estate Winery Website

A premium, custom-branded digital experience for Solvane Estate, a luxury winery in Rutherford, Napa Valley. This website features product catalogs, custom interactive timeline ledger of vintages, reservation flows, journal logs, and legal compliance structures.

## Tech Stack

The application is built using a modern, fast, and light web architecture:

- **Core Library**: React (v19) utilizing hooks, Context-driven state management, and declarative client-side component architecture.
- **Development Tooling & Bundler**: Vite (v8) for hot module replacement (HMR), tree-shaking, and optimized asset chunk compilation.
- **Styling & Theme Framework**: Tailwind CSS (v4) utilizing native CSS variables, flexbox, CSS Grid layouts, and custom utility variables for the obsidian/champagne color palette.
- **Animations & Micro-Interactions**: Framer Motion for smooth, high-frame-rate page transitions, menu entries, and interactive 3D card tilt effects.
- **Form State & Validation**: React Hook Form paired with Zod schemas for client-side field validation (booking reservations, contact forms, and allocation sign-ups).
- **Icons**: Lucide React vectors for crisp, scaling UI assets.
- **Linter & Code Quality**: Oxlint for lightning-fast JavaScript and JSX syntax checks.

## Build and Architecture

- **SPA Routing**: Client-side routing is handled via React Router (`createBrowserRouter`), mapping routes dynamically for seamless, instant transitions.
- **Asset Resolution**: Premium winery photos and customized product mockups are imported statically inside data catalogs to allow Vite to bundle, compress, and fingerprint files.
- **Vercel Routing**: A native `vercel.json` SPA configuration routes all incoming requests to the index file, delegating URL mapping to the client-side router.
- **Build Output**: Compilation strips styling and component code, generating minified CSS chunks and JavaScript bundles with custom chunk-size splitting.
