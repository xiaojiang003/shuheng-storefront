import { MERCHANT } from '@/config/merchant';

export function PrivacyPage() {
  return (
    <div className="container-content py-10 prose prose-sm max-w-3xl">
      <title>Privacy Policy — Shuheng</title>
      <h1 className="text-3xl font-bold text-brand">Privacy Policy</h1>
      <p className="mt-4 text-muted">Last updated: September 2026</p>
      <section className="mt-8 space-y-4 text-sm text-muted">
        <p>
          {MERCHANT.legalName} (&ldquo;Shuheng&rdquo;, &ldquo;we&rdquo;) respects your privacy. This policy describes how we handle information when you use our website or submit an enquiry.
        </p>
        <h2 className="text-lg font-bold text-ink">Information we collect</h2>
        <p>
          When you use Quick Quote, our contact form, or messaging channels, we may receive your name, email, phone number, company details and project requirements that you choose to provide.
        </p>
        <h2 className="text-lg font-bold text-ink">How we use information</h2>
        <p>
          We use enquiry data solely to respond to your request, prepare quotations and manage orders. We do not sell personal data to third parties.
        </p>
        <h2 className="text-lg font-bold text-ink">Analytics</h2>
        <p>
          We may use anonymised analytics to improve site performance. No free-text enquiry content is sent to analytics providers.
        </p>
        <h2 className="text-lg font-bold text-ink">Contact</h2>
        <p>
          Questions: sales@shuheng-headwear.com · {MERCHANT.address.locality}, {MERCHANT.address.region}, {MERCHANT.address.country}
        </p>
      </section>
    </div>
  );
}
