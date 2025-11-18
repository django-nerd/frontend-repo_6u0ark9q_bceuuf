export default function StyleGuide(){
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Style Guide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-medium">Colors</h3>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[['#0f172a','Slate 900'],['#1f2937','Gray 800'],['#ffffff','White'],['#cbd5e1','Slate 300'],['#e5e7eb','Gray 200'],['#f8fafc','Slate 50']].map(([hex,label])=> (
                <div key={hex} className="text-center">
                  <div className="h-12 rounded" style={{backgroundColor:hex}} />
                  <div className="text-xs mt-2 text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-medium">Typography</h3>
            <p className="mt-4 text-slate-600">Headings use a refined, sharp serif or high-contrast sans (placeholder). Body uses a clean sans serif for readability.</p>
            <div className="mt-4 space-y-2">
              <p className="text-3xl font-semibold">H1 — Confident headline</p>
              <p className="text-2xl font-semibold">H2 — Section header</p>
              <p className="text-xl font-medium">H3 — Subheading</p>
              <p className="text-slate-600">Body — Readable paragraph with comfortable line height.</p>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-medium">Components</h3>
            <div className="mt-4 space-x-3">
              <button className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Primary</button>
              <button className="rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50">Secondary</button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Card title","Another card"].map((t)=> (
                <div key={t} className="border border-slate-200 rounded-xl p-4">
                  <p className="font-medium">{t}</p>
                  <p className="text-slate-600 text-sm mt-1">Placeholder text for component preview.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
