import { MaterialCorduroyIcon } from '@/components/icons/materials/MaterialCorduroyIcon';
import { MaterialCottonIcon } from '@/components/icons/materials/MaterialCottonIcon';
import { MaterialFleeceIcon } from '@/components/icons/materials/MaterialFleeceIcon';
import { MaterialMeshIcon } from '@/components/icons/materials/MaterialMeshIcon';
import { MaterialPolyesterIcon } from '@/components/icons/materials/MaterialPolyesterIcon';
import type { MaterialDefinition, MaterialKey } from '@/types/material';

export const MATERIALS: Record<MaterialKey, MaterialDefinition> = {
  cotton: {
    key: 'cotton',
    label: 'Cotton',
    shortDescription:
      'Breathable natural twill with a soft hand-feel that takes dense embroidery.',
    composition: '100% cotton twill, 240–320 g/m² (10–12 oz)',
    breathability: 'medium',
    bestFor: ['dad-hat', 'six-panel-snapback', 'six-panel-fitted'],
    care: ['Hand wash cold', 'Air dry', 'Do not bleach'],
    icon: MaterialCottonIcon,
  },
  polyester: {
    key: 'polyester',
    label: 'Polyester',
    shortDescription:
      'Durable, colour-fast performance twill that resists shrinkage and fading.',
    composition: '100% polyester twill or pique, 180–260 g/m²',
    breathability: 'medium-high',
    bestFor: ['performance-golf', 'six-panel-fitted', 'trucker-mesh'],
    care: ['Machine wash cold', 'Tumble dry low'],
    icon: MaterialPolyesterIcon,
  },
  mesh: {
    key: 'mesh',
    label: 'Mesh',
    shortDescription: 'Open-weave knit panels for maximum airflow on hot days.',
    composition: 'Polyester mesh 100–150 g/m² on rear panels',
    breathability: 'high',
    bestFor: ['trucker-mesh', 'performance-golf'],
    care: ['Hand wash', 'Air dry'],
    icon: MaterialMeshIcon,
  },
  corduroy: {
    key: 'corduroy',
    label: 'Corduroy',
    shortDescription:
      'Textured wale fabric with a rich retro surface for premium capsule lines.',
    composition: 'Cotton or cotton/poly blend, 8–14 wale, 220–300 g/m²',
    breathability: 'medium',
    bestFor: ['five-panel-camp', 'dad-hat'],
    care: ['Dry clean recommended', 'Spot clean'],
    icon: MaterialCorduroyIcon,
  },
  fleece: {
    key: 'fleece',
    label: 'Fleece',
    shortDescription: 'Brushed knit with a soft nap: warm, light and stretchy.',
    composition: 'Polyester or poly-blend fleece, 260–340 g/m²',
    breathability: 'low',
    bestFor: ['knit-beanie'],
    care: ['Machine wash cold', 'Do not iron'],
    icon: MaterialFleeceIcon,
  },
};
