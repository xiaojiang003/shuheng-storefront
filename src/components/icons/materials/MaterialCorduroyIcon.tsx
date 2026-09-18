export function MaterialCorduroyIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {[7, 10, 13, 16, 19].map((x) => (
        <path
          key={x}
          d={`M${x} 5 Q${x - 0.5} 12 ${x} 19`}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
