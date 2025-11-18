export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1759614581731-4c7090648de0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcml2YXRlJTIwamV0JTIwcnVud2F5fGVufDB8MHx8fDE3NjM1MDc0OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Private jet runway" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl">Private aviation, simplified for modern leaders.</h1>
        <p className="text-slate-200 mt-6 max-w-xl">A refined, membership-based way to fly. Original content, placeholder details, and a clean, distraction-free design.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/membership" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-100">Explore Membership</a>
          <a href="/contact" className="inline-flex items-center rounded-full bg-slate-900/70 text-white ring-1 ring-white/20 px-5 py-2.5 text-sm font-medium hover:bg-slate-800/70">Inquire</a>
        </div>
      </div>
    </section>
  )
}
