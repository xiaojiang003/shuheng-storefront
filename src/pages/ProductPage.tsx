import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Gallery } from '@/components/product/Gallery';
import { MaterialBadge } from '@/components/product/MaterialBadge';
import { SizeGrid } from '@/components/product/SizeGrid';
import { SizeMappingTable } from '@/components/product/SizeMappingTable';
import { ProductCard } from '@/components/product/ProductCard';
import { JsonLd } from '@/components/seo/JsonLd';
import { MERCHANT } from '@/config/merchant';
import { getSilhouette } from '@/data/silhouettes';
import { FITTED_SIZING } from '@/data/sizingChart';
import { getProductBySlug, MOCK_PRODUCTS } from '@/data/products.mock';
import { formatPriceRange } from '@/lib/formatPrice';
import { buildProductJsonLd } from '@/lib/jsonLd';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedSize, setSelectedSize] = useState<string>();
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const openQuote = useQuoteStore((s) => s.open);

  if (!product) return <Navigate to="/404" replace />;

  const silhouette = getSilhouette(product.silhouette);
  const crossSell = MOCK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  return (
    <>
      <title>{product.title} — Shuheng</title>
      <JsonLd data={buildProductJsonLd(product, MERCHANT.siteUrl)} />
      <div className="container-content py-6 pb-24 md:py-10 md:pb-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link to="/">Home</Link>
          {' / '}
          <Link to={`/collection/${product.category}`}>{product.category}</Link>
          {' / '}
          <span>{product.title}</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-2">
          <Gallery images={product.images} title={product.title} />
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-2 text-xl font-semibold text-accent">
              {formatPriceRange(product.priceTiers, product.currency)}
            </p>
            <p className="mt-1 text-sm text-muted">MOQ: {product.moq} pieces</p>
            {silhouette && (
              <p className="mt-4 text-sm">
                <span className="font-semibold">Silhouette:</span> {silhouette.label} —{' '}
                {silhouette.chips.join(' · ')}
              </p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {product.materials.map((m) => (
                <MaterialBadge key={m} material={m} />
              ))}
            </div>
            <div className="mt-6">
              <SizeGrid
                sizes={product.sizes}
                soldOutSizes={product.soldOutSizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
                onOpenGuide={() => setShowSizeGuide(true)}
              />
            </div>
            {showSizeGuide && (
              <div className="mt-4 rounded-card border border-border p-4">
                <SizeMappingTable rows={FITTED_SIZING} caption="Hat size mapping" />
              </div>
            )}
            <Button
              className="mt-6 hidden w-full md:inline-flex"
              onClick={() =>
                openQuote(
                  {
                    capStyle: product.silhouette,
                    material: product.materials[0] ?? 'recommend',
                    logoPlacements: ['front-centred'],
                    sourceProduct: product.sku,
                  },
                  'pdp',
                )
              }
            >
              {product.isCustom ? 'Get a Quick Quote' : 'Enquire about this style'}
            </Button>
          </div>
        </div>
        {/* Mobile sticky CTA */}
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 px-4 py-3 backdrop-blur-sm safe-bottom md:hidden">
          <Button
            className="min-h-12 w-full"
            onClick={() =>
              openQuote(
                {
                  capStyle: product.silhouette,
                  material: product.materials[0] ?? 'recommend',
                  logoPlacements: ['front-centred'],
                  sourceProduct: product.sku,
                },
                'pdp',
              )
            }
          >
            {product.isCustom ? 'Get a Quick Quote' : 'Enquire about this style'}
          </Button>
        </div>
        <div className="mt-12">
          <Accordion
            defaultOpen="description"
            items={[
              { id: 'description', title: 'Description', content: product.description },
              {
                id: 'spec',
                title: 'Specification',
                content: (
                  <dl className="space-y-1">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <dt className="font-semibold">{k}:</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                ),
              },
              {
                id: 'custom',
                title: 'Customization Options',
                content: product.customization.join(', '),
              },
              {
                id: 'shipping',
                title: 'Shipping & Lead Time',
                content: product.leadTime ?? 'confirmed on enquiry',
              },
            ]}
          />
        </div>
        {crossSell.length > 0 && (
          <section className="mt-16" aria-labelledby="cross-sell">
            <h2 id="cross-sell" className="mb-6 text-xl font-bold">
              You may also like
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {crossSell.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
