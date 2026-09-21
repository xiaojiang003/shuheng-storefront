import { Button } from '@/components/ui/Button';
import { MERCHANT } from '@/config/merchant';
import { useLocale } from '@/i18n/LocaleProvider';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';

const BADGE_KEYS = [
  { labelKey: 'hero.badge.moq', subKey: 'hero.badge.moqSub' },
  { labelKey: 'hero.badge.factory', subKey: 'hero.badge.factorySub' },
  { labelKey: 'hero.badge.response', subKey: null },
] as const;

export function HeroSection() {
  const { t } = useLocale();
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <section className="relative flex min-h-[60vh] items-center bg-ink sm:min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/images/hero-lifestyle.jpg)' }}
        role="img"
        aria-label="Custom headwear lifestyle photography"
      />
      <div className="container-content relative z-10 py-16 sm:py-24">
        <div className="mb-6 flex flex-wrap gap-2">
          {BADGE_KEYS.map((b) => (
            <span
              key={b.labelKey}
              className="rounded-pill border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
            >
              {t(b.labelKey)}
              <span className="ml-1 font-normal text-white/70">
                · {b.subKey ? t(b.subKey) : MERCHANT.responseTime}
              </span>
            </span>
          ))}
        </div>
        <h1 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {t('hero.title')}
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">{t('hero.subtitle')}</p>
        <Button
          className="mt-8 min-h-12"
          onClick={() => {
            trackEvent('enquiry_click', { location: 'hero' });
            openQuote(undefined, 'hero');
          }}
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
}
