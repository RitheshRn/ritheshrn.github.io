# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for Rithesh R N, deployed via GitHub Pages at `ritheshrn.com`. A static single-page site with no build system — editing files is all that's needed; push to `master` to deploy.

## Development

Serve the root with any static file server to preview locally:

```bash
python3 -m http.server 8000
# or
npx serve .
```

No build step, no package manager, no test suite.

## Architecture

Single-page HTML application. All sections are `<section id="...">` within one `index.html`.

### Sections (in order)
| ID | Purpose |
|---|---|
| `#home` | Hero — photo, name, role, bio, stats, links |
| `#about` | Bio paragraphs + sidebar cards (Currently Building, Research Focus, Open To) |
| `#research` | Featured work cards (6 cards) + full publications list |
| `#experience` | Work timeline + Education list |
| `#life` | Photography gallery + 3D travel globe |
| `#contact` | Contact links |

### Key Files
- **`index.html`** — All content lives here. Edit this for any content changes.
- **`css/style.css`** — All custom styles. Uses CSS custom properties defined in `:root`. Max content width: 960px (`--max-width`).
- **`js/main.js`** — Nav toggle, smooth scroll, navbar shadow, active nav highlighting, photo lightbox, footer year.
- **`js/travel-map.js`** — 3D globe using `globe.gl` (loaded from unpkg CDN). `travelData` at the top defines visited countries (ISO-2 codes) and cities (lat/lng). Also contains `countryNameMap` for GeoJSON name matching.

### External Dependencies (CDN, no package.json)
- **Inter** — Google Fonts
- **Font Awesome 6.4.0** — Icons
- **Three.js + OrbitControls + globe.gl** — 3D travel globe in `#life`
- **jQuery** — Loaded but not used by custom JS

## Design System

CSS variables in `style.css (:root)`:
- `--accent: #2563eb` — primary blue
- `--text: #0f172a` — near-black body text
- `--bg-alt: #f8fafc` — alternate section background (About, Experience, Contact)
- Amber (`--amber-bg / --amber-text`) — awards, ICLR spotlight badges
- Green (`--green-bg / --green-text`) — "Currently" tag, lead author badges

## Content Updates

- **Publications** — Add `.pub-item` blocks inside `.publications-list` in `index.html`. Featured cards go in `.featured-grid`.
- **Travel data** — Edit `travelData` in `js/travel-map.js`. Use ISO-2 country codes. Add to `countryNameMap` if the GeoJSON country name differs from the display name.
- **Photography** — Add `<div class="photo-item"><img src="images/..." alt="..."></div>` inside `#photoGallery`.
- **Resume** — Replace `RRNM_CV.pdf` in the root directory.

## Deployment

Push to `master`. GitHub Pages serves the root via `CNAME` → `ritheshrn.com`.
