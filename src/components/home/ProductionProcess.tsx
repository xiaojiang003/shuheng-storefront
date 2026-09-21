import { PRODUCTION_STEPS } from '@/data/productionSteps';

export function ProductionProcess() {
  return (
    <section className="bg-surface-alt py-16" aria-labelledby="process-heading">
      <div className="container-content">
        <h2 id="process-heading" className="text-2xl font-bold text-brand">
          From concept to delivery
        </h2>
        <p className="mt-1 text-sm text-muted">Five steps — same workflow our trade team confirms in writing.</p>
        <div className="mt-6 aspect-[21/9] overflow-hidden rounded-card bg-surface-alt">
          <img
            src="/images/production-line.jpg"
            alt="Custom hat production workflow"
            width={1200}
            height={514}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PRODUCTION_STEPS.map(({ step, title, description }) => (
            <li key={step} className="rounded-card border border-border bg-surface p-4">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {step}
              </span>
              <h3 className="mt-3 text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
