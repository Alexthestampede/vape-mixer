# Vape Mixer - Agent Notes

## Architecture

Single-file PWA: `index.html` contains HTML, CSS, and JavaScript. No build step.

## Critical Technical Details

### Paths (GitHub Pages Subdirectory)
- Deployed to `https://USERNAME.github.io/vape-mixer/`
- **Must use relative paths**: `./` not `/`
- `manifest.json`: `"start_url": "./"`
- `sw.js`: Cache URLs use `"./"` not `"/"`
- Breaking this causes 404 on PWA install

### Calculation Logic
The mixing calculation is **Flavor + Base**, not percentages of total:

```
Total = Flavor + Base
Base = Total - Flavor
VG = (VG% / 100) × Base
PG = (PG% / 100) × Base
```

Example: 100ml bottle, 10% flavor, 70/30 VG/PG base
- 10ml flavor (10% of total)
- 63ml VG (70% of remaining 90ml base)
- 27ml PG (30% of remaining 90ml base)

### Data Storage
- **localStorage only** - no backend
- Keys: `vape_inventory`, `vape_steeping`, `vape_recipes`, `vape_calc_history`
- Data lost on browser cache clear - CSV export is only backup

### Assets
- `icon-192.png` & `icon-512.png`: Required for PWA
- `icon-192.svg`: Source file (convert to PNG for deployment)

### Fonts
- Body uses Atkinson Hyperlegible (Google Fonts) with a system-font fallback stack
- `sw.js` runtime-caches `fonts.gstatic.com` font files for offline use
- Bump `CACHE_NAME` in `sw.js` when changing cached assets so installed PWAs update

## Deployment

GitHub Pages from root (`/`). No build process.

```bash
git add .
git commit -m "message"
git push
```

Wait 1-2 minutes for Pages update after push.

## Testing Locally

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Style Conventions

- 80s faded aesthetic: deep purples (`#2d1b4e`), soft pinks (`#ff6b9d`), cyans (`#4ecdc4`)
- Glass-morphism: `backdrop-filter: blur(10px)`, translucent backgrounds
- Mobile-first, max-width 600px container
