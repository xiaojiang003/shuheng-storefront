import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { USE_CASES } from '@/data/useCases';
import { CATEGORIES } from '@/data/categories';
import { SILHOUETTES } from '@/data/silhouettes';
import { MERCHANT } from '@/config/merchant';
import { useLocale } from '@/i18n/LocaleProvider';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useLocale();
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <footer className="bg-ink text-white safe-bottom">
      <div className="container-content py-8 sm:py-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-bold">{t('footer.ctaTitle')}</h2>
            <p className="mt-1 text-sm text-white/70">
              {t('footer.ctaSub').replace('{time}', MERCHANT.responseTime)}
            </p>
          </div>
          <Button
            onClick={() => {
              trackEvent('enquiry_click', { location: 'footer' });
              openQuote(undefined, 'footer');
            }}
          >
            {t('footer.ctaButton')}
          </Button>
        </div>
        <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{t('footer.shop')}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {CATEGORIES.map((c) => (
                <li key={c.key}>
                  <Link to={c.route} className="hover:text-white">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{t('footer.useCases')}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {USE_CASES.map((u) => (
                <li key={u.slug}>
                  <Link to={`/use-case/${u.slug}`} className="hover:text-white">
                    {u.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">{t('nav.about')}</Link></li>
              <li><Link to="/cases" className="hover:text-white">{t('footer.caseStudies')}</Link></li>
              <li><Link to="/blog" className="hover:text-white">{t('nav.blog')}</Link></li>
              <li><Link to="/faq" className="hover:text-white">{t('nav.faq')}</Link></li>
              <li><Link to="/sizing-guide" className="hover:text-white">{t('nav.sizingGuide')}</Link></li>
              <li><Link to="/fit-finder" className="hover:text-white">{t('nav.fitFinder')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{t('footer.silhouettes')}</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {SILHOUETTES.slice(0, 4).map((s) => (
                <li key={s.key}>
                  <Link to={`/silhouette/${s.key}`} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">{t('footer.contact')}</h3>
            <p className="text-sm text-white/70">{MERCHANT.address.locality}, {MERCHANT.address.region}</p>
            <p className="mt-2 text-sm text-white/70">sales@shuheng-headwear.com</p>
            <a href={MERCHANT.eCatalogUrl} download className="mt-3 inline-block text-sm text-accent underline">
              {t('footer.eCatalog')}
            </a>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {MERCHANT.brandName}. {t('footer.rights')}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
