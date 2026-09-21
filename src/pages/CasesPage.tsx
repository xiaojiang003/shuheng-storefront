import { CASE_STUDIES } from '@/data/cases';
import { Link } from 'react-router-dom';

export function CasesPage() {
  return (
    <div className="container-content py-10">
      <title>Case Studies — Shuheng</title>
      <h1 className="text-3xl font-bold text-brand">Case Studies</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Recent custom and wholesale hat programs — quantity, market and decoration method.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((c) => (
          <article key={c.slug} className="overflow-hidden rounded-card border border-border">
            <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
              <img
                src={c.image}
                alt=""
                width={480}
                height={300}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">{c.country} · {c.quantity}</p>
            <h2 className="mt-2 text-lg font-bold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.summary}</p>
            <ul className="mt-3 space-y-1 text-xs text-muted">
              {c.highlights.map((h) => (
                <li key={h}>· {h}</li>
              ))}
            </ul>
            <time className="mt-4 block text-xs text-muted" dateTime={c.date}>{c.date}</time>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center">
        <Link to="/contact" className="text-brand underline">Start your program →</Link>
      </p>
    </div>
  );
}
