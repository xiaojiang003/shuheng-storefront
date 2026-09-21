import { MERCHANT } from '@/config/merchant';

const STATS = [
  { value: String(MERCHANT.registrationYear), label: 'Established' },
  { value: '50+', label: 'MOQ (pieces)' },
  { value: String(Object.keys(MERCHANT.mainMarkets).length), label: 'Export markets' },
  { value: String(MERCHANT.languages.length), label: 'Languages supported' },
];

export function FactoryStats() {
  return (
    <section className="border-y border-border bg-ink py-8 text-white" aria-label="Factory statistics">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-accent sm:text-4xl">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
