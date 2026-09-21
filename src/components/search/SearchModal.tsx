import { BLOG_POSTS } from '@/data/blogPosts';
import { MOCK_PRODUCTS } from '@/data/products.mock';
import { SILHOUETTES } from '@/data/silhouettes';
import { Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: [], posts: [], silhouettes: [] };
    return {
      products: MOCK_PRODUCTS.filter(
        (p) => p.title.toLowerCase().includes(q) || p.category.includes(q),
      ),
      posts: BLOG_POSTS.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q),
      ),
      silhouettes: SILHOUETTES.filter(
        (s) => s.label.toLowerCase().includes(q) || s.bestFor.toLowerCase().includes(q),
      ),
    };
  }, [query]);

  if (!open) return null;

  const hasResults =
    results.products.length + results.posts.length + results.silhouettes.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/50 p-4 pt-20">
      <div className="w-full max-w-lg rounded-card bg-surface shadow-[var(--shadow-elevation-2)]" role="dialog" aria-label="Search">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search className="size-5 text-muted" aria-hidden />
          <input
            autoFocus
            type="search"
            placeholder="Search products, silhouettes, articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent text-sm outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="flex size-11 items-center justify-center">
            <X className="size-5" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-4">
          {!query && <p className="text-sm text-muted">Type to search catalogue and blog.</p>}
          {query && !hasResults && <p className="text-sm text-muted">No results for &ldquo;{query}&rdquo;</p>}
          {results.products.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Products</p>
              <ul className="space-y-2">
                {results.products.map((p) => (
                  <li key={p.id}>
                    <Link to={`/product/${p.slug}`} onClick={onClose} className="text-sm text-brand hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {results.silhouettes.length > 0 && (
            <div className="mb-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Silhouettes</p>
              <ul className="space-y-2">
                {results.silhouettes.map((s) => (
                  <li key={s.key}>
                    <Link to={`/silhouette/${s.key}`} onClick={onClose} className="text-sm text-brand hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {results.posts.length > 0 && (
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Blog</p>
              <ul className="space-y-2">
                {results.posts.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} onClick={onClose} className="text-sm text-brand hover:underline">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
