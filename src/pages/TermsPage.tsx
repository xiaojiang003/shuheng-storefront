import { MERCHANT } from '@/config/merchant';

export function TermsPage() {
  return (
    <div className="container-content py-10 max-w-3xl">
      <title>Terms & Conditions — Shuheng</title>
      <h1 className="text-3xl font-bold text-brand">Terms & Conditions</h1>
      <p className="mt-4 text-muted">Last updated: September 2026</p>
      <section className="mt-8 space-y-4 text-sm text-muted">
        <p>
          These terms apply to use of the {MERCHANT.brandName} website and B2B enquiries. Placing an order is subject to separate written confirmation.
        </p>
        <h2 className="text-lg font-bold text-ink">Enquiries and quotes</h2>
        <p>
          Information on this site is for general reference. MOQ, pricing, lead times and specifications are confirmed in writing per order.
        </p>
        <h2 className="text-lg font-bold text-ink">Intellectual property</h2>
        <p>
          Product images, logos and designs remain the property of their respective owners. Custom artwork you supply must not infringe third-party rights.
        </p>
        <h2 className="text-lg font-bold text-ink">Limitation</h2>
        <p>
          We strive for accurate product representation. Minor variations in colour or dimensions may occur within manufacturing tolerance (±0.5 cm on sizing data).
        </p>
        <h2 className="text-lg font-bold text-ink">Governing law</h2>
        <p>
          Disputes are handled per the contract agreed with {MERCHANT.legalName}.
        </p>
      </section>
    </div>
  );
}
