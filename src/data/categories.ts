export const CATEGORIES = [
  {
    key: '6-panel-caps',
    label: '6-Panel Baseball Caps',
    route: '/collection/6-panel-caps',
    image: '/images/categories/6-panel.jpg',
  },
  {
    key: 'trucker-hats',
    label: 'Trucker Hats',
    route: '/collection/trucker-hats',
    image: '/images/categories/trucker.jpg',
  },
  {
    key: 'bucket-hats',
    label: 'Bucket Hats',
    route: '/collection/bucket-hats',
    image: '/images/categories/bucket.jpg',
  },
  {
    key: 'dad-hats',
    label: 'Dad Hats',
    route: '/collection/dad-hats',
    image: '/images/categories/dad.jpg',
  },
] as const;

export const ALL_CATEGORIES = [
  '6-panel-caps',
  '5-panel-caps',
  'trucker-hats',
  'dad-hats',
  'bucket-hats',
  'specialty-knits',
] as const;
