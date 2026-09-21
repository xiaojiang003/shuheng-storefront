import { Button } from '@/components/ui/Button';
import { SILHOUETTES, getSilhouette } from '@/data/silhouettes';
import type { SilhouetteKey } from '@/types/silhouette';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { Link, Navigate, useParams } from 'react-router-dom';

export function SilhouettePage() {
  const { key } = useParams();
  const silhouette = key ? getSilhouette(key as SilhouetteKey) : undefined;
  const openQuote = useQuoteStore((s) => s.open);

  if (!silhouette) return <Navigate to="/404" replace />;

  return (
    <div className="container-content py-10">
      <title>{silhouette.label} — Silhouette Guide</title>
      <nav className="mb-6 text-sm text-muted">
        <Link to="/">Home</Link> / <Link to="/collection">Collection</Link> / <span>{silhouette.label}</span>
      </nav>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex items-center justify-center rounded-card bg-surface-alt p-12">
          <img src={silhouette.lineArt} alt="" width={160} height={160} className="opacity-80" />
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide">{silhouette.label}</h1>
          <p className="mt-4 text-muted">Best for: {silhouette.bestFor}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div><dt className="font-semibold">Crown</dt><dd className="text-muted">{silhouette.crown}</dd></div>
            <div><dt className="font-semibold">Closure</dt><dd className="text-muted">{silhouette.closure}</dd></div>
            <div><dt className="font-semibold">Visor</dt><dd className="text-muted">{silhouette.visor}</dd></div>
            <div><dt className="font-semibold">Profile</dt><dd className="text-muted">{silhouette.profile}</dd></div>
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            {silhouette.chips.map((c) => (
              <span key={c} className="rounded-pill bg-surface-alt px-2 py-1 text-xs">{c}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => openQuote({ capStyle: silhouette.key }, 'silhouette')}>
              Get a Quick Quote
            </Button>
            <Link to={silhouette.collectionUrl} className="inline-flex min-h-12 items-center text-brand underline">
              Shop this shape
            </Link>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-lg font-bold">All silhouettes</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {SILHOUETTES.filter((s) => s.key !== silhouette.key).map((s) => (
            <li key={s.key}>
              <Link to={`/silhouette/${s.key}`} className="text-sm text-brand hover:underline">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
