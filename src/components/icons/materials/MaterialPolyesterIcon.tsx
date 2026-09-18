export function MaterialPolyesterIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <ellipse cx="12" cy="8" rx="4" ry="5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 14h8M10 17h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M14 6l2-2M10 6L8 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
