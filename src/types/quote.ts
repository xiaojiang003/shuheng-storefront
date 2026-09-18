import type { MaterialKey } from '@/types/material';
import type { SilhouetteKey } from '@/types/silhouette';

export type LogoPlacement =
  | 'front-centred'
  | 'front-left'
  | 'side-left'
  | 'side-right'
  | 'back-above-closure'
  | 'visor-top'
  | 'under-brim'
  | 'interior-sweatband'
  | 'full-front-3d'
  | 'all-over-print';

export type DecorationMethod =
  | 'flat-embroidery'
  | '3d-puff'
  | 'woven-patch'
  | 'leather-patch'
  | 'sublimation'
  | 'screen-print'
  | 'heat-transfer';

export type QuoteChannel = 'alitalk' | 'whatsapp' | 'email';

export interface QuoteBrief {
  capStyle: SilhouetteKey | 'unsure';
  quantity: number | null;
  logoPlacements: LogoPlacement[];
  material: MaterialKey | 'recommend';
  decoration?: DecorationMethod;
  artwork?: 'ready' | 'reference' | 'help';
  pantones?: string;
  targetDate?: string;
  destination?: { country?: string; port?: string };
  reference?: string;
  channel: QuoteChannel;
  sourceProduct?: string;
}
