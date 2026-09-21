import { Button } from '@/components/ui/Button';
import { CHANNELS } from '@/config/channels';
import { SILHOUETTES } from '@/data/silhouettes';
import { buildChannelUrl, buildQuoteMessage } from '@/lib/buildQuoteMessage';
import { trackEvent } from '@/lib/analytics';
import type { QuoteChannel } from '@/types/quote';
import { useState } from 'react';

const QUANTITY_BANDS = [
  'Lower than 50 pcs',
  '50–100 pcs',
  '100–500 pcs',
  '500–1,000 pcs',
  'More than 5,000 pcs',
];

const PRODUCT_TYPES = [
  'Custom trucker hats',
  'Custom baseball caps',
  'Custom bucket hats',
  'Custom dad hats',
  'Wholesale ready-to-ship',
  'Other',
];

const COUNTRY_CODES = [
  { code: '+86', label: 'China (+86)' },
  { code: '+1', label: 'US/Canada (+1)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+49', label: 'Germany (+49)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+81', label: 'Japan (+81)' },
];

export function ContactInquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+86');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState(PRODUCT_TYPES[0]);
  const [quantity, setQuantity] = useState(QUANTITY_BANDS[1]);
  const [message, setMessage] = useState('');
  const [channel, setChannel] = useState<QuoteChannel>(CHANNELS.primary);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = buildQuoteMessage({
      capStyle: 'unsure',
      quantity: 100,
      logoPlacements: ['front-centred'],
      material: 'recommend',
      channel,
      reference: name ? `${name} / ${email}` : undefined,
    });
    const fullMessage = `${brief}\n\n--- Contact form ---\nName: ${name}\nEmail: ${email}\nPhone: ${countryCode} ${phone}\nProduct: ${productType}\nQuantity band: ${quantity}\nMessage: ${message}`;
    try {
      navigator.clipboard.writeText(fullMessage);
    } catch {
      /* optional */
    }
    trackEvent('contact_form_submit', { channel, productType, quantityBand: quantity });
    window.open(buildChannelUrl(channel, fullMessage), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-card border border-border bg-surface-alt p-6">
        <h2 className="font-bold text-brand">Enquiry sent</h2>
        <p className="mt-2 text-sm text-muted">
          Your message was copied to the clipboard and opened in {channel}. Attach artwork in the conversation if needed.
        </p>
        <Button className="mt-4" tone="outline" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-card border border-border p-6">
      <h2 className="font-bold">Send an enquiry</h2>
      <p className="text-sm text-muted">Response {CHANNELS.responseTime}. Fields marked * are required.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold">Name *</label>
          <input id="contact-name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold">Email *</label>
          <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-code" className="mb-1 block text-sm font-semibold">Country code</label>
          <select id="contact-code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm">
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold">Phone / WhatsApp *</label>
          <input id="contact-phone" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-product" className="mb-1 block text-sm font-semibold">Product type *</label>
          <select id="contact-product" required value={productType} onChange={(e) => setProductType(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm">
            {PRODUCT_TYPES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-qty" className="mb-1 block text-sm font-semibold">Expected quantity *</label>
          <select id="contact-qty" required value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm">
            {QUANTITY_BANDS.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="contact-msg" className="mb-1 block text-sm font-semibold">Your message *</label>
        <textarea id="contact-msg" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-input border border-border px-3 py-2 text-sm" placeholder="Cap style, logo method, target date..." />
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Preferred channel</legend>
        <div className="flex flex-wrap gap-2">
          {(['whatsapp', 'email', 'alitalk'] as QuoteChannel[]).map((c) => (
            <label key={c} className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill border border-border px-3 py-2 text-xs">
              <input type="radio" name="channel" checked={channel === c} onChange={() => setChannel(c)} />
              {c === 'whatsapp' ? 'WhatsApp' : c === 'email' ? 'Email' : 'Messaging'}
            </label>
          ))}
        </div>
      </fieldset>
      <p className="text-xs text-muted">
        Prefer structured brief? Use Quick Quote for cap style ({SILHOUETTES.length} silhouettes), logo placement and material.
      </p>
      <Button type="submit" className="min-h-12 w-full">Send enquiry</Button>
    </form>
  );
}
