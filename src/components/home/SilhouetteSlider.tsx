import { SILHOUETTES } from '@/data/silhouettes';
import { cn } from '@/lib/cn';
import { trackEvent } from '@/lib/analytics';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export function SilhouetteSlider() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const viewedRef = useRef(false);

  useEffect(() => {
    const el = railRef.current;
    if (!el || viewedRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !viewedRef.current) {
          viewedRef.current = true;
          trackEvent('silhouette_view', { shapeCount: SILHOUETTES.length });
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((index: number, method: string) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.children[index] as HTMLElement | undefined;
    if (!card) return;
    const fromKey = SILHOUETTES[activeIndex]?.key;
    const toKey = SILHOUETTES[index]?.key;
    trackEvent('silhouette_slide', { fromKey, toKey, method });
    card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActiveIndex(index);
  }, [activeIndex]);

  return (
    <section className="py-16" aria-labelledby="silhouette-heading">
      <div className="container-content">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 id="silhouette-heading" className="text-2xl font-bold text-brand">
              Shop by Silhouette
            </h2>
            <p className="mt-1 text-muted">Not sure which shape suits your line? Start here.</p>
          </div>
          <Link to="/collection" className="text-sm text-brand underline">
            View all
          </Link>
        </div>
        <div className="relative">
          <div
            ref={railRef}
            tabIndex={0}
            role="list"
            aria-label="Silhouette shapes"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scrollTo(Math.min(activeIndex + 1, SILHOUETTES.length - 1), 'keyboard');
              if (e.key === 'ArrowLeft') scrollTo(Math.max(activeIndex - 1, 0), 'keyboard');
              if (e.key === 'Home') scrollTo(0, 'keyboard');
              if (e.key === 'End') scrollTo(SILHOUETTES.length - 1, 'keyboard');
            }}
          >
            {SILHOUETTES.map((shape) => (
              <article
                key={shape.key}
                role="listitem"
                className="w-[85vw] shrink-0 snap-start rounded-card border border-border bg-surface p-4 shadow-[var(--shadow-elevation-1)] transition-shadow hover:shadow-[var(--shadow-elevation-2)] sm:w-[calc(50%-0.5rem)] sm:p-6 md:w-[calc(42%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <div className="mb-4 flex h-24 items-center justify-center bg-surface-alt">
                  <img src={shape.lineArt} alt="" width={80} height={80} className="opacity-80" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">{shape.label}</h3>
                <div className="mt-2 flex flex-wrap gap-1">
                  {shape.chips.map((chip) => (
                    <span key={chip} className="rounded-pill bg-surface-alt px-2 py-0.5 text-xs text-muted">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    to={shape.collectionUrl}
                    onClick={() => trackEvent('silhouette_click', { key: shape.key, target: 'shop' })}
                    className="inline-flex items-center justify-center rounded-pill bg-brand px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90"
                  >
                    Shop this shape
                  </Link>
                  <Link
                    to={shape.educationUrl}
                    onClick={() => trackEvent('silhouette_click', { key: shape.key, target: 'education' })}
                    className="text-center text-xs text-brand underline"
                  >
                    How it fits
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous shape"
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-surface p-2 shadow md:block"
            onClick={() => scrollTo(Math.max(activeIndex - 1, 0), 'arrow')}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next shape"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-surface p-2 shadow md:block"
            onClick={() => scrollTo(Math.min(activeIndex + 1, SILHOUETTES.length - 1), 'arrow')}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {SILHOUETTES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Go to ${s.label}`}
              onClick={() => scrollTo(i, 'dot')}
              className={cn(
                'flex size-11 items-center justify-center rounded-full transition-colors',
              )}
            >
              <span
                className={cn(
                  'rounded-full transition-colors',
                  i === activeIndex ? 'size-2.5 bg-brand' : 'size-2 bg-border',
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
