# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 6 catch-up radio player deployed as a Cloudflare Worker. Main code lives in `src/`: `src/pages/[station]/[timestamp].astro` is the dynamic player route, `src/layouts/Layout.astro` is the HTML shell, `src/config/stations.ts` holds station metadata, and `src/styles/global.css` loads Tailwind. Static assets go in `public/`. Do not edit generated `dist/` output.

## Build, Test, and Development Commands

Use Bun for scripts and dependency management.

- `bun install` installs from `bun.lock`.
- `bun run dev` starts Astro locally.
- `bun run check` runs Astro and TypeScript checks.
- `bun run build` checks and builds the Worker.
- `bun run preview` builds and serves through Wrangler.
- `bun run deploy` builds and deploys with Wrangler.
- `bun run format` / `bun run format:fix` check or apply Prettier.
- `bun run cf-typegen` regenerates Cloudflare Worker types.

## Coding Style & Naming Conventions

Follow the existing TypeScript and Astro style: two-space indentation, double quotes, semicolons, and explicit interfaces for shared shapes such as `StationConfig`. Route parameters use Astro bracket syntax (`[station]`, `[timestamp]`). Station slugs must be lowercase and URL-safe, matching routes like `/zwfm/2026-06-06_17`. Styling uses Tailwind utilities and tokens from `tailwind.config.mjs`.

## Testing Guidelines

No dedicated test runner is configured. Run `bun run build` before committing because it includes type and Astro checks. For playback or UI changes, also run `bun run preview` and manually test representative routes, including `/zwfm/2026-06-06_17`, `/rucphen/2026-06-06_17`, invalid stations, invalid timestamps, play, seek, and download behavior.

## Commit & Pull Request Guidelines

Use short imperative or Conventional Commit-style subjects, for example `fix: restore Astro Cloudflare deploy flow` or `docs: add contributor guide`. Dependabot uses `Bump ...` subjects. Keep commits focused.

Pull requests should include a concise summary, verification commands, linked issues when relevant, and screenshots or recordings for UI changes. Call out Cloudflare, audio API, or station configuration impact.

## Security & Configuration Tips

Do not commit Wrangler credentials, `.wrangler/`, `.env*`, or generated secrets. Keep audio and metadata URLs in `src/config/stations.ts`.

For Astro 6, keep `wrangler.toml` `main` set to `@astrojs/cloudflare/entrypoints/server`. After `astro build`, Wrangler deploys using generated `dist/server/wrangler.json` and `dist/client` assets. Do not point `main` at `dist/_worker.js/index.js`.
