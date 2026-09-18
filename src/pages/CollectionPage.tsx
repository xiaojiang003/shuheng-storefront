import { ProductGrid } from '@/components/product/ProductGrid';
import { getProductsByCategory, MOCK_PRODUCTS } from '@/data/products.mock';
import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export function CollectionPage() {
  const { category } = useParams();
  const [search] = useSearchParams();
  const silhouette = search.get('silhouette') ?? undefined;
  const sort = search.get('sort');

  const products = useMemo(() => {
    let list = category ? getProductsByCategory(category) : [...MOCK_PRODUCTS];
    if (silhouette) {
      list = list.filter((p) => p.silhouette === silhouette);
    }
    if (sort === 'newest') {
      list = [...list].reverse();
    }
    return list;
  }, [category, silhouette, sort]);

  const title = category
    ? category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : silhouette
      ? `Silhouette: ${silhouette.replace(/-/g, ' ')}`
      : 'All Headwear';

  return (
    <div className="container-content py-10">
      <title>{title} — Shuheng Collection</title>
      <h1 className="text-3xl font-bold text-brand">{title}</h1>
      <p className="mt-2 text-sm text-muted">{products.length} results</p>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
