import Section from '../components/Section'

export default function About() {
  return (
    <div>
      <Section title="About" kicker="Mission, philosophy, safety">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold">Mission</h3>
            <p className="text-slate-600 mt-2">We provide a clear, dependable path to private aviation with a focus on comfort and responsible care. Original placeholder language only.</p>
            <h3 className="text-xl font-semibold mt-6">Philosophy</h3>
            <p className="text-slate-600 mt-2">Understated service, disciplined planning, and transparent expectations. Replace with your own positioning.</p>
            <h3 className="text-xl font-semibold mt-6">Safety Mindset</h3>
            <p className="text-slate-600 mt-2">We align with operators that meet rigorous standards. This is generic placeholder copy — add your audited criteria and protocols.</p>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" alt="Abstract aviation graphic" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </div>
      </Section>
    </div>
  )
}
