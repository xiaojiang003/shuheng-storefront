#!/usr/bin/env node
/** Smoke-test JSON-LD graph structure for QA evidence pack */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const checks = [];

function pass(name) {
  checks.push({ name, ok: true });
}

function fail(name, detail) {
  checks.push({ name, ok: false, detail });
}

// Verify key SEO source files exist
const required = [
  'src/lib/jsonLd.ts',
  'src/components/seo/JsonLd.tsx',
  'src/pages/ProductPage.tsx',
  'src/pages/SizingGuidePage.tsx',
  'src/pages/HomePage.tsx',
];

for (const f of required) {
  try {
    readFileSync(join(root, f), 'utf8');
    pass(`file exists: ${f}`);
  } catch {
    fail(`file exists: ${f}`, 'missing');
  }
}

const jsonLd = readFileSync(join(root, 'src/lib/jsonLd.ts'), 'utf8');
if (jsonLd.includes('buildProductJsonLd') && jsonLd.includes('@graph')) {
  pass('Product JSON-LD builder uses @graph');
} else {
  fail('Product JSON-LD builder', 'missing @graph pattern');
}

if (jsonLd.includes('aggregateRating')) {
  fail('No fake ratings', 'aggregateRating found — prohibited');
} else {
  pass('No aggregateRating in builder');
}

const failed = checks.filter((c) => !c.ok);
console.log('\nSEO validation\n');
for (const c of checks) {
  console.log(`  [${c.ok ? 'PASS' : 'FAIL'}] ${c.name}${c.detail ? ` — ${c.detail}` : ''}`);
}
console.log(failed.length ? `\n${failed.length} check(s) failed.\n` : '\nAll checks passed.\n');
process.exit(failed.length ? 1 : 0);
