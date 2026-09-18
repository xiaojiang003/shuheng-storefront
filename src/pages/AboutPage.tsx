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
        <h2 className="text-xl font-bold">Trade terms</h2>
        <p className="mt-2 text-sm text-muted">
          Incoterms: {MERCHANT.deliveryTerms.join(', ')}
        </p>
        <p className="mt-1 text-sm text-muted">
          Payment: {MERCHANT.paymentMethods.join(', ')}
        </p>
      </section>
      <MaterialStrip />
    </div>
  );
}
