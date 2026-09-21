export interface CaseStudy {
  slug: string;
  title: string;
  country: string;
  quantity: string;
  product: string;
  summary: string;
  highlights: string[];
  date: string;
  /** Demo image — replace with real project photography before launch */
  image: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'iceland-retailer-trucker-200',
    title: '200 Custom Mesh Trucker Hats for an Icelandic Retailer',
    country: 'Iceland',
    quantity: '200 pcs',
    product: 'Trucker hats',
    summary: 'Embroidered mesh trucker program in two colourways after sample approval. Delivered for seasonal retail drop.',
    highlights: ['Flat embroidery front panel', 'Two colourways', 'Sample approved before bulk'],
    date: '2026-08',
    image: '/images/cases/iceland-trucker.jpg',
  },
  {
    slug: 'sweden-suede-trucker-1000',
    title: '1,000 Faux Suede Trucker Hats — 3 Colorways for Sweden Retail Brand',
    country: 'Sweden',
    quantity: '1,000 pcs',
    product: '5-panel trucker',
    summary: 'Blank five-panel faux suede truckers in black, magenta and forest green. Colour swatch and pre-production sample sign-off.',
    highlights: ['3 colourways', 'Pre-production sample', 'Tier pricing for 1,000+'],
    date: '2026-07',
    image: '/images/cases/sweden-trucker.jpg',
  },
  {
    slug: 'us-team-snapback-500',
    title: '500 Structured Snapbacks for a US Sports Program',
    country: 'United States',
    quantity: '500 pcs',
    product: '6-panel snapback',
    summary: 'Structured cotton twill snapbacks with 3D puff front logo and size run 7–7¾ for adult team distribution.',
    highlights: ['3D puff embroidery', 'Fitted size run', '6-angle product photography'],
    date: '2026-06',
    image: '/images/cases/us-snapback.jpg',
  },
];
