import Hero from '../components/Hero'
import Section from '../components/Section'

export default function Home() {
  return (
    <div>
      <Hero />
      <Section kicker="Membership" title="Choose a clear, modern way to fly" subdued>
        <div className="grid md:grid-cols-3 gap-6">
          {[{name:'Foundational',desc:'Flexible entry into private travel'}, {name:'Signature',desc:'Added comfort and predictable access'}, {name:'Premier',desc:'Maximum certainty and elevated perks'}].map((t)=> (
            <div key={t.name} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
              <div className="text-xs uppercase tracking-wider text-slate-500">Tier</div>
              <h3 className="text-xl font-semibold mt-1">{t.name}</h3>
              <p className="text-slate-600 mt-2">{t.desc}</p>
              <a href="/membership" className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:underline">View details →</a>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Experience" title="Client-first travel, from request to landing">
        <div className="grid md:grid-cols-4 gap-6">
          {["Request & confirm","Fly with confidence","Onboard essentials","Concierge support"].map((step, i)=> (
            <div key={step} className="p-6 border border-slate-200 rounded-xl">
              <div className="text-xs text-slate-500">Step {i+1}</div>
              <h3 className="font-medium mt-1">{step}</h3>
              <p className="text-slate-600 mt-2">Placeholder description of process step and what to expect.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Accessibility" title="Mobility-friendly by design" subdued>
        <div className="grid md:grid-cols-3 gap-6">
          {["Ramp solutions","Boarding support","Crew preparedness"].map((item)=> (
            <div key={item} className="p-6 border border-slate-200 rounded-xl">
              <h3 className="font-medium">{item}</h3>
              <p className="text-slate-600 mt-2">Placeholder text about how we consider mobility and comfort for all travelers.</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
