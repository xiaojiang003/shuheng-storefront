import { useNewArrivals } from '@/hooks/useNewArrivals';
import { trackEvent } from '@/lib/analytics';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function SkeletonCard() {
  return (
    <div className="rounded-card border border-border p-4" aria-hidden>
      <div className="aspect-square rounded-card bg-surface-alt" />
      <div className="mt-3 h-4 w-3/4 rounded bg-surface-alt" />
      <div className="mt-2 h-3 w-1/2 rounded bg-surface-alt" />
    </div>
  );
}

export function NewArrivalsRail() {
  const { data, isLoading, isError } = useNewArrivals();
  const viewedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || viewedRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && data && !viewedRef.current) {
          viewedRef.current = true;
          trackEvent('new_arrivals_view', { itemCount: data.length });
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [data]);

  if (!isLoading && !isError && (!data || data.length === 0)) return null;

  return (
    <section ref={sectionRef} className="py-16" aria-labelledby="new-arrivals-heading">
      <div className="container-content">
        <div className="mb-6 flex items-end justify-between">
          <h2 id="new-arrivals-heading" className="text-2xl font-bold text-brand">
            New Arrivals
          </h2>
          <Link to="/collection?sort=newest" className="text-sm text-brand underline">
            View all new arrivals
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
          {!isLoading &&
            data?.map((item, i) => (
              <Link
                key={item.id}
                to={item.url.startsWith('http') ? item.url : item.url}
                target={item.url.startsWith('http') ? '_top' : undefined}
                onClick={() =>
                  trackEvent('new_arrivals_click', {
                    productId: item.id,
                    position: i + 1,
                    title: item.title,
                  })
                }
                className="group block rounded-card border border-border bg-surface overflow-hidden hover:shadow-[var(--shadow-elevation-2)]"
              >
                <div className="aspect-square overflow-hidden bg-surface-alt">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={350}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-2 min-h-10 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand">{item.price}</p>
                  <p className="text-xs text-muted">MOQ: {item.moq}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
