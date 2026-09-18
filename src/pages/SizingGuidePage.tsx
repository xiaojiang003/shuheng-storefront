import { SizeMappingTable } from '@/components/product/SizeMappingTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { MEASURE_INSTRUCTIONS, FITTED_SIZING } from '@/data/sizingChart';
import { buildFaqJsonLd } from '@/lib/jsonLd';

export function SizingGuidePage() {
  return (
    <>
      <title>Sizing Guide — Shuheng</title>
      <JsonLd data={buildFaqJsonLd()} />
      <div className="container-content py-10">
        <h1 className="text-3xl font-bold text-brand">Hat Sizing Guide</h1>
        <p className="mt-4 max-w-2xl text-muted">
          US cap size, US alpha, inches, centimetres and adjustable equivalents — no unit conversion required.
        </p>
        <section className="mt-8">
          <h2 className="text-lg font-bold">How to measure</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {MEASURE_INSTRUCTIONS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold">Fitted size mapping</h2>
          <SizeMappingTable rows={FITTED_SIZING} caption="Fitted hat size mapping table" />
          <p className="mt-4 text-xs text-muted">
            Published tolerance: ±0.5 cm. Cotton caps may relax up to 0.5 cm after first wash.
          </p>
        </section>
      </div>
    </>
  );
}
