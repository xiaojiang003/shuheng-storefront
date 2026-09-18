export function MaterialCottonIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="11" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 4c-2 2-3 4-3 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
