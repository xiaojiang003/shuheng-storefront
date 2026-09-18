import { cn } from '@/lib/cn';

interface ChipProps {
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Chip({ selected, disabled, onClick, children, className }: ChipProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'inline-flex min-h-11 items-center rounded-pill border px-3 py-2 text-xs font-medium transition-colors',
        'active:scale-[0.98]',
        selected
          ? 'border-brand bg-brand text-white'
          : 'border-border bg-surface text-ink hover:border-brand',
        disabled && 'cursor-not-allowed opacity-40',
        className,
      )}
    >
      {children}
    </button>
  );
}
