import { CAPACITY_FALLBACK, MERCHANT } from '@/config/merchant';
import { BadgeCheck, MessageSquareText, Shapes, TrendingDown } from 'lucide-react';

const CARDS = [
  {
    icon: Shapes,
    headline: 'Flexible Customization',
    metric: `Pattern + artwork in house, R&D ${MERCHANT.rAndDStaff.toLowerCase()}`,
    copy: 'Flat embroidery, 3D puff, patch, sublimation and print from your artwork or ours. Low minimums on stock shapes.',
  },
  {
    icon: BadgeCheck,
    headline: 'Stable Quality Control',
    metric: `${MERCHANT.qualityInspectors}, multi-stage`,
    copy: 'Incoming fabric inspection, in-line checks at panel joining, and final AQL inspection before packing.',
  },
  {
    icon: MessageSquareText,
    headline: 'Efficient Response & Delivery',
    metric: `${MERCHANT.foreignTradeStaff} trade staff, ${MERCHANT.languages.length} languages`,
    copy: `An English-speaking trade team answers ${MERCHANT.responseTime}. Sampling and bulk schedules confirmed in writing.`,
  },
  {
    icon: TrendingDown,
    headline: 'High Cost Performance',
    metric: `${MERCHANT.coreAdvantages} core advantages, ${MERCHANT.paymentMethods.length} payment methods, ${MERCHANT.deliveryTerms.length} Incoterms`,
    copy: 'Direct factory pricing, transparent tier breaks and flexible payment terms for repeat buyers.',
  },
];

export function CapabilityIcons() {
  const capacityNote = MERCHANT.dailyCapacity ?? CAPACITY_FALLBACK;

  return (
    <section className="bg-surface-alt py-16" aria-labelledby="capability-heading">
      <div className="container-content">
        <h2 id="capability-heading" className="mb-2 text-2xl font-bold text-brand">
          Why Shuheng
        </h2>
        <p className="mb-8 text-sm text-muted">{capacityNote}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, headline, metric, copy }) => (
            <article key={headline} className="rounded-card border border-border bg-surface p-6">
              <Icon className="mb-3 size-8 text-brand" aria-hidden />
              <h3 className="font-bold">{headline}</h3>
              <p className="mt-1 text-xs font-semibold text-brand">{metric}</p>
              <p className="mt-2 text-sm text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
