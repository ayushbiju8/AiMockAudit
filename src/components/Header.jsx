export default function Header() {
  return (
    <nav className="h-16 border-b border-[#1A1A1A] flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center font-bold text-[10px] text-white">AI</div>
        <span className="font-semibold tracking-tight text-sm uppercase">Audit Engine</span>
      </div>
      <div className="flex gap-6 text-[11px] font-medium text-[#666] uppercase tracking-widest">
        <span className="hover:text-white cursor-pointer transition">Documentation</span>
        <span className="hover:text-white cursor-pointer transition">API</span>
      </div>
    </nav>
  );
}
