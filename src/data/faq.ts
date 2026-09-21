export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'moq',
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ starts from 50 pieces per style for most cap programs. Small trial orders below MOQ may be discussed — use Quick Quote to confirm.',
  },
  {
    id: 'lead-time',
    question: 'What are the lead times for sampling and bulk production?',
    answer: 'Sampling typically takes 7–10 business days after artwork approval. Bulk production is confirmed on enquiry based on quantity and season — typical ranges are discussed in writing before deposit.',
  },
  {
    id: 'certifications',
    question: 'What compliance and quality standards do you follow?',
    answer: 'We operate multi-stage QC: incoming fabric inspection, in-line panel checks, and final AQL before packing. Specific third-party certifications should be confirmed with our trade team for your market requirements.',
  },
  {
    id: 'fabric',
    question: 'Can I choose any fabric or colour?',
    answer: 'Yes. We work with cotton, polyester, mesh, corduroy and fleece. Stock fabrics offer shorter lead times; custom dye or open-market fabrics are available — contact us for MOQ and schedule.',
  },
  {
    id: 'response',
    question: 'How quickly will I receive a reply after sending an enquiry?',
    answer: 'Our English-speaking trade team responds within one business day. For urgent programs, include your target date in Quick Quote.',
  },
  {
    id: 'sizing',
    question: 'How do I choose the right hat size for my customers?',
    answer: 'Use our sizing guide for US cap size, inches and centimetres mapping. Adjustable closures suit most retail programs; fitted sizes require head circumference measurement.',
  },
  {
    id: 'payment',
    question: 'What payment terms do you accept?',
    answer: 'We accept T/T, L/C, and other methods listed on our About page. Standard structure is discussed per order — deposit and balance schedules are confirmed in writing.',
  },
  {
    id: 'defects',
    question: 'What if I receive damaged or defective products?',
    answer: 'Contact your sales representative with photos and order reference. We stand behind our QC process and will work with you on inspection reports and remediation.',
  },
];
