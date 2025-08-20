import { useParams } from "react-router-dom";
import data from "../../data/blogData.json";

export default function BlogPost() {
  const { id } = useParams();
  const post = data.posts.find((p) => p.id === id) || data.posts[0];

  return (
    <article className=" rounded-xl overflow-hidden">
      {post.image ? (
        <img
          src={post.image}
          alt=""
          className="w-full h-80 max-w-xl object-cover pb-10"
        />
      ) : null}

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.commentsCount} comments</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-3xl font-bold pb-6 uppercase">{post.title}</h2>
        <p className="text-slate-300">{post.excerpt}</p>

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
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-2 rounded-full bg-primary-cardClr border border-primary-btnClr text-white shadow"
            >
              {t}
            </span>
          ))}
        </div>
        
      </div>
    </article>
  );
}
