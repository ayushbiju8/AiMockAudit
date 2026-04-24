import { useState } from "react";
import { runMockAudit } from "./utils/auditModel.js";
import Header from "./components/Header";
import AuditForm from "./components/AuditForm";
import AuditResults from "./components/AuditResults";

export default function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleAudit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return setError("Enter a production URL to begin analysis.");
    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const data = await runMockAudit(url);
      setResult(data);
    } catch (err) {
      setError("Analysis failed. Ensure the endpoint is reachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto py-20 px-6">
        
        <div className="mb-20 text-center space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter text-white">
            Evaluate your <span className="text-[#666]">AI Visibility.</span>
          </h1>
          <p className="text-[#888] text-lg max-w-xl mx-auto font-medium">
            Analyze structural blockers that prevent LLM agents from correctly indexing your web properties.
          </p>
        </div>

        <AuditForm 
          url={url} 
          setUrl={setUrl} 
          loading={loading} 
          handleAudit={handleAudit} 
        />

        {error && <p className="mt-4 text-center text-red-500 text-xs font-mono">{error}</p>}

        {loading && (
          <div className="max-w-3xl mx-auto h-64 bento-card relative overflow-hidden flex flex-col items-center justify-center space-y-4">
             <div className="scan-line" />
             <div className="w-12 h-12 border border-[#333] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
             </div>
             <p className="text-[10px] font-mono text-[#444] tracking-[0.3em] animate-pulse">EXECUTING NEURAL SCAN v2.4</p>
          </div>
        )}

        {result && !loading && <AuditResults result={result} />}

        <footer className="mt-40 border-t border-[#1A1A1A] pt-12 text-[#333] flex justify-between items-start font-mono text-[10px]">
          <div className="space-y-1">
            <p>&copy; Ayush Biju</p>
          </div>
          <div className="flex gap-6 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer select-none">Status: Nominal</span>
            <span className="hover:text-white cursor-pointer select-none">Latency: 14ms</span>
          </div>
        </footer>

      </main>
    </div>
  );
}