export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: string[];
  /** Demo cover — replace with original photography before launch */
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hat-fabric-weight-gsm-guide',
    title: 'Hat Fabric Weight Guide: How GSM Changes Quality and Shape',
    excerpt: 'Fabric weight (GSM) is the single biggest factor behind cap structure, hand-feel and durability. Here is how to choose.',
    date: '2026-07-17',
    readMinutes: 5,
    coverImage: '/images/blog/fabric-gsm.jpg',
    body: [
      'Grams per square metre (GSM) determines how a cap holds its crown, drapes on the head, and survives washing.',
      'Cotton twill for structured caps typically runs 240–320 g/m² (10–12 oz). Lower GSM relaxes faster; higher GSM holds shape for embroidery.',
      'Polyester performance twills at 180–260 g/m² suit sports and sublimation programs where moisture management matters.',
      'Mesh rear panels on truckers are lighter (100–150 g/m²) — pair with a structured front panel so the cap does not collapse.',
      'For bulk buyers: specify GSM in your tech pack. We confirm stock weights on sampling so bulk matches the approved sample.',
    ],
  },
  {
    slug: 'cotton-vs-polyester-custom-hats',
    title: 'Cotton vs Polyester Custom Hats: Which Fabric Fits Your Brand?',
    excerpt: 'Both fabrics work for custom caps — but they excel in different use cases. Compare breathability, print methods and shrinkage.',
    date: '2026-07-11',
    readMinutes: 4,
    coverImage: '/images/blog/cotton-poly.jpg',
    body: [
      'Cotton twill is the default for dad hats, retail brands and dense embroidery. It accepts washed vintage finishes and feels natural.',
      'Polyester resists shrinkage and fading — ideal for uniforms, team caps and sublimation all-over prints.',
      'Blends combine structure with performance; mesh backs add airflow without changing the front panel decoration options.',
      'Match fabric to decoration: 3D puff and patches favour cotton or cotton blends; sublimation requires polyester content.',
      'Not sure? Select "Recommend for me" in Quick Quote and our team will shortlist based on your artwork and market.',
    ],
  },
  {
    slug: 'how-to-measure-hat-size',
    title: 'How to Measure Hat Size for Bulk Orders',
    excerpt: 'Avoid returns and reorders by getting the size mix right. Use crown-line circumference in centimetres for precision.',
    date: '2026-06-28',
    readMinutes: 3,
    coverImage: '/images/blog/hat-size.jpg',
    body: [
      'Measure around the head 1 cm above the ears and across the mid-forehead — the crown line, not the eyebrow.',
      'Read circumference in centimetres where possible. At hat scale, metric is more precise than inches.',
      'For fitted programs, use our size mapping table to translate CM to US cap sizes (6⅞ through 8).',
      'For adjustable programs, publish the min–max range on your PDP — most buyers are more confident with adjustable than fitted.',
      'Between two fitted sizes? Size up. Between two adjustable alphas? Take the smaller and use the closure.',
    ],
  },
];
