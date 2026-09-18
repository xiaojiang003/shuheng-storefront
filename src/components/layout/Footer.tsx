import { Button } from '@/components/ui/Button';
import { CATEGORIES } from '@/data/categories';
import { SILHOUETTES } from '@/data/silhouettes';
import { MERCHANT } from '@/config/merchant';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { Link } from 'react-router-dom';

export function Footer() {
  const openQuote = useQuoteStore((s) => s.open);

  return (
    <footer className="bg-ink text-white safe-bottom">
      <div className="container-content py-8 sm:py-10">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-bold">Ready to start your cap program?</h2>
            <p className="mt-1 text-sm text-white/70">Response {MERCHANT.responseTime}.</p>
          </div>
          <Button
            onClick={() => {
              trackEvent('enquiry_click', { location: 'footer' });
              openQuote(undefined, 'footer');
            }}
          >
            Get a Quick Quote
          </Button>
        </div>
        <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">Shop</h3>
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
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">Silhouettes</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {SILHOUETTES.slice(0, 4).map((s) => (
                <li key={s.key}>
                  <Link to={s.collectionUrl} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/sizing-guide" className="hover:text-white">Sizing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest">Contact</h3>
            <p className="text-sm text-white/70">{MERCHANT.address.locality}, {MERCHANT.address.region}</p>
            <p className="mt-2 text-sm text-white/70">sales@shuheng-headwear.com</p>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {MERCHANT.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
