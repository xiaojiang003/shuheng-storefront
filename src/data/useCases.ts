import type { SilhouetteKey } from '@/types/silhouette';

export interface UseCase {
  slug: string;
  title: string;
  headline: string;
  description: string;
  recommendedSilhouettes: SilhouetteKey[];
  cta: string;
}

export const USE_CASES: UseCase[] = [
  {
    slug: 'sports-uniforms',
    title: 'Sports & Team Uniforms',
    headline: 'Structured caps for on-field identity',
    description: '6-panel fitted and performance caps with flat or pre-curved visors. MOQ from 50. Embroidery and patch decoration.',
    recommendedSilhouettes: ['six-panel-fitted', 'performance-golf', 'six-panel-snapback'],
    cta: 'Start a team cap program',
  },
  {
    slug: 'streetwear-retail',
    title: 'Streetwear & Retail Drops',
    headline: 'Snapbacks and dad hats for lifestyle brands',
    description: 'Unstructured dad hats and structured snapbacks for seasonal drops. Tier pricing for 500+ and 5,000+ units.',
    recommendedSilhouettes: ['dad-hat', 'six-panel-snapback', 'five-panel-camp'],
    cta: 'Plan your retail drop',
  },
  {
    slug: 'promotional-events',
    title: 'Promotional & Events',
    headline: 'Trucker and bucket hats for high-volume promos',
    description: 'Mesh truckers and bucket hats for festivals, golf and corporate gifting. Fast sampling for event deadlines.',
    recommendedSilhouettes: ['trucker-mesh', 'bucket-hat', 'performance-golf'],
    cta: 'Quote your event run',
  },
];
