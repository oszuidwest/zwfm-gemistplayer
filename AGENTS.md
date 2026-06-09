# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 6 catch-up radio player deployed as a Cloudflare Worker. Source lives under `src/`: `src/pages/[station]/[timestamp].astro` handles the dynamic player route, `src/layouts/Layout.astro` provides the base HTML shell, `src/config/stations.ts` stores station metadata, and `src/styles/global.css` imports Tailwind. Static files belong in `public/`. Generated output in `dist/` is not edited manually.

## Build, Test, and Development Commands

Use Bun for dependency and script execution.

- `bun install` installs dependencies from `bun.lock`.
- `bun run dev` starts the local Astro dev server.
- `bun run check` runs Astro and TypeScript checks.
- `bun run build` runs checks and builds the Worker.
- `bun run preview` builds and serves the Worker through Wrangler.
- `bun run deploy` builds and deploys with Wrangler.
- `bun run format` checks Prettier formatting.
- `bun run format:fix` rewrites files with Prettier.
- `bun run cf-typegen` regenerates Cloudflare Worker types.

## Coding Style & Naming Conventions

Use TypeScript and Astro conventions already present in the codebase. Prefer two-space indentation, double quotes, semicolons, and explicit interfaces for shared data shapes such as `StationConfig`. Route parameters follow Astro bracket syntax, for example `[station]` and `[timestamp]`. Keep station slugs lowercase and URL-safe, matching paths like `/zwfm/2026-06-06_17`. Styling uses Tailwind utility classes and theme tokens from `tailwind.config.mjs`.

## Testing Guidelines

There is no dedicated test runner configured yet. Treat `bun run build` as required verification because it includes Astro and TypeScript checks. For UI or playback changes, also run `bun run preview` and manually test representative URLs such as `/zwfm/2026-06-06_17` and `/rucphen/2026-06-06_17`, including invalid station and timestamp cases.

## Commit & Pull Request Guidelines

Recent history uses short imperative or Conventional Commit-style subjects, for example `fix: restore Astro Cloudflare deploy flow` and `docs: add contributor guide`. Dependabot commits use `Bump ...` subjects. Keep commits focused and mention the user-visible behavior or tooling change.

Pull requests should include a concise summary, verification commands run, linked issues when applicable, and screenshots or recordings for visible UI changes. Note any Cloudflare, audio API, or station configuration impact explicitly.

## Security & Configuration Tips

Do not commit Wrangler credentials, local `.wrangler` state, or generated secrets. Keep audio and metadata URLs centralized in `src/config/stations.ts`, and validate new station entries before deployment. For Astro 6, keep `wrangler.toml` `main` on `@astrojs/cloudflare/entrypoints/server`; Wrangler uses the generated `dist/server/wrangler.json` after `astro build`.
