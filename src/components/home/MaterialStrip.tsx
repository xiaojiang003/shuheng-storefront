import { MaterialIcon } from '@/components/icons/materials/MaterialIcon';
import { MATERIALS } from '@/data/materials';
import type { MaterialKey } from '@/types/material';

const KEYS = Object.keys(MATERIALS) as MaterialKey[];

export function MaterialStrip() {
  return (
    <section className="border-y border-border bg-surface-alt py-12" aria-labelledby="materials-heading">
      <div className="container-content">
        <h2 id="materials-heading" className="mb-6 text-center text-xl font-bold text-brand">
          Materials We Work With
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {KEYS.map((key) => {
            const def = MATERIALS[key];
            return (
              <div key={key} className="text-center">
                <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-card bg-surface text-brand">
                  <MaterialIcon material={key} size={32} />
                </div>
                <h3 className="text-sm font-bold">{def.label}</h3>
                <p className="mt-1 text-xs text-muted">{def.shortDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
