import { MaterialIcon } from '@/components/icons/materials/MaterialIcon';
import { formatPriceRange } from '@/lib/formatPrice';
import { cn } from '@/lib/cn';
import type { Product } from '@/types/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const hero = product.images.find((i) => i.angle === '3QL') ?? product.images[0];

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        'group block overflow-hidden rounded-card border border-border bg-surface transition-shadow hover:shadow-[var(--shadow-elevation-2)]',
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-surface-alt">
        <img
          src={hero?.src ?? '/images/placeholder-cap.webp'}
          alt={hero?.alt ?? product.title}
          width={350}
          height={350}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-250 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 min-h-10 text-sm font-semibold">{product.title}</h3>
        <p className="text-sm font-semibold text-brand">{formatPriceRange(product.priceTiers, product.currency)}</p>
        <p className="text-xs text-muted">MOQ: {product.moq}</p>
        <div className="flex gap-2">
          {product.materials.slice(0, 2).map((m) => (
            <span key={m} className="inline-flex items-center gap-1 text-xs text-muted">
              <MaterialIcon material={m} size={16} />
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
