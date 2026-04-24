import { useState } from "react";
import ScoreCard from "./ScoreCard";

export default function AuditResults({ result }) {
  const [copied, setCopied] = useState(false);

  const copyReport = () => {
    const report = `
AUDIT REPORT SUMMARY
--------------------
SCORE: ${result.score}/100
SEMANTIC RATING: ${Math.floor(result.score * 0.95)}%
STATUS: ${result.score > 60 ? "STABLE" : "FAIL"}

OBSERVATIONS:
${result.issues.map((issue, i) => `${i + 1}. ${issue}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div className="flex justify-end">
        <button
          onClick={copyReport}
          className="group flex items-center gap-2 px-4 py-2 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg hover:border-[#333] transition-all"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${copied ? 'bg-emerald-500' : 'bg-[#333]'} group-hover:scale-125 transition-all`} />
          <span className="text-[10px] font-black uppercase tracking-widest text-[#666] group-hover:text-white">
            {copied ? "COPIED TO CLIPBOARD" : "COPY REPORT FOR DEV TEAM"}
          </span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">

        <ScoreCard score={result.score} />

        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-6">
          <div className="col-span-2 bento-card p-8 space-y-4">
            <div className="text-[10px] font-black text-[#444] uppercase tracking-[0.3em]">Technical Overview</div>
            <p className="text-[#AAA] leading-relaxed">
              {result.score > 70
                ? "DOM structure is highly optimized. Crawler algorithms can efficiently map resource relationships and index primary content nodes with high accuracy."
                : result.score > 40
                  ? "Optimization flags detected in the rendering pipeline. Missing schema metadata and improper heading nesting are hindering full structural parsing."
                  : "Critical architectural barriers found. The current DOM tree is opaque to automated indexing protocols and requires immediate semantic refactoring."
              }
            </p>
          </div>

          <div className="bento-card p-6 flex flex-col justify-between">
            <div className="text-[10px] font-black text-[#444] uppercase tracking-[0.3em]">Indexability</div>
            <div className="text-3xl font-bold mt-4">{result.score > 60 ? "STABLE" : "FAIL"}</div>
            <div className="mt-2 w-full bg-[#111] h-1 rounded-full overflow-hidden">
              <div className="bg-[#333] h-full" style={{ width: `${result.score}%` }} />
            </div>
          </div>

          <div className="bento-card p-6 flex flex-col justify-between">
            <div className="text-[10px] font-black text-[#444] uppercase tracking-[0.3em]">Semantics</div>
            <div className="text-3xl font-bold mt-4">{Math.floor(result.score * 0.95)}%</div>
            <div className="mt-2 text-[10px] text-[#444] font-mono">SEMANTIC_INDEX_RATING</div>
          </div>
        </div>

        <div className="col-span-12 bento-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="text-[10px] font-black text-[#444] uppercase tracking-[0.3em]">System Observations ({result.issues.length})</div>
            <div className="h-px flex-1 mx-8 bg-[#1A1A1A]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.issues.map((issue, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-xl border border-[#111] bg-[#080808] hover:bg-[#0A0A0A] transition-colors group">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-indigo-500 transition-colors shrink-0" />
                <span className="text-sm text-[#888] group-hover:text-[#AAA] transition-colors tracking-tight">{issue}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


