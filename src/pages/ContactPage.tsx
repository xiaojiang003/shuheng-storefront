import { ContactInquiryForm } from '@/components/inquiry/ContactInquiryForm';
import { Button } from '@/components/ui/Button';
import { CHANNELS } from '@/config/channels';
import { MERCHANT } from '@/config/merchant';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';

export function ContactPage() {
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <div className="container-content py-10">
      <title>Contact — Shuheng</title>
      <h1 className="text-3xl font-bold text-brand">Contact</h1>
      <p className="mt-4 text-muted">
        B2B enquiry hub. Response {CHANNELS.responseTime}.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <ContactInquiryForm />
        <div className="space-y-6">
          <div className="rounded-card border border-border p-6">
            <h2 className="font-bold">Quick Quote</h2>
            <p className="mt-2 text-sm text-muted">
              Structured brief — cap style, quantity, logo placement and material in under two minutes.
            </p>
            <Button
              className="mt-4"
              onClick={() => {
                trackEvent('enquiry_click', { location: 'contact' });
                openQuote(undefined, 'contact');
              }}
            >
              Open Quick Quote
            </Button>
          </div>
          <div className="rounded-card border border-border p-6">
            <h2 className="font-bold">Direct channels</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`https://wa.me/${CHANNELS.whatsapp.number}`} className="text-brand underline">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CHANNELS.email.address}`} className="text-brand underline">
                  {CHANNELS.email.address}
                </a>
              </li>
              <li>
                <a href={CHANNELS.alitalk.url} className="text-brand underline" target="_blank" rel="noopener noreferrer">
                  Instant messaging
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              {MERCHANT.address.street}<br />
              {MERCHANT.address.locality}, {MERCHANT.address.region}, {MERCHANT.address.country}
            </p>
          </div>
          <div className="rounded-card border border-border p-6">
            <h2 className="font-bold">E-Catalog</h2>
            <p className="mt-2 text-sm text-muted">Download our product overview for offline review.</p>
            <a
              href={MERCHANT.eCatalogUrl}
              download
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-brand underline"
            >
              Download catalog (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
