import { cn } from '@/lib/cn';
import type { SizingRow } from '@/types/product';
import { cva, type VariantProps } from 'class-variance-authority';

const rowVariants = cva('border-b border-border last:border-0', {
  variants: { emphasis: { default: '', featured: 'bg-surface-alt font-semibold' } },
  defaultVariants: { emphasis: 'default' },
});

export interface SizeMappingTableProps extends VariantProps<typeof rowVariants> {
  rows: SizingRow[];
  caption?: string;
  className?: string;
}

export function SizeMappingTable({ rows, caption, className, ...v }: SizeMappingTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-border bg-surface-alt text-xs uppercase tracking-wide">
            <th scope="col" className="px-3 py-2">US cap size</th>
            <th scope="col" className="px-3 py-2">US alpha</th>
            <th scope="col" className="px-3 py-2">IN</th>
            <th scope="col" className="px-3 py-2">CM</th>
            <th scope="col" className="px-3 py-2">Metric band</th>
            <th scope="col" className="px-3 py-2">Adjustable equiv.</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.us} className={rowVariants({ emphasis: v.emphasis })}>
              <td className="px-3 py-2">{r.us}</td>
              <td className="px-3 py-2">{r.alpha}</td>
              <td className="px-3 py-2">{r.inches}</td>
              <td className="px-3 py-2">{r.cm}</td>
              <td className="px-3 py-2">{r.band}</td>
              <td className="px-3 py-2">{r.adjustable}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
