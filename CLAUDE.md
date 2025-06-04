# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
bun dev           # Start development server (astro dev)
bun start         # Alias for dev

# Build & Preview
bun build         # Type check and build for production
bun preview       # Build and preview with Cloudflare Pages locally

# Deployment
bun deploy        # Build and deploy to Cloudflare Pages

# Code Quality
bun format        # Check formatting with Prettier
bun format:fix    # Auto-fix formatting issues

# Type Generation
bun cf-typegen    # Generate Cloudflare Workers types
```

## Architecture Overview

This is a **radio archive player** ("Gemist" = "Missed" in Dutch) built with Astro and deployed to Cloudflare Pages. It provides a web interface to listen to archived radio broadcasts from Dutch radio stations.

### Key Components

1. **Single Dynamic Route**: `/[station]/[timestamp]` (src/pages/[station]/[timestamp].astro)
   - URL format: `/{station}/{timestamp}?t={startTime}`
   - Station: Radio station slug (e.g., "zwfm", "rucphen")
   - Timestamp: `YYYY-MM-DD_HH` format (e.g., "2024-05-18_11")
   - Optional `t` parameter for starting playback at specific time

2. **Station Configuration**: Hardcoded array in the main component containing:
   - `slug`: URL identifier
   - `audioLoggerUrl`: Base URL for audio files
   - `name`: Display name
   - `twitterHandle`: For social sharing (note: currently uses Bluesky button)
   - `brandColor`: Station's brand color
   - `ogImage`: Social sharing image

3. **Audio File Structure**:
   - Audio files: `{audioLoggerUrl}/{timestamp}.mp3`
   - Metadata files: `{audioLoggerUrl}/{timestamp}.meta` (contains show name)

### Technical Stack

- **Framework**: Astro 4.16 with SSR mode
- **Deployment**: Cloudflare Pages with Workers
- **Styling**: Tailwind CSS with dark mode support
- **Package Manager**: Bun
- **Language**: TypeScript

### Development Notes

- The application validates timestamps using regex: `/^(\d{4})-(\d{2})-(\d{2})_(\d{2})$/`
- Audio files are checked for existence via HEAD request before rendering
- Client-side JavaScript handles audio player controls and social sharing
- Brand colors are dynamically injected via CSS variables
- iOS-specific handling for audio seeking is implemented
- Dark mode automatically follows system preferences
- Social sharing supports Bluesky, Facebook, WhatsApp, and Email with UTM tracking