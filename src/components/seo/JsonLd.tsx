import type { JsonLdGraph } from '@/types/seo';

interface JsonLdProps {
  data: JsonLdGraph;
}

/** Renders structured data — prefer SSR/prerender in production per spec Section 7.3.3 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
