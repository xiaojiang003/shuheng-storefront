export const HEADER_NAV = [
  { to: '/', key: 'nav.home' },
  { to: '/collection', key: 'nav.collection' },
  { to: '/cases', key: 'nav.cases' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
] as const;

export const MOBILE_NAV = [
  ...HEADER_NAV.slice(0, 4),
  { to: '/faq', key: 'nav.faq' },
  { to: '/fit-finder', key: 'nav.fitFinder' },
  { to: '/about', key: 'nav.about' },
  { to: '/contact', key: 'nav.contact' },
] as const;
