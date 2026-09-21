import { Button } from '@/components/ui/Button';
import { USE_CASES } from '@/data/useCases';
import { getSilhouette } from '@/data/silhouettes';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { Link, Navigate, useParams } from 'react-router-dom';

export function UseCasePage() {
  const { slug } = useParams();
  const useCase = USE_CASES.find((u) => u.slug === slug);
  const openQuote = useQuoteStore((s) => s.open);

  if (!useCase) return <Navigate to="/404" replace />;

  return (
    <div className="container-content py-10">
      <title>{useCase.title} — Shuheng</title>
      <nav className="mb-6 text-sm text-muted">
        <Link to="/">Home</Link> / <span>{useCase.title}</span>
      </nav>
      <h1 className="text-3xl font-bold text-brand">{useCase.headline}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{useCase.description}</p>
      <section className="mt-10">
        <h2 className="text-lg font-bold">Recommended silhouettes</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {useCase.recommendedSilhouettes.map((key) => {
            const s = getSilhouette(key);
            return s ? (
              <Link
                key={key}
                to={`/silhouette/${key}`}
                className="rounded-pill border border-border px-4 py-2 text-sm hover:border-brand"
              >
                {s.label}
              </Link>
            ) : null;
          })}
        </div>
      </section>
      <Button
        className="mt-10"
        onClick={() =>
          openQuote({ capStyle: useCase.recommendedSilhouettes[0] }, 'contact')
        }
      >
        {useCase.cta}
      </Button>
    </div>
  );
}
