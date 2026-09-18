import { cn } from '@/lib/cn';
import { trackEvent } from '@/lib/analytics';

interface SizeGridProps {
  sizes: string[];
  soldOutSizes: string[];
  selected?: string;
  onSelect?: (size: string) => void;
  onOpenGuide?: () => void;
}

export function SizeGrid({ sizes, soldOutSizes, selected, onSelect, onOpenGuide }: SizeGridProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold">Size</span>
        {onOpenGuide && (
          <button
            type="button"
            onClick={() => {
              trackEvent('size_chart_open');
              onOpenGuide();
            }}
            className="text-xs text-brand underline"
          >
            Size guide
          </button>
        )}
      </div>
      <div role="radiogroup" aria-label="Select size" className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const soldOut = soldOutSizes.includes(size);
          return (
            <button
              key={size}
              type="button"
              role="radio"
              aria-checked={selected === size}
              aria-disabled={soldOut}
              disabled={soldOut}
              onClick={() => !soldOut && onSelect?.(size)}
              className={cn(
                'min-w-12 rounded-card border px-3 py-2 text-xs font-medium',
                selected === size && 'border-brand bg-brand text-white',
                soldOut && 'cursor-not-allowed line-through opacity-50',
                !selected && !soldOut && 'border-border hover:border-brand',
              )}
            >
              {soldOut ? `${size} — Sold Out` : size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
