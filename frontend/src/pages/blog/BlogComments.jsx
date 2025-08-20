import React from "react";

const sampleComments = [
  {
    id: 1,
    name: "Jonathan Doe",
    date: "25 March 2022",
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "Sit amet luctus fav venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non. Praesent in elementum lobortis eu volutpat odio facilisis.",
  },
  {
    id: 2,
    name: "Jonathan Doe",
    date: "25 March 2022",
    avatar: "https://i.pravatar.cc/100?img=15",
    text: "Sit amet luctus fav venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus odio facilisis mauris sit.",
  },
];

export default function BlogComments({
  comments = sampleComments,
  onReply,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    console.log("Form Submitted:", payload); // ✅ console log response
    onSubmit?.(payload);
    e.currentTarget.reset();
  };

  return (
    <section className="text-zinc-100 p-6 rounded-2xl relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/bg3.png)` }}
      ></div>
      <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>

      {/* Header */}
      <h3 className="relative text-lg font-semibold mb-4 z-10">
        {comments.length} Comment{comments.length !== 1 ? "s" : ""}
      </h3>

      {/* Comments list */}
      <ul className="relative space-y-6 z-10">
        {comments.map((c, idx) => (
          <li key={c.id} className={c.id === 2 ? "lg:pl-20" : ""}>
            <div className="flex items-start gap-4">
              <img
                src={c.avatar}
                alt={c.name}
                className={`rounded-full object-cover ${
                  idx === 0 ? "w-24 h-24" : "w-20 h-20"
                }`}
              />
              <div className="flex-1">
                <div className="text-[12px] text-indigo-400 mb-1">{c.date}</div>
                <div className="text-[17px] font-semibold">{c.name}</div>
                <p className="mt-1 text-zinc-300 leading-6">{c.text}</p>

                <button
                  onClick={() => {
                    console.log("Reply clicked:", c); 
                    onReply?.(c);
                  }}
                  className="mt-3 inline-flex items-center px-3 py-1.5 text-xs rounded-md bg-zinc-700/60 hover:bg-zinc-600/70 text-zinc-100 transition-colors"
                >
                  Reply
                </button>
              </div>
            </div>

            {/* Divider */}
            {idx !== comments.length - 1 && (
              <div className="mt-6 border-t border-zinc-700/60" />
            )}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="mt-6 border-t border-zinc-700/60 relative z-10" />

      {/* Leave a reply */}
      <div className="mt-8 relative z-10">
        <h4 className="text-xl font-semibold mb-4">Leave A Reply</h4>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 text-zinc-100 
                 placeholder:text-zinc-400 focus:outline-none 
                 focus:ring-2 focus:ring-zinc-500 
                 border border-zinc-600 shadow-md shadow-black/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 text-zinc-100 
                 placeholder:text-zinc-400 focus:outline-none 
                 focus:ring-2 focus:ring-zinc-500 
                 border border-zinc-600 shadow-md shadow-black/20"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message*"
            required
            className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 text-zinc-100 
                 placeholder:text-zinc-400 focus:outline-none 
                 focus:ring-2 focus:ring-zinc-500 
                 border border-zinc-600 shadow-md shadow-black/20"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-700/70 
                 hover:bg-zinc-600 text-zinc-100 font-medium 
                 transition-colors shadow-md shadow-black/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
