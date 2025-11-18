export default function Section({ kicker, title, children, subdued=false }) {
  return (
    <section className={`py-20 ${subdued ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          {kicker && <p className="text-xs uppercase tracking-wider text-slate-500">{kicker}</p>}
          {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mt-2">{title}</h2>}
        </div>
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}
