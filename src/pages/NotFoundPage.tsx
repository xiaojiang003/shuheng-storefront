import { CATEGORIES } from '@/data/categories';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container-content py-24 text-center">
      <title>Page not found — Shuheng</title>
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-muted">This page could not be found.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="text-brand underline">
          Home
        </Link>
        <Link to="/collection" className="text-brand underline">
          Collection
        </Link>
        {CATEGORIES.map((c) => (
          <Link key={c.key} to={c.route} className="text-brand underline">
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
