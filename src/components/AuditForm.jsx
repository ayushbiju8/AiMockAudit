export default function AuditForm({ url, setUrl, loading, handleAudit }) {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <form onSubmit={handleAudit} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative flex items-center bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-2 focus-within:ring-1 focus-within:ring-[#333] transition-all">
          <div className="pl-4 text-[#444]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-site.com"
            className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-white font-mono text-sm placeholder:text-[#333]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#DDD] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? "ANALYZING..." : "RUN AUDIT"}
          </button>
        </div>
      </form>
    </div>
  );
}
