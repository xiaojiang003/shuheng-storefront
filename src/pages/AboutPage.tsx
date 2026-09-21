import { MERCHANT } from '@/config/merchant';
import { MaterialStrip } from '@/components/home/MaterialStrip';

export function AboutPage() {
  return (
    <div className="container-content py-10">
      <title>About — Shuheng Global Commerce</title>
      <h1 className="text-3xl font-bold text-brand">About Shuheng</h1>
      <p className="mt-4 max-w-2xl text-muted">
        {MERCHANT.legalName} — registered {MERCHANT.registrationYear} in {MERCHANT.address.locality},{' '}
        {MERCHANT.address.region}. We manufacture custom headwear for B2B buyers worldwide.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="aspect-[16/10] overflow-hidden rounded-card bg-surface-alt">
          <img
            src="/images/factory-workshop.jpg"
            alt="Headwear production workshop"
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-card bg-surface-alt">
          <img
            src="/images/production-line.jpg"
            alt="Cap manufacturing and quality control"
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-bold">Capabilities</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded-card border border-border p-4">
            <strong>QC team:</strong> {MERCHANT.qualityInspectors}
          </li>
          <li className="rounded-card border border-border p-4">
            <strong>R&D:</strong> {MERCHANT.rAndDStaff}
          </li>
          <li className="rounded-card border border-border p-4">
            <strong>Trade team:</strong> {MERCHANT.foreignTradeStaff}
          </li>
          <li className="rounded-card border border-border p-4">
            <strong>Languages:</strong> {MERCHANT.languages.length}
          </li>
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">Main markets</h2>
        <div className="mt-4 space-y-2">
          {Object.entries(MERCHANT.mainMarkets).map(([market, pct]) => (
            <div key={market} className="flex items-center gap-3">
              <span className="w-32 text-sm">{market}</span>
              <div className="h-2 flex-1 rounded-pill bg-surface-alt">
                <div className="h-full rounded-pill bg-brand" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-sm text-muted">{pct}%</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">Lead times</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li><strong>Sampling:</strong> {MERCHANT.leadTimes.sample}</li>
          <li><strong>Bulk (500 pcs):</strong> {MERCHANT.leadTimes.bulk500}</li>
          <li><strong>Bulk (1,000 pcs):</strong> {MERCHANT.leadTimes.bulk1000}</li>
          <li><strong>Bulk (5,000 pcs):</strong> {MERCHANT.leadTimes.bulk5000}</li>
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-bold">Trade terms</h2>
        <p className="mt-2 text-sm text-muted">
          Incoterms: {MERCHANT.deliveryTerms.join(', ')}
        </p>
        <p className="mt-1 text-sm text-muted">
          Payment methods: {MERCHANT.paymentMethods.join(', ')}
        </p>
        <p className="mt-1 text-sm text-muted">
          Typical structure: {MERCHANT.paymentTerms.structure}
        </p>
      </section>
      <MaterialStrip />
    </div>
  );
}
