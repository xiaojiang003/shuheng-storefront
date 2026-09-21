import type { Product, ShootAngle } from '@/types/product';

const ANGLES: ShootAngle[] = ['3QL', 'F', 'R', 'LSIDE', 'RSIDE', 'INT'];

function buildImages(sku: string, title: string): Product['images'] {
  return ANGLES.map((angle) => ({
    angle,
    src: `/products/${sku}/${sku}-${angle}.jpg`,
    width: 700,
    height: 700,
    alt: `${title} — ${angle} view`,
  }));
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: '6-panel-structured-snapback',
    sku: 'sh-6p-001',
    title: '6-Panel Structured Snapback Cap — Custom Embroidered',
    description:
      'Custom 6-panel structured snapback in cotton twill with flat visor, plastic snapback closure and mid-high profile. Flat and 3D puff embroidery, patch and sublimation available.',
    category: '6-panel-caps',
    silhouette: 'six-panel-snapback',
    materials: ['cotton'],
    color: 'Black',
    priceTiers: [
      { minQty: 50, maxQty: 499, price: '4.60' },
      { minQty: 500, maxQty: 4999, price: '3.40' },
      { minQty: 5000, price: '2.80' },
    ],
    moq: 50,
    currency: 'USD',
    images: buildImages('sh-6p-001', '6-Panel Structured Snapback'),
    sizes: ['6⅞', '7', '7⅛', '7¼', '7⅜', '7½', '7⅝', '7¾', '7⅞', '8'],
    soldOutSizes: ['7¾'],
    isCustom: true,
    specifications: {
      Panels: '6',
      Crown: 'Structured',
      Closure: 'Plastic snapback',
      Visor: 'Flat',
      Profile: 'Mid-high',
    },
    customization: ['Flat embroidery', '3D puff', 'Woven patch', 'Sublimation'],
    leadTime: 'confirmed on enquiry',
  },
  {
    id: '2',
    slug: 'unstructured-dad-hat',
    sku: 'sh-dad-002',
    title: 'Unstructured Dad Hat — Cotton Twill',
    description: 'Relaxed unstructured dad hat with curved visor and slider buckle closure.',
    category: 'dad-hats',
    silhouette: 'dad-hat',
    materials: ['cotton'],
    color: 'Navy',
    priceTiers: [{ minQty: 50, maxQty: 499, price: '3.90' }, { minQty: 500, price: '2.95' }],
    moq: 50,
    currency: 'USD',
    images: buildImages('sh-dad-002', 'Unstructured Dad Hat'),
    sizes: ['One size'],
    soldOutSizes: [],
    isCustom: true,
    specifications: { Crown: 'Unstructured', Closure: 'Slider buckle', Visor: 'Curved' },
    customization: ['Flat embroidery', 'Screen print'],
  },
  {
    id: '3',
    slug: 'mesh-back-trucker',
    sku: 'sh-trk-003',
    title: 'Mesh Back Trucker Hat — Promotional',
    description: 'Classic trucker with structured front panel and polyester mesh back.',
    category: 'trucker-hats',
    silhouette: 'trucker-mesh',
    materials: ['cotton', 'mesh'],
    color: 'White / Red',
    priceTiers: [{ minQty: 100, price: '2.50' }],
    moq: 100,
    currency: 'USD',
    images: buildImages('sh-trk-003', 'Mesh Back Trucker'),
    sizes: ['One size'],
    soldOutSizes: [],
    isCustom: false,
    specifications: { Front: 'Cotton twill', Back: 'Polyester mesh', Closure: 'Snapback' },
    customization: ['Screen print', 'Embroidery'],
  },
  {
    id: '4',
    slug: 'bucket-hat-unstructured',
    sku: 'sh-bkt-004',
    title: 'Unstructured Bucket Hat — Festival Style',
    description: 'All-round brim bucket hat with interior band. One size fits most.',
    category: 'bucket-hats',
    silhouette: 'bucket-hat',
    materials: ['cotton'],
    color: 'Khaki',
    priceTiers: [{ minQty: 50, price: '3.20' }],
    moq: 50,
    currency: 'USD',
    images: buildImages('sh-bkt-004', 'Bucket Hat'),
    sizes: ['One size'],
    soldOutSizes: [],
    isCustom: true,
    specifications: { Brim: 'All-round', Closure: 'Band' },
    customization: ['Embroidery', 'Woven patch'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: string, silhouette?: string): Product[] {
  return MOCK_PRODUCTS.filter((p) => {
    if (category && p.category !== category) return false;
    if (silhouette && p.silhouette !== silhouette) return false;
    return true;
  });
}
