import { BLOG_POSTS } from '@/data/blogPosts';
import { Link } from 'react-router-dom';

export function BlogPage() {
  return (
    <div className="container-content py-10">
      <title>Blog — Shuheng Headwear Guides</title>
      <h1 className="text-3xl font-bold text-brand">Guides & Updates</h1>
      <p className="mt-4 text-muted">Fabric, sizing and sourcing tips for B2B buyers.</p>
      <div className="mt-10 space-y-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="grid gap-6 border-b border-border pb-8 md:grid-cols-[240px_1fr]">
            <div className="aspect-[4/3] overflow-hidden rounded-card bg-surface-alt">
              <img
                src={post.coverImage}
                alt=""
                width={480}
                height={360}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
            <div>
            <time className="text-xs text-muted" dateTime={post.date}>{post.date}</time>
            <h2 className="mt-1 text-xl font-bold">
              <Link to={`/blog/${post.slug}`} className="hover:text-brand">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="mt-2 inline-block text-sm text-brand underline">
              Read more · {post.readMinutes} min
            </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
