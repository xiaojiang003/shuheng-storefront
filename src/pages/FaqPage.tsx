import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQ_ITEMS } from '@/data/faq';
import { buildFaqJsonLdFromItems } from '@/lib/jsonLd';

export function FaqPage() {
  return (
    <>
      <title>FAQ — Shuheng Headwear</title>
      <JsonLd data={buildFaqJsonLdFromItems(FAQ_ITEMS)} />
      <div className="container-content py-10">
        <h1 className="text-3xl font-bold text-brand">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl text-muted">
          MOQ, lead times, fabrics, payment and after-sales — answers for B2B buyers.
        </p>
        <div className="mt-8">
          <Accordion
            items={FAQ_ITEMS.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
            }))}
          />
        </div>
      </div>
    </>
  );
}
