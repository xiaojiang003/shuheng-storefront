# 6-Angle Shooting Standard

Contractual supplier requirement per Master Design Proposal v2.0 Section 4.2.

## Required angles (in order)

| Code | Angle | Purpose |
|------|-------|---------|
| 3QL | Three-quarter left | Catalogue hero |
| F | Front | Primary artwork view |
| R | Rear | Closure engineering |
| LSIDE | Left side 90° | Panelling, eyelets |
| RSIDE | Right side 90° | Mirror of left |
| INT | Interior / sticker | Sweatband, labels, QC sticker |

## File naming

```
{sku}-{ANGLE}.{ext}
Example: sh-6p-001-3QL.avif
```

Rules: lowercase SKU, hyphen-separated, angle code UPPERCASE last segment.

## Derivatives

350 / 700 / 1050 / 1400 px wide, 1:1, AVIF > WebP > JPEG.

## Intake

Run verification before publish:

```bash
node scripts/verify-angles.mjs public/products/sh-6p-001
```

A SKU with fewer than six conforming images is **not publishable**.
