import { SHOOT_ANGLES } from '@/data/shootAngles';
import { useSwipe } from '@/hooks/useSwipe';
import { cn } from '@/lib/cn';
import type { ProductImage } from '@/types/product';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface GalleryProps {
  images: ProductImage[];
  title: string;
}

export function Gallery({ images, title }: GalleryProps) {
  const ordered = SHOOT_ANGLES.map((a) => images.find((i) => i.angle === a.code)).filter(Boolean) as ProductImage[];
  const [active, setActive] = useState(0);
  const current = ordered[active] ?? images[0];
  const total = ordered.length;

  const goPrev = () => setActive((i) => (i > 0 ? i - 1 : total - 1));
  const goNext = () => setActive((i) => (i < total - 1 ? i + 1 : 0));

  const swipe = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev });

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="hidden flex-col gap-2 md:flex" role="tablist" aria-label="Product angles">
        {ordered.map((img, i) => (
          <button
            key={img.angle}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`${img.angle} view`}
            onClick={() => setActive(i)}
            className={cn(
              'size-20 overflow-hidden rounded-card border-2',
              i === active ? 'border-brand' : 'border-border',
            )}
          >
            <img src={img.src} alt="" width={84} height={84} className="size-full object-cover" />
          </button>
        ))}
      </div>
      <div
        className="relative aspect-square flex-1 touch-pan-y overflow-hidden rounded-card bg-surface-alt"
        onTouchStart={swipe.onTouchStart}
        onTouchEnd={swipe.onTouchEnd}
      >
        {current && (
          <img
            src={current.src}
            alt={current.alt ?? title}
            width={700}
            height={700}
            draggable={false}
            className="size-full object-cover select-none"
          />
        )}
        {/* Mobile prev/next */}
        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 shadow md:hidden"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 shadow md:hidden"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 md:hidden">
          {ordered.map((img, i) => (
            <button
              key={img.angle}
              type="button"
              aria-label={`View ${img.angle}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={cn(
                'rounded-full transition-all',
                i === active ? 'size-2.5 bg-brand' : 'size-2 bg-border',
              )}
            />
          ))}
        </div>
        <p className="absolute right-3 top-3 rounded-pill bg-ink/60 px-2 py-0.5 text-xs text-white md:hidden">
          {active + 1} / {total}
        </p>
      </div>
    </div>
  );
}
