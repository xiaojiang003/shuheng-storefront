import type { ComponentType } from 'react';

export type MaterialKey = 'cotton' | 'polyester' | 'mesh' | 'corduroy' | 'fleece';

export interface MaterialDefinition {
  key: MaterialKey;
  label: string;
  shortDescription: string;
  composition: string;
  breathability: 'low' | 'medium' | 'medium-high' | 'high';
  bestFor: readonly string[];
  care: readonly string[];
  icon: ComponentType<{ size?: number; className?: string }>;
}
