import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import data from "../../data/blogData.json";

export default function BlogIndex() {
  const [params] = useSearchParams();
  const q = params.get("q")?.toLowerCase() || "";
  const category = params.get("category");
  const tag = params.get("tag");

  const filtered = useMemo(() => {
    let list = data.posts;
    if (q) {
      list = list.filter(p =>
        [p.title, p.excerpt, ...(p.content || [])].join(" ").toLowerCase().includes(q)
      );
    }
    if (category) list = list.filter(p => p.categories.includes(category));
    if (tag) list = list.filter(p => p.tags.includes(tag));
    return list;
  }, [q, category, tag]);

  const showFeaturedFirst = !q && !category && !tag;
  const featured = data.posts.find(p => p.id === "consulted-admitting");

  return (
    <div>
      {showFeaturedFirst && featured ? (
        <Article post={featured} />
      ) : filtered.length ? (
        <div className="space-y-8">
          {filtered.map(p => <Article key={p.id} post={p} compact />)}
        </div>
      ) : (
        <div className="p-6 text-slate-400">No posts found.</div>
      )}
    </div>
  );
}

function Article({ post, compact }) {
  return (
    <div className="overflow-hidden">
      {post.image ? (
        <img src={post.image} alt="" className="w-full h-64 object-cover mb-6" />
      ) : null}

      <div className="">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.commentsCount} comments</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <Link to={`/blog/${post.id}`} className="hover:text-indigo-400">
            {post.title}
          </Link>
        </h2>

        <p className="text-slate-300">{post.excerpt}</p>

        {!compact && (
          <>
            {post.content.map((para, i) => (
              <p key={i} className="text-slate-300 mt-3 leading-7">
                {para}
              </p>
            ))}

            {post.bulletPoints?.length ? (
              <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-300">
                {post.bulletPoints.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map(t => (
                <span
                  key={t}
                  className="text-xs text-indigo-200 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
