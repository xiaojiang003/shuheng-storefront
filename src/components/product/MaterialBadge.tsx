import { MaterialIcon } from '@/components/icons/materials/MaterialIcon';
import { MATERIALS } from '@/data/materials';
import type { MaterialKey } from '@/types/material';

interface MaterialBadgeProps {
  material: MaterialKey;
}

export function MaterialBadge({ material }: MaterialBadgeProps) {
  const def = MATERIALS[material];
  return (
    <span
      title={def.shortDescription}
      className="inline-flex items-center gap-1.5 rounded-pill border border-border px-2.5 py-1 text-xs"
    >
      <MaterialIcon material={material} size={16} />
      {def.label}
    </span>
  );
}
