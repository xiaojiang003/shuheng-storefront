import type { MaterialKey } from '@/types/material';
import { MATERIALS } from '@/data/materials';

interface MaterialIconProps {
  material: MaterialKey;
  size?: number;
  className?: string;
  label?: boolean;
}

export function MaterialIcon({ material, size = 20, className, label }: MaterialIconProps) {
  const def = MATERIALS[material];
  const Icon = def.icon;
  if (label) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <Icon size={size} className={className} />
        <span>{def.label}</span>
      </span>
    );
  }
  return <Icon size={size} className={className} />;
}
