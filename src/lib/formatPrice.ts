import type { PriceTier } from '@/types/product';

export function formatPriceRange(tiers: PriceTier[], currency = 'USD'): string {
  if (tiers.length === 0) return 'Price on enquiry';
  const prices = tiers.map((t) => parseFloat(t.price)).filter((p) => !Number.isNaN(p));
  if (prices.length === 0) return tiers[0]?.price ?? 'Price on enquiry';
  const low = Math.min(...prices);
  const high = Math.max(...prices);
  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n);
  return low === high ? fmt(low) : `${fmt(low)} – ${fmt(high)}`;
}
