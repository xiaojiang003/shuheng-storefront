import type { MaterialKey } from '@/types/material';
import type { SilhouetteKey } from '@/types/silhouette';

export type ShootAngle = '3QL' | 'F' | 'R' | 'LSIDE' | 'RSIDE' | 'INT';

export interface ProductImage {
  angle: ShootAngle;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface PriceTier {
  minQty: number;
  maxQty?: number;
  price: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  title: string;
  description: string;
  category: string;
  silhouette: SilhouetteKey;
  materials: MaterialKey[];
  color: string;
  priceTiers: PriceTier[];
  moq: number;
  currency: string;
  images: ProductImage[];
  sizes: string[];
  soldOutSizes: string[];
  isCustom: boolean;
  specifications: Record<string, string>;
  customization: string[];
  leadTime?: string;
}

export interface SizingRow {
  us: string;
  alpha: string;
  inches: string;
  cm: string;
  band: string;
  adjustable: string;
  notes?: string;
}

export interface NewArrivalItem {
  id: string;
  title: string;
  image: string;
  price: string;
  moq: string;
  url: string;
}
