import { MobileNav } from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { trackEvent } from '@/lib/analytics';
import { useQuoteStore } from '@/stores/useQuoteStore';
import { Menu, MessageSquare, Search } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'Collection' },
  { to: '/collection?silhouette=six-panel-snapback', label: 'Silhouette' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent }: HeaderProps) {
  const location = useLocation();
  const openQuote = useQuoteStore((s) => s.open);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === '/';
  const variant = transparent ?? isHome;

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-colors',
          'pt-[env(safe-area-inset-top)]',
          variant ? 'bg-ink/80 backdrop-blur-sm' : 'bg-ink',
        )}
      >
        <div className="container-content flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex size-11 items-center justify-center text-white md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-6" />
            </button>
            <Link
              to="/"
              className="text-base font-bold uppercase tracking-widest text-white sm:text-lg"
            >
              Shuheng
            </Link>
          </div>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white',
                    isActive && 'text-white',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              className="flex size-11 items-center justify-center text-white/80 hover:text-white"
            >
              <Search className="size-5" />
            </button>
            <Button
              tone="accent"
              size="sm"
              className="min-h-11 px-3 sm:px-4"
              onClick={() => {
                trackEvent('enquiry_click', { location: 'header' });
                openQuote(undefined, 'header');
              }}
            >
              <MessageSquare className="size-4 sm:mr-1.5" aria-hidden />
              <span className="hidden sm:inline">Quick Quote</span>
              <span className="sr-only sm:hidden">Quick Quote</span>
            </Button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
