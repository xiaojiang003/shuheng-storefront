import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';
import { MaterialIcon } from '@/components/icons/materials/MaterialIcon';
import { LOGO_PLACEMENTS } from '@/data/logoPlacements';
import { MATERIALS } from '@/data/materials';
import { SILHOUETTES } from '@/data/silhouettes';
import { buildChannelUrl, buildQuoteMessage } from '@/lib/buildQuoteMessage';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/cn';
import { useQuoteStore } from '@/stores/useQuoteStore';
import type { MaterialKey } from '@/types/material';
import type { DecorationMethod, LogoPlacement, QuoteChannel } from '@/types/quote';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const QUANTITY_PRESETS = [50, 100, 300, 500, 1000, 5000];

const DECORATIONS: { key: DecorationMethod; label: string; blockedMaterials?: MaterialKey[] }[] = [
  { key: 'flat-embroidery', label: 'Flat embroidery' },
  { key: '3d-puff', label: '3D puff embroidery' },
  { key: 'woven-patch', label: 'Woven patch' },
  { key: 'leather-patch', label: 'Leather or rubber patch' },
  { key: 'sublimation', label: 'Sublimation', blockedMaterials: ['fleece'] },
  { key: 'screen-print', label: 'Screen print' },
  { key: 'heat-transfer', label: 'Heat transfer' },
];

function minTargetDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toISOString().slice(0, 10);
}

