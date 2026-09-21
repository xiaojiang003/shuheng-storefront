/** Only list certifications the merchant can verify — update before launch */
export const CERTIFICATIONS = [
  { id: 'qc', label: 'Multi-stage QC', description: 'Incoming, in-line and final AQL inspection' },
  { id: 'b2b', label: 'B2B Export Ready', description: 'FOB, CIF, EXW and 6 Incoterms supported' },
  { id: 'sample', label: 'Sample Approval', description: 'Pre-production sign-off before bulk' },
] as const;
