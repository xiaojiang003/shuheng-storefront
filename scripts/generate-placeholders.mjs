#!/usr/bin/env node
/** Generate SVG placeholder product images for dev/demo */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKUS = ['sh-6p-001', 'sh-dad-002', 'sh-trk-003', 'sh-bkt-004'];
const ANGLES = ['3QL', 'F', 'R', 'LSIDE', 'RSIDE', 'INT'];
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'products');

for (const sku of SKUS) {
  const dir = join(root, sku);
  mkdirSync(dir, { recursive: true });
  for (const angle of ANGLES) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700">
  <rect fill="#F5F7FB" width="700" height="700"/>
  <text x="350" y="340" text-anchor="middle" font-family="system-ui" font-size="24" fill="#5B6270">${sku}</text>
  <text x="350" y="380" text-anchor="middle" font-family="system-ui" font-size="18" fill="#1D4ED8">${angle}</text>
</svg>`;
    writeFileSync(join(dir, `${sku}-${angle}.webp`), svg);
  }
}

console.log('Placeholder product images generated at', root);
