import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    navigate({ pathname: "/blog", search: params.toString() });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-zinc-800/40 border border-none rounded-2xl p-3"
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          id="search"
          type="search"
          placeholder="Search here..."
          className="w-full bg-zinc-800/40 border border-zinc-700 rounded-lg px-3 py-2 pr-20 text-zinc-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-btnClr"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-primary-btnClr hover:bg-primary-cardClr text-white text-sm"
        >
          Search
        </button>
      </div>
    </form>
  );
}
