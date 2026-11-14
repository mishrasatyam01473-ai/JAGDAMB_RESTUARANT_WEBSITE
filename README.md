# JAGDAMB JUICE BAR — Official Landing Website

A minimal, high-performance, and self-contained mobile landing website for **जयवर्धन जगदंब ज्युस बार (JAGDAMB JUICE BAR)** — *“Fresh Juices... Healthy Life...”* (शाखा क्र. ३७, वसई).

## Architecture Highlights
- **Zero External Dependencies**: Pure SVG icons, zero Google Fonts, zero external CDNs, completely offline-ready.
- **Minimal Codebase**: 5 concise components, 1 clean centralized data file, and a single organized CSS file.
- **Mobile Menu Viewer**:
  - Borderless, edge-to-edge menu card image centered in the viewport.
  - Background filled with the store's warm cream & orange theme (zero black gaps).
  - Native pinch-to-zoom & double-tap zoom enabled.
  - Close button dynamically synchronized via `visualViewport` so it remains visible at the top of the screen at any zoom level.
- **Direct Action Links**:
  - **Menu**: In-app mobile full-screen menu card viewer.
  - **Review Us**: Direct link to the official Google Review page for Vasai branch.
  - **Social Media**: Direct link to the official Instagram profile.
- **Static Branding Footer**: Clean "Powered By BROTOCOL" badge with zero popups or tabs.

## Development & Build
```bash
# Run local dev server
npm run dev

# Run Oxlint (0 warnings, 0 errors)
npm run lint

# Production build (~9 kB CSS, ~232 kB JS)
npm run build
```
