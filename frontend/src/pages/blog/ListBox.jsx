export default function ListBox({ title, children }) {
  return (
    <div className="relative rounded-2xl p-4 overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/bg3.png)` }}
      ></div>
      <div className="absolute inset-0 bg-primary-cardClr/60 group-hover:bg-primary-cardClr/40 transition-all"></div>
      <div className="relative text-sm font-semibold tracking-wide text-slate-200 mb-6">
        {title}
      </div>
      <div className="relative ">{children}</div>
    </div>
  );
}
