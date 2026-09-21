export interface Testimonial {
  id: string;
  name: string;
  country: string;
  quote: string;
  date: string;
}

/** Placeholder testimonials — replace with verified client quotes before launch */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mark T.',
    country: 'United States',
    quote: 'Clear communication on MOQ and sampling. The structured quote brief saved us three email rounds before production.',
    date: '2026-03',
  },
  {
    id: '2',
    name: 'Elena K.',
    country: 'Germany',
    quote: 'Quality consistent across our 500-piece trucker run. Interior QC photos on the product page helped our buyer approve faster.',
    date: '2026-02',
  },
  {
    id: '3',
    name: 'James L.',
    country: 'Australia',
    quote: 'Responsive trade team — sampling schedule confirmed in writing within one business day.',
    date: '2026-01',
  },
];
