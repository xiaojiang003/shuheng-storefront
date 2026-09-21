/** Stakeholder-approved defaults — see docs/STAKEHOLDER_DECISIONS.md */
export const MERCHANT = {
  companyId: 292354388,
  legalName: 'Shijiazhuang Shuheng Enterprise Management Consulting Co., Ltd.',
  brandName: 'Shuheng Global Commerce',
  siteUrl: 'https://www.shuheng-headwear.com',
  registrationYear: 2025,
  address: {
    street: '2-2303-1 Wanxiang Tiancheng Business Plaza, No. 15 Yuhua West Road',
    locality: 'Shijiazhuang',
    region: 'Hebei',
    country: 'CN',
  },
  logoUrl:
    'https://sc01.alicdn.com/kf/H3c49a7b9d05149e6ac6c7c97c18d4f329.jpg',
  qualityInspectors: 'Fewer than 5 dedicated people',
  rAndDStaff: 'Fewer than 5 dedicated people',
  foreignTradeStaff: '21–50 people',
  languages: [
    'English', 'Chinese', 'Spanish', 'Japanese', 'Portuguese', 'German',
    'Arabic', 'French', 'Russian', 'Korean', 'Hindi', 'Italian',
  ],
  currencies: ['USD', 'EUR', 'JPY', 'CAD', 'AUD', 'HKD', 'GBP', 'CNY'],
  deliveryTerms: ['FOB', 'CIF', 'EXW', 'FCA', 'DDP', 'DDU'],
  paymentMethods: [
    'T/T', 'L/C', 'D/P D/A', 'MoneyGram', 'Card', 'PayPal',
    'Western Union', 'Cash', 'Escrow',
  ],
  coreAdvantages: 6,
  responseTime: 'within one business day',
  dailyCapacity: 'Confirmed on enquiry',
  leadTimes: {
    sample: '7–10 business days after artwork approval',
    bulk500: 'Confirmed on enquiry',
    bulk1000: 'Confirmed on enquiry',
    bulk5000: 'Confirmed on enquiry',
  },
  paymentTerms: {
    structure: '30% deposit / 70% before shipment (typical T/T)',
    methods: ['T/T', 'L/C', 'PayPal', 'Western Union'],
  },
  eCatalogUrl: '/catalog/shuheng-headwear-catalog.pdf',
  mainMarkets: {
    'North America': 40,
    'Eastern Europe': 15,
    'Western Europe': 15,
    Oceania: 10,
    'South America': 10,
    'N. Europe': 3,
    'S. Europe': 3,
    'Mid East': 3,
    Africa: 1,
  },
  inventory: { owner: 'Merchant ops team', syncFrequency: 'weekly' },
  assets: { marketplaceApproved: true, minResolution: 350 },
  locale: { default: 'en', phase2Locales: 12 },
} as const;

export const CAPACITY_FALLBACK = 'Capacity and lead time confirmed on enquiry';
