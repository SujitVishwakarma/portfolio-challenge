import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import data from "../../data/blogData.json";
import SearchBox from "./SearchBox";
import ListBox from "./ListBox";

export default function Sidebar() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const posts = data.posts;

  const recent = useMemo(() => [...posts].slice(-5).reverse(), [posts]);

  const categories = useMemo(() => {
    const set = new Set();
    posts.forEach(p => p.categories.forEach(c => set.add(c)));
    return [...set].sort();
  }, [posts]);

  const tags = useMemo(() => {
    const set = new Set();
    posts.forEach(p => p.tags.forEach(t => set.add(t)));
    return [...set].sort();
  }, [posts]);

  const goToFilter = (key, value) => {
    const next = new URLSearchParams(params.toString());
    next.set(key, value);
    next.delete("q");
    navigate({ pathname: "/blog", search: next.toString() });
  };

  const openPost = (id) => navigate(`/blog/${id}`);

  return (
    <aside className="space-y-4">
      <SearchBox />

      <ListBox title="RECENT POSTS">
        <div className="flex flex-col gap-3 py-4">
          {recent.map(p => (
            <button
              key={p.id}
              onClick={() => openPost(p.id)}
              className="text-left text-slate-200 hover:text-indigo-400 transition-colors"
            >
              {p.title}
            </button>
          ))}
        </div>
      </ListBox>

      <ListBox title="CATEGORIES">
        <div className="flex flex-wrap gap-2 py-4">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => goToFilter("category", c)}
              className="px-3 py-1.5 rounded-2xl border border-zinc-700 bg-zinc-850/50 text-slate-300 hover:text-white hover:border-slate-500 text-xs"
            >
              {c}
            </button>
          ))}
        </div>
      </ListBox>

      <ListBox title="TAGS">
        <div className="flex flex-wrap gap-2 py-4">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => goToFilter("tag", t)}
              className="px-3 py-1.5 rounded-2xl border border-zinc-700 bg-zinc-850/50 text-slate-300 hover:text-white hover:border-slate-500 text-xs"
            >
              {t}
            </button>
          ))}
        </div>
      </ListBox>
    </aside>
  );
}
