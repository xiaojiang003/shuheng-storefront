import type { ShootAngle } from '@/types/product';

export const SHOOT_ANGLES: readonly {
  code: ShootAngle;
  label: string;
  order: number;
}[] = [
  { code: '3QL', label: 'Three-quarter (hero)', order: 1 },
  { code: 'F', label: 'Front', order: 2 },
  { code: 'R', label: 'Rear', order: 3 },
  { code: 'LSIDE', label: 'Left side', order: 4 },
  { code: 'RSIDE', label: 'Right side', order: 5 },
  { code: 'INT', label: 'Interior / Sticker', order: 6 },
] as const;

export const REQUIRED_ANGLES: readonly ShootAngle[] = SHOOT_ANGLES.map((a) => a.code);
