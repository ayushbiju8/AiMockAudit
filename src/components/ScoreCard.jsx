export default function ScoreCard({ score }) {
  const verdict = score > 70 ? "OPTIMIZED" : score > 40 ? "SUBOPTIMAL" : "CRITICAL";
  const color = score > 70 ? "text-emerald-500" : score > 40 ? "text-amber-500" : "text-rose-500";

  return (
    <div className="col-span-12 lg:col-span-4 bento-card p-10 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600/50" />
      <div className="relative w-40 h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="#111" strokeWidth="2" />
          <circle 
            cx="50" cy="50" r="46" fill="none" 
            stroke="#4F46E5" strokeWidth="4"
            strokeDasharray="289"
            strokeDashoffset={289 - (289 * score) / 100}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl font-black text-white">{score}</span>
          <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest">INDEX</span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div className="text-[10px] font-black text-[#555] uppercase tracking-[0.3em] mb-2">Verdict</div>
        <div className={`text-xl font-bold ${color}`}>
          {verdict}
        </div>
      </div>
    </div>
  );
}
