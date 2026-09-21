import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { useLocale } from '@/i18n/LocaleProvider';
import { MOBILE_NAV } from '@/i18n/navItems';
import { cn } from '@/lib/cn';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { MessageSquare, X } from 'lucide-react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { t } = useLocale();
  const openQuote = useQuoteStore((s) => s.open);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        className={cn(
          'fixed inset-0 z-50 bg-ink/60 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-label="Close menu"
      />
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[min(100%,320px)] flex-col bg-ink text-white transition-transform duration-250 ease-out md:hidden',
          'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-sm font-bold uppercase tracking-widest">{t('mobile.menu')}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-full hover:bg-white/10"
          >
            <X className="size-6" />
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto px-4">
          {MOBILE_NAV.map(({ to, key }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'flex min-h-12 items-center border-b border-white/10 px-2 text-sm font-semibold uppercase tracking-widest',
                    isActive ? 'text-accent' : 'text-white/90',
                  )
                }
              >
                {t(key)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="space-y-4 border-t border-white/10 p-4">
          <LanguageSwitcher layout="expanded" />
          <button
            type="button"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-pill bg-accent px-6 text-sm font-bold uppercase tracking-wider text-white"
            onClick={() => {
              trackEvent('enquiry_click', { location: 'mobile-nav' });
              openQuote(undefined, 'header');
              onClose();
            }}
          >
            <MessageSquare className="size-5" aria-hidden />
            {t('cta.quote')}
          </button>
        </div>
      </nav>
    </>
  );
}
