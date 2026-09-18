export function MaterialMeshIcon({ size = 20, className }: { size?: number; className?: string }) {
  const dots = [
    [6, 6], [12, 6], [18, 6],
    [9, 12], [15, 12],
    [6, 18], [12, 18], [18, 18],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="currentColor" />
      ))}
    </svg>
  );
}
