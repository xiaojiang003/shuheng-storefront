import type { SizingRow } from '@/types/product';

export const FITTED_SIZING: SizingRow[] = [
  { us: '6⅞', alpha: 'Youth / S', inches: '21⅝', cm: '54.9', band: '54.0–55.4', adjustable: 'Snapback on tightest setting', notes: 'Common youth and small-adult size.' },
  { us: '7', alpha: 'S', inches: '22', cm: '55.8', band: '55.5–56.3', adjustable: 'S adjustable', notes: 'Standard small.' },
  { us: '7⅛', alpha: 'S / M', inches: '22⅜', cm: '56.8', band: '56.4–57.2', adjustable: 'S / M adjustable', notes: 'Most common entry size for adult women.' },
  { us: '7¼', alpha: 'M', inches: '22¾', cm: '57.7', band: '57.3–58.2', adjustable: 'M adjustable', notes: 'High-volume adult size.' },
  { us: '7⅜', alpha: 'M / L', inches: '23⅛', cm: '58.7', band: '58.3–59.1', adjustable: 'M / L adjustable', notes: 'Mid-point of the adult range.' },
  { us: '7½', alpha: 'L', inches: '23½', cm: '59.6', band: '59.2–60.1', adjustable: 'L adjustable', notes: 'High-volume adult size.' },
  { us: '7⅝', alpha: 'L / XL', inches: '23⅞', cm: '60.6', band: '60.2–61.0', adjustable: 'L / XL adjustable', notes: 'Standard large.' },
  { us: '7¾', alpha: 'XL', inches: '24¼', cm: '61.5', band: '61.1–62.0', adjustable: 'XL adjustable', notes: 'Larger adult head.' },
  { us: '7⅞', alpha: 'XL', inches: '24⅝', cm: '62.5', band: '62.1–63.0', adjustable: 'XL adjustable', notes: 'Top of the standard fitted range.' },
  { us: '8', alpha: 'XXL', inches: '25', cm: '63.5', band: '63.1–64.0', adjustable: 'XXL adjustable', notes: 'Largest standard fitted size.' },
];

export const MEASURE_INSTRUCTIONS = [
  'Use a soft measuring tape, or a strip of paper and a ruler.',
  'Measure around the head about 1 cm above the ears and across the mid-forehead — this is the crown line, not the eyebrow line.',
  'Keep the tape snug but not tight. If it leaves a mark, it is too tight.',
  'Read the circumference in centimetres where possible — metric is more precise than inches at hat scale.',
  'Between two sizes on a fitted cap? Size up and use the interior sweatband tape. Between two sizes on an adjustable cap? Take the smaller alpha and use the closure.',
] as const;
