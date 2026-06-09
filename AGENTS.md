# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development commands
- Install dependencies: `pnpm install`
- Start local dev server (Vite): `pnpm run dev`
- Create production build: `pnpm run build`
- Preview production build locally: `pnpm run preview`

Notes:
- `README.md` still references `pnpm start`, but `package.json` defines `dev`/`build`/`preview` scripts instead.
- There are currently no repository scripts for linting or tests, and no test framework config is present.
- Single-test execution is not available in current project configuration (add a test runner first, then document its single-test command here).

## High-level architecture
- Runtime is a Vite + React SPA with `BrowserRouter` (`src/main.tsx`).
- `src/App.tsx` is the orchestration layer:
  - Controls `terminalMode` (GUI vs terminal interface).
  - Controls `uiType` (`landing` one-page scroll layout vs `modular` tab-style layout).
  - Defines top-level routes (`/` and `/projects`) for landing mode and fallback redirect.
- UI composition is mostly section/page based:
  - Sections and pages are rendered from `src/sections/*` and `src/pages/*`.
  - Shared visual/navigation wrappers are in `src/components/*` (top navbar, bottom nav, background, cards).

## Data and content model
- Portfolio content is centralized in `src/data/userData.ts` (personal info, skills, projects, timeline, contact links, fetch data).
- Multiple surfaces consume the same content source:
  - GUI pages/sections (e.g., hero/projects/skills/about/contact).
  - Terminal command output (through `src/terminal/CommandData.tsx`).
- When updating profile or project information, prefer editing `userData.ts` first to keep GUI and terminal outputs aligned.

## Terminal mode subsystem
- Terminal UI entrypoint: `src/terminal/TerminalMode.tsx`.
- Command validation and special command checks: `src/terminal/data/commands.ts`.
- Theme definitions: `src/terminal/data/themes.ts`.
- Rich command output mapping: `src/terminal/CommandData.tsx`.
- Command behavior pattern:
  - Validate command string.
  - Execute built-in control commands (`clear`, `gui`, `settings ui ...`, `themes ...`, `glow on/off`).
  - Render mapped React node output for content commands (`about`, `projects`, `skills`, etc.).

## Styling and animation
- Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
- Global styles and custom keyframes live in `src/index.css`.
- Motion-heavy UI interactions use `framer-motion`; iconography uses `lucide-react`.
