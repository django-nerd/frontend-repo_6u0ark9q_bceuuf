import Section from '../components/Section'

export default function Accessibility() {
  return (
    <div>
      <Section title="Accessibility & Mobility" kicker="Designed with care">
        <p className="text-slate-600 max-w-2xl">We prioritize mobility-friendly solutions from ground to cabin. All content below is placeholder and intended to be customized to your standards.</p>
      </Section>

      <Section subdued>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title:'Ramp solutions', body:'Coordination for ramp and lift access where available. Placeholder.'}, {title:'Boarding support', body:'Assistance options tailored to mobility needs. Placeholder.'}, {title:'Crew preparedness', body:'Crew briefings for comfort and safety considerations. Placeholder.'}, {title:'Cabin comfort', body:'Seating considerations and amenities planning. Placeholder.'}].map((c)=> (
            <div key={c.title} className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-slate-600 mt-2">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
