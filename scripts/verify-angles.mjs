#!/usr/bin/env node
/**
 * 6-Angle intake checklist — Section 4.2.4
 * Usage: node scripts/verify-angles.mjs <sku-directory>
 * Example: node scripts/verify-angles.mjs public/products/sh-6p-001
 */
import { readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const REQUIRED = ['3QL', 'F', 'R', 'LSIDE', 'RSIDE', 'INT'];
const EXT = /\.(avif|webp|jpe?g|png|tiff?)$/i;

const dir = process.argv[2];
if (!dir) {
  console.error('Usage: node scripts/verify-angles.mjs <sku-directory>');
  process.exit(1);
}

const sku = basename(dir);
const files = readdirSync(dir);
const found = new Set();

for (const file of files) {
  const match = file.match(new RegExp(`^${sku.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-([A-Z0-9]+)\\.`, 'i'));
  if (match && EXT.test(file)) {
    found.add(match[1].toUpperCase());
  }
}

let failed = false;
console.log(`\nIntake checklist: ${sku}\n`);

for (const angle of REQUIRED) {
  const ok = found.has(angle);
  console.log(`  [${ok ? 'PASS' : 'FAIL'}] ${angle}`);
  if (!ok) failed = true;
}

const extras = [...found].filter((a) => !REQUIRED.includes(a));
if (extras.length) {
  console.log(`  [INFO] Optional angles: ${extras.join(', ')}`);
}

console.log(failed ? '\nResult: BLOCK publication — missing required angles.\n' : '\nResult: OK — all six angles present.\n');
process.exit(failed ? 1 : 0);
