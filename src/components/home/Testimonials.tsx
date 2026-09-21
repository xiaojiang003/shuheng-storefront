import { TESTIMONIALS } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section className="py-16" aria-labelledby="testimonials-heading">
      <div className="container-content">
        <h2 id="testimonials-heading" className="text-2xl font-bold text-brand">
          What buyers say
        </h2>
        <p className="mt-1 text-sm text-muted">Feedback from B2B partners — replace with verified quotes before launch.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.id} className="rounded-card border border-border bg-surface p-6">
              <p className="text-sm text-muted">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm">
                <cite className="font-semibold not-italic">{t.name}</cite>
                <span className="text-muted"> · {t.country}</span>
                <time className="mt-1 block text-xs text-muted" dateTime={t.date}>{t.date}</time>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
