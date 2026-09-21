import { useLocale } from '@/i18n/LocaleProvider';
import { useUiStore } from '@/stores/useUiStore';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const MESSAGE_KEYS = ['announce.1', 'announce.2', 'announce.3'] as const;

export function AnnouncementBar() {
  const { t } = useLocale();
  const dismissed = useUiStore((s) => s.announcementDismissed);
  const dismiss = useUiStore((s) => s.dismissAnnouncement);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % MESSAGE_KEYS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div className="relative min-h-10 bg-ink text-center text-xs text-white">
      <p className="flex min-h-10 items-center justify-center px-10 py-2">{t(MESSAGE_KEYS[index])}</p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-80"
      >
        <X className="size-4" aria-hidden />
      </button>
    </div>
  );
}
