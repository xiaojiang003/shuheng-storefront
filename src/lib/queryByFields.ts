import { MERCHANT } from '@/config/merchant';
import fallbackManifest from '@/data/newArrivalsFallback.json';
import type { NewArrivalItem } from '@/types/product';

interface QueryParams {
  minisiteId?: number;
  fieldNames: string;
  extendParams?: { strategyName?: string };
}

interface RawProduct {
  id?: string;
  subject?: string;
  imageUrls?: { x350?: string };
  imageUrlList?: { x350?: string }[];
  fobPriceWithoutUnit?: string;
  fobPrice?: string;
  moq?: string;
  url?: string;
}

interface ApiResponse {
  data?: {
    productsByRecommendStrategy?: {
      value?: RawProduct[];
    };
  };
}

function normalizeItem(p: RawProduct): NewArrivalItem | null {
  const id = p.id;
  const title = p.subject;
  const image = p.imageUrls?.x350 ?? p.imageUrlList?.[0]?.x350;
  const price = p.fobPriceWithoutUnit ?? p.fobPrice;
  if (!id || !title || !image || !price) return null;
  const url = p.url?.startsWith('//') ? `https:${p.url}` : p.url ?? '#';
  return {
    id,
    title,
    image,
    price,
    moq: p.moq ?? '50',
    url,
  };
}

export async function queryByFields(_params: QueryParams): Promise<NewArrivalItem[]> {
  const endpoint = import.meta.env.VITE_PRODUCT_API_URL;

  if (!endpoint) {
    return fallbackManifest as NewArrivalItem[];
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        minisiteId: _params.minisiteId ?? MERCHANT.companyId,
        fieldNames: _params.fieldNames,
        extendParams: _params.extendParams,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = (await res.json()) as ApiResponse;
    const raw = json.data?.productsByRecommendStrategy?.value ?? [];
    const seen = new Set<string>();
    const items: NewArrivalItem[] = [];

    for (const p of raw) {
      const item = normalizeItem(p);
      if (!item || seen.has(item.id)) continue;
      seen.add(item.id);
      items.push(item);
      if (items.length >= 8) break;
    }

    return items.length > 0 ? items : (fallbackManifest as NewArrivalItem[]);
  } catch {
    return fallbackManifest as NewArrivalItem[];
  }
}
