import { useLocale } from '@/i18n/LocaleProvider';
import { cn } from '@/lib/cn';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  /** compact = icon + code dropdown; expanded = labeled pill grid for mobile drawer */
  layout?: 'compact' | 'expanded';
}

export function LanguageSwitcher({ className, layout = 'compact' }: LanguageSwitcherProps) {
  const { locale, setLocale, locales, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (layout === 'expanded') {
    return (
      <div className={cn('space-y-2', className)}>
        <p className="px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          {t('lang.label')}
        </p>
        <div className="grid grid-cols-2 gap-2" role="listbox" aria-label={t('lang.label')}>
          {locales.map((l) => {
            const active = l.code === locale;
            return (
              <button
                key={l.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => setLocale(l.code)}
                className={cn(
                  'flex min-h-11 items-center justify-between rounded-card border px-3 py-2 text-left text-sm transition-colors',
                  active
                    ? 'border-accent/60 bg-accent/15 text-white'
                    : 'border-white/10 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10',
                )}
              >
                <span className="font-semibold">{l.code.toUpperCase()}</span>
                <span className="text-xs text-white/60">{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex h-9 min-w-[5.5rem] items-center gap-1.5 rounded-pill border px-2.5',
          'border-white/20 bg-white/5 text-white/90 backdrop-blur-sm',
          'transition-colors hover:border-white/35 hover:bg-white/10',
          open && 'border-white/35 bg-white/10',
        )}
      >
        <Globe className="size-3.5 shrink-0 text-white/70" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wide">{current.code}</span>
        <ChevronDown
          className={cn('size-3.5 shrink-0 text-white/60 transition-transform', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t('lang.label')}
          className={cn(
            'absolute right-0 z-50 mt-2 min-w-[10.5rem] overflow-hidden rounded-card border border-white/15',
            'bg-ink/95 py-1 shadow-[var(--shadow-elevation-2)] backdrop-blur-md',
          )}
        >
          {locales.map((l) => {
            const active = l.code === locale;
            return (
              <li key={l.code} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors',
                    active ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/5 hover:text-white',
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 text-xs font-bold uppercase tracking-wide">{l.code}</span>
                    <span className="text-white/70">{l.label}</span>
                  </span>
                  {active && <Check className="size-4 shrink-0 text-accent" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
