import { CERTIFICATIONS } from '@/data/certifications';
import { BadgeCheck } from 'lucide-react';

export function CertificationBadges() {
  return (
    <section className="py-12" aria-labelledby="certs-heading">
      <div className="container-content">
        <h2 id="certs-heading" className="sr-only">Quality and compliance</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((c) => (
            <div key={c.id} className="flex max-w-xs items-start gap-3 rounded-card border border-border px-4 py-3">
              <BadgeCheck className="size-6 shrink-0 text-brand" aria-hidden />
              <div>
                <p className="text-sm font-bold">{c.label}</p>
                <p className="text-xs text-muted">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
