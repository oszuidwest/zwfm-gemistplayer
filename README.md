# ZuidWest FM Gemistplayer

Catch-up radio player for Dutch radio stations. Built with Astro for Cloudflare Pages deployment.

## Prerequisites

- [Bun](https://bun.sh/)
- Wrangler CLI

## Installation

```bash
bun install
```

## Development

```bash
bun run dev          # Start dev server
bun run build        # Type check and build
bun run preview      # Preview with wrangler
bun run deploy       # Deploy to Cloudflare Pages
bun run format       # Check formatting
bun run format:fix   # Fix formatting
bun run cf-typegen   # Generate Cloudflare types
```

## Project Structure

```
src/
├── config/
│   └── stations.ts                  # Station configurations
├── pages/
│   └── [station]/[timestamp].astro  # Dynamic player page
├── layouts/
│   └── Layout.astro                 # Base layout
└── styles/
    └── global.css                   # Tailwind imports
```

## URL Format

```
/{station}/{timestamp}
```

- `station`: `zwfm` or `rucphen`
- `timestamp`: `YYYY-MM-DD_HH` (24-hour)

Example: `/zwfm/2024-05-18_11`

## Station Configuration

- **ZuidWest FM**: Pink theme (`#e6007e`), station ID: `zwfm`
- **Rucphen RTV**: Blue theme (`#003576`), station ID: `rucphen`

## Audio File API

The player fetches audio files from:

```
https://audio.zuidwest.cloud/{station}/{timestamp}.mp3
```

Example: `https://audio.zuidwest.cloud/zuidwest/2024-05-18_11.mp3`

The audio and `.meta` files are created by the [ZuidWest FM Audiologger](https://github.com/oszuidwest/zwfm-audiologger). Metadata files contain show names and are fetched alongside the audio files.

## Deployment

```bash
bun run deploy
```

Or manually:

1. `bun run build`
2. Deploy `dist/` to Cloudflare Pages

## Adding a Station

1. Add the new station configuration to `src/config/stations.ts`
2. Include all required fields: slug, audioLoggerUrl, stationName, stationBluesky, colors, openGraphImage, faviconUrl, and logoUrl
3. The station will automatically be available at `/{slug}/{timestamp}`

## Features

- HTML5 audio player with custom controls and gradient progress bar
- Media Session API integration for lockscreen controls
- Dark mode (system preference)
- Social sharing (Bluesky, Facebook, WhatsApp, Email)
- Time-based sharing - share from current playback position
- Download audio files
- Show metadata from `.meta` files
- Plausible Analytics integration
- GetSiteControl for DAB+ marketing

### Media Controls

The player integrates with the Media Session API to show:

- Show name and station on phone lockscreens
- Station logo on media controls
- Play/pause and seek controls
- Works on Android, iOS (in Safari), and desktop browsers

## Tech Stack

- Astro 5.8.2 (SSR with Cloudflare adapter)
- TypeScript
- Tailwind CSS 4.1.8
- Cloudflare Pages

## License

Mozilla Public License 2.0
