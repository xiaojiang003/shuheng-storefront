import { BLOG_POSTS } from '@/data/blogPosts';
import { Link, Navigate, useParams } from 'react-router-dom';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="container-content max-w-3xl py-10">
      <title>{post.title} — Shuheng Blog</title>
      <Link to="/blog" className="text-sm text-brand underline">← Back to blog</Link>
      <time className="mt-4 block text-sm text-muted" dateTime={post.date}>{post.date}</time>
      <h1 className="mt-2 text-3xl font-bold text-brand">{post.title}</h1>
      <div className="mt-6 aspect-[21/9] overflow-hidden rounded-card bg-surface-alt">
        <img
          src={post.coverImage}
          alt=""
          width={960}
          height={411}
          className="size-full object-cover"
        />
      </div>
      <div className="mt-8 space-y-4 text-muted">
        {post.body.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>
      {post.slug === 'how-to-measure-hat-size' && (
        <p className="mt-8">
          <Link to="/sizing-guide" className="text-brand underline">View full size mapping table →</Link>
        </p>
      )}
    </article>
  );
}
