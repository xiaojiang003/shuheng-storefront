#!/usr/bin/env python3
"""Download demo images from competitor reference sites for local preview only.

Sources (see docs/竞品分析与优化参考.md):
  - NOVAE: https://novae-apparel.com/
  - Fuanger: https://www.xmfortunate.com/
  - CON-STAR: https://www.constarcap.com/

Replace all demo assets with Shuheng-owned photography before production launch.
"""
from __future__ import annotations

import os
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / 'public'

DOWNLOADS: dict[str, str] = {
    'images/hero-lifestyle.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/module/m92_banner/1780450371113228.jpg',
    'images/categories/6-panel.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/product/1766453813412405.jpg',
    'images/categories/trucker.jpg': 'https://img.yfisher.com/m0/1786932099214-sku-12.jpg',
    'images/categories/bucket.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/product/1766552971645994.jpg',
    'images/categories/dad.jpg': 'https://img.yfisher.com/m0/1786519206394-sku-8.jpg',
    'images/placeholder-cap.jpg': 'https://img.yfisher.com/m0/1786339130727-sku-3-800x800.webp',
    'images/factory-workshop.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/module/m33_about/1764988264607390.png',
    'images/production-line.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/module/m92_banner/1765264908582456.jpg',
    'images/cases/iceland-trucker.jpg': 'https://img.yfisher.com/m0/1786677754535-sku-2-qy-146-2.jpg',
    'images/cases/sweden-trucker.jpg': 'https://img.yfisher.com/m0/1786932099214-sku-12.jpg',
    'images/cases/us-snapback.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/product/1766546895170336.jpg',
    'images/blog/fabric-gsm.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/news/1766996698729600.jpg',
    'images/blog/cotton-poly.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/news/1766997588925771.jpg',
    'images/blog/hat-size.jpg': 'https://cdn-pro.analyspeed.com/1494/upload/news/1789103959532131.jpg',
}

PRODUCTS: dict[str, str] = {
    'sh-6p-001': 'https://cdn-pro.analyspeed.com/1494/upload/product/1766546895170336.jpg',
    'sh-dad-002': 'https://img.yfisher.com/m0/1786519206394-sku-8.jpg',
    'sh-trk-003': 'https://img.yfisher.com/m0/1786932099214-sku-12.jpg',
    'sh-bkt-004': 'https://cdn-pro.analyspeed.com/1494/upload/product/1766552971645994.jpg',
}

ANGLES = ['3QL', 'F', 'R', 'LSIDE', 'RSIDE', 'INT']


def download(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    data = urllib.request.urlopen(req, timeout=30).read()
    dest.write_bytes(data)
    print(f'OK {dest} ({len(data)} bytes)')


def main() -> None:
    for rel, url in DOWNLOADS.items():
        download(url, ROOT / rel)

    for sku, url in PRODUCTS.items():
        ext = '.webp' if url.endswith('.webp') else '.jpg'
        for angle in ANGLES:
            download(url, ROOT / 'products' / sku / f'{sku}-{angle}{ext}')

    print('Demo images saved under public/')


if __name__ == '__main__':
    main()
