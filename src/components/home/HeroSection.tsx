import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';

export function HeroSection() {
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <section className="relative flex min-h-[60vh] items-center bg-ink sm:min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/images/hero-lifestyle.webp)' }}
        role="img"
        aria-label="Custom headwear lifestyle photography"
      />
      <div className="container-content relative z-10 py-16 sm:py-24">
        <h1 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Custom Headwear Specialist: Your Vision, Our Craft.
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Factory-direct custom caps for brands, teams and retailers. From sampling to bulk — one partner, one standard.
        </p>
        <Button
          className="mt-8"
          onClick={() => {
            trackEvent('enquiry_click', { location: 'hero' });
            openQuote(undefined, 'hero');
          }}
        >
          Start Customizing
        </Button>
      </div>
    </section>
  );
}
