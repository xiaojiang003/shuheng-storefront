export type SilhouetteKey =
  | 'six-panel-fitted'
  | 'six-panel-snapback'
  | 'five-panel-camp'
  | 'trucker-mesh'
  | 'dad-hat'
  | 'bucket-hat'
  | 'knit-beanie'
  | 'performance-golf';

export interface SilhouetteDefinition {
  key: SilhouetteKey;
  label: string;
  crown: string;
  closure: string;
  visor: string;
  profile: string;
  panels: number | 'n/a';
  bestFor: string;
  chips: readonly string[];
  collectionUrl: string;
  educationUrl: string;
  lineArt: string;
}
