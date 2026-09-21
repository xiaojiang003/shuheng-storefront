import { CATEGORIES } from '@/data/categories';
import { Link } from 'react-router-dom';

export function CategoryGrid() {
  return (
    <section className="py-16" aria-labelledby="categories-heading">
      <div className="container-content">
        <h2 id="categories-heading" className="sr-only">
          Shop by category
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={cat.route}
              className="group relative aspect-[4/5] overflow-hidden rounded-card bg-surface-alt"
            >
              <img
                src={cat.image}
                alt=""
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-4">
                <span className="text-sm font-bold uppercase tracking-widest text-white">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