export function QuickQuoteModal() {
  const { isOpen, brief, source, close, update } = useQuoteStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [composed, setComposed] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      trackEvent('quick_quote_open', {
        source,
        presetStyle: brief.capStyle,
        presetMaterial: brief.material,
      });
      setConfirmed(false);
      setErrors({});
    } else if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus();
    }
  }, [isOpen, source, brief.capStyle, brief.material]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const availableDecorations = DECORATIONS.filter(
    (d) => !d.blockedMaterials?.includes(brief.material as MaterialKey),
  );

  const togglePlacement = (key: LogoPlacement) => {
    const current = brief.logoPlacements;
    if (current.includes(key)) {
      update({ logoPlacements: current.filter((p) => p !== key) });
    } else if (current.length < 4) {
      update({ logoPlacements: [...current, key] });
    }
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!brief.quantity || brief.quantity < 1) next.quantity = 'Enter a quantity of at least 1';
    if (brief.logoPlacements.length === 0) next.logoPlacements = 'Select at least one placement';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (channel: QuoteChannel) => {
    if (!validate()) return;
    const message = buildQuoteMessage({ ...brief, channel });
    setComposed(message);
    try {
      await navigator.clipboard.writeText(message);
      trackEvent('quick_quote_copy', { channel });
    } catch {
      /* clipboard optional */
    }
    const url = buildChannelUrl(channel, message);
    trackEvent('quick_quote_submit', {
      channel,
      capStyle: brief.capStyle,
      material: brief.material,
      quantityBand: brief.quantity && brief.quantity >= 5000 ? '5000+' : String(brief.quantity),
      placementCount: brief.logoPlacements.length,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    setConfirmed(true);
  };

  const channelLabel =
    brief.channel === 'whatsapp'
      ? 'Send on WhatsApp'
      : brief.channel === 'email'
        ? 'Send by email'
        : 'Send on messaging';

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center" role="presentation">
      <button
        type="button"
        aria-label="Close dialog backdrop"
        className="absolute inset-0 bg-ink/50"
        onClick={close}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="qq-title"
        className={cn(
          'relative z-10 flex max-h-[92dvh] w-full max-w-[560px] flex-col rounded-t-card bg-surface shadow-[var(--shadow-elevation-2)] md:max-h-[90vh] md:rounded-card',
        )}
      >
        {/* Mobile drag handle */}
        <div className="flex shrink-0 justify-center pt-3 md:hidden" aria-hidden>
          <div className="h-1 w-10 rounded-pill bg-border" />
        </div>
        <div className="flex shrink-0 items-center justify-between px-4 pb-2 pt-2 md:px-6 md:pt-6">
          <h2 id="qq-title" className="text-lg font-bold">
            Quick Quote
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="flex size-11 items-center justify-center rounded-full hover:bg-surface-alt"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 md:px-6">

        {confirmed ? (
          <div>
            <p className="text-sm text-muted">
              Your brief has been copied to the clipboard. Attach artwork files in the conversation.
            </p>
            <textarea
              readOnly
              aria-label="Composed quote brief"
              value={composed}
              className="mt-4 h-48 w-full rounded-input border border-border p-3 text-sm"
            />
            <Button className="mt-4 w-full" onClick={() => navigator.clipboard.writeText(composed)}>
              Copy again
            </Button>
          </div>
        ) : (
          <form
            id="quick-quote-form"
            className="space-y-6 pb-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(brief.channel);
            }}
          >
            {/* Cap Style */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Cap Style *</legend>
              <div className="flex flex-wrap gap-2">
                {SILHOUETTES.map((s) => (
                  <Chip
                    key={s.key}
                    selected={brief.capStyle === s.key}
                    onClick={() => {
                      update({ capStyle: s.key });
                      trackEvent('quick_quote_field', { field: 'capStyle', value: s.key });
                    }}
                  >
                    {s.label}
                  </Chip>
                ))}
                <Chip
                  selected={brief.capStyle === 'unsure'}
                  onClick={() => update({ capStyle: 'unsure' })}
                >
                  Not sure yet – help me choose
                </Chip>
              </div>
              {brief.capStyle === 'unsure' && (
                <p className="mt-2 text-xs text-muted">
                  Our trade team will shortlist three shapes for your program.
                </p>
              )}
            </fieldset>

            {/* Quantity */}
            <div>
              <label htmlFor="qq-qty" className="mb-2 block text-sm font-semibold">
                Quantity *
              </label>
              <div className="mb-2 flex flex-wrap gap-2">
                {QUANTITY_PRESETS.map((q) => (
                  <Chip
                    key={q}
                    selected={brief.quantity === q}
                    onClick={() => update({ quantity: q })}
                  >
                    {q === 5000 ? '5,000+' : q.toLocaleString()}
                  </Chip>
                ))}
              </div>
              <input
                id="qq-qty"
                type="number"
                min={1}
                max={1000000}
                value={brief.quantity ?? ''}
                onChange={(e) => update({ quantity: parseInt(e.target.value, 10) || null })}
                className="w-full rounded-input border border-border px-3 py-2 text-sm"
                aria-describedby={errors.quantity ? 'qty-err' : undefined}
              />
              {errors.quantity && (
                <p id="qty-err" className="mt-1 text-xs text-accent">
                  {errors.quantity}
                </p>
              )}
            </div>

            {/* Logo Placement */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Logo Placement * (max 4)</legend>
              <div className="flex flex-wrap gap-2">
                {LOGO_PLACEMENTS.map((p) => {
                  const selected = brief.logoPlacements.includes(p.key);
                  const atMax = brief.logoPlacements.length >= 4 && !selected;
                  return (
                    <Chip
                      key={p.key}
                      selected={selected}
                      disabled={atMax}
                      onClick={() => togglePlacement(p.key)}
                    >
                      {p.label}
                    </Chip>
                  );
                })}
              </div>
              {brief.logoPlacements.length >= 4 && (
                <p className="mt-1 text-xs text-muted">Most caps take up to 4 placements.</p>
              )}
              {errors.logoPlacements && (
                <p className="mt-1 text-xs text-accent">{errors.logoPlacements}</p>
              )}
            </fieldset>

            {/* Material */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Material preference *</legend>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(MATERIALS) as MaterialKey[]).map((key) => (
                  <Chip
                    key={key}
                    selected={brief.material === key}
                    onClick={() => {
                      const patch: Partial<typeof brief> = { material: key };
                      if (
                        brief.decoration === 'sublimation' &&
                        key === 'fleece'
                      ) {
                        patch.decoration = undefined;
                      }
                      update(patch);
                    }}
                  >
                    <MaterialIcon material={key} size={16} /> {MATERIALS[key].label}
                  </Chip>
                ))}
                <Chip
                  selected={brief.material === 'recommend'}
                  onClick={() => update({ material: 'recommend' })}
                >
                  Recommend for me
                </Chip>
              </div>
              {brief.material !== 'recommend' && (
                <p className="mt-2 text-xs text-muted">
                  {MATERIALS[brief.material].shortDescription}
                </p>
              )}
            </fieldset>

            {/* Optional: Decoration */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Decoration method</legend>
              <div className="flex flex-wrap gap-2">
                {availableDecorations.map((d) => (
                  <Chip
                    key={d.key}
                    selected={brief.decoration === d.key}
                    onClick={() => update({ decoration: d.key })}
                  >
                    {d.label}
                  </Chip>
                ))}
              </div>
            </fieldset>

            {/* Optional: Artwork */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Artwork status</legend>
              <div className="flex flex-wrap gap-2">
                {(['ready', 'reference', 'help'] as const).map((a) => (
                  <Chip
                    key={a}
                    selected={brief.artwork === a}
                    onClick={() => update({ artwork: a })}
                  >
                    {a === 'ready' ? 'Ready (vector / spec file)' : a === 'reference' ? 'I have a reference image' : 'I need design help'}
                  </Chip>
                ))}
              </div>
              {brief.artwork === 'ready' && (
                <input
                  type="text"
                  maxLength={120}
                  placeholder="PANTONE 186C + white"
                  value={brief.pantones ?? ''}
                  onChange={(e) => update({ pantones: e.target.value })}
                  className="mt-2 w-full rounded-input border border-border px-3 py-2 text-sm"
                />
              )}
            </fieldset>

            {/* Optional: Target date */}
            <div>
              <label htmlFor="qq-date" className="mb-2 block text-sm font-semibold">
                Target date
              </label>
              <input
                id="qq-date"
                type="date"
                min={minTargetDate()}
                value={brief.targetDate ?? ''}
                onChange={(e) => update({ targetDate: e.target.value })}
                className="w-full rounded-input border border-border px-3 py-2 text-sm"
              />
            </div>

            {/* Channel preference */}
            <fieldset>
              <legend className="mb-2 text-sm font-semibold">Preferred channel</legend>
              <div className="flex flex-wrap gap-2">
                {(['whatsapp', 'email', 'alitalk'] as QuoteChannel[]).map((c) => (
                  <Chip
                    key={c}
                    selected={brief.channel === c}
                    onClick={() => update({ channel: c })}
                  >
                    {c === 'whatsapp' ? 'WhatsApp' : c === 'email' ? 'Email' : 'Instant messaging'}
                  </Chip>
                ))}
              </div>
            </fieldset>

          </form>
        )}
        </div>
        {!confirmed && (
          <div className="sticky bottom-0 shrink-0 border-t border-border bg-surface px-4 py-3 safe-bottom md:px-6 md:py-4">
            <Button
              type="submit"
              form="quick-quote-form"
              className="min-h-12 w-full"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(brief.channel);
              }}
            >
              {channelLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
