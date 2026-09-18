# Shuheng Headwear Storefront

B2B custom headwear standalone website — implementation of Master Design Proposal v2.0.

## Stack

- React 19 + TypeScript (strict)
- Vite 8 + Tailwind CSS 4
- react-router-dom 7
- TanStack Query 5 + Zustand 5

## Commands

```bash
npm install
npm run dev
npm run build
node scripts/generate-placeholders.mjs   # dev product images
node scripts/verify-angles.mjs public/products/sh-6p-001
```

## Environment

| Variable | Description |
|----------|-------------|
| `VITE_PRODUCT_API_URL` | New Arrivals API endpoint (falls back to static manifest) |
| `VITE_SIZING_API_URL` | Sizing chart API (falls back to bundled data) |

## Project structure

See proposal Section 7.2 for naming conventions. Key registries:

- `src/data/silhouettes.ts` — 8 silhouettes
- `src/data/materials.ts` — 5 materials
- `src/data/logoPlacements.ts` — Quick Quote placements

## Stakeholder decisions

See [docs/STAKEHOLDER_DECISIONS.md](docs/STAKEHOLDER_DECISIONS.md).

## Photography

See [docs/PHOTOGRAPHY_STANDARD.md](docs/PHOTOGRAPHY_STANDARD.md).

## SEO note

JSON-LD is rendered via React components. For production, deploy with SSR or prerender (Section 7.3.3).
