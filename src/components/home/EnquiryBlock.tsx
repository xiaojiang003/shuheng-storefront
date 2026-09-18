import { Button } from '@/components/ui/Button';
import { CHANNELS } from '@/config/channels';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';

export function EnquiryBlock() {
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <section className="bg-brand py-16 text-white" aria-labelledby="enquiry-heading">
      <div className="container-content text-center">
        <h2 id="enquiry-heading" className="text-2xl font-bold">
          Start your custom cap program
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-white/80">
          Build a structured brief in under two minutes. Our trade team responds {CHANNELS.responseTime}.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 px-2 sm:flex-row sm:gap-4 sm:px-0">
          <Button
            className="min-h-12 w-full sm:w-auto"
            onClick={() => {
              trackEvent('enquiry_click', { location: 'enquiry-block' });
              openQuote(undefined, 'contact');
            }}
          >
            Get a Quick Quote
          </Button>
          <a
            href={`https://wa.me/${CHANNELS.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-pill border border-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-white/10 sm:w-auto"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
