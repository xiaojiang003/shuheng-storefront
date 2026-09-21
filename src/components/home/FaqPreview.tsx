import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/data/faq';
import { Link } from 'react-router-dom';

export function FaqPreview() {
  return (
    <section className="py-16" aria-labelledby="faq-preview-heading">
      <div className="container-content">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 id="faq-preview-heading" className="text-2xl font-bold text-brand">
              Frequently asked questions
            </h2>
            <p className="mt-1 text-sm text-muted">MOQ, lead times, fabrics and more.</p>
          </div>
          <Link to="/faq" className="text-sm text-brand underline">
            View all
          </Link>
        </div>
        <Accordion
          items={FAQ_ITEMS.slice(0, 4).map((f) => ({
            id: f.id,
            title: f.question,
            content: f.answer,
          }))}
        />
      </div>
    </section>
  );
}
