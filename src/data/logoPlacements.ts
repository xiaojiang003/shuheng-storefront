import type { LogoPlacement } from '@/types/quote';

export const LOGO_PLACEMENTS: readonly {
  key: LogoPlacement;
  label: string;
}[] = [
  { key: 'front-centred', label: 'Front panel (centred)' },
  { key: 'front-left', label: 'Front panel (left offset)' },
  { key: 'side-left', label: 'Side panel left' },
  { key: 'side-right', label: 'Side panel right' },
  { key: 'back-above-closure', label: 'Back above closure' },
  { key: 'visor-top', label: 'Visor / brim top' },
  { key: 'under-brim', label: 'Under-brim' },
  { key: 'interior-sweatband', label: 'Interior sweatband' },
  { key: 'full-front-3d', label: 'Full-front 3D puff' },
  { key: 'all-over-print', label: 'All-over print' },
] as const;
