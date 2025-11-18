import Section from '../components/Section'

export default function Experience() {
  const items = [
    { title: 'Request & Confirm', body: 'Members request preferred timing and routing. We confirm within defined windows and provide clear options. Placeholder copy.' },
    { title: 'Booking & Details', body: 'We finalize timing, routing, and preferences. You receive a concise itinerary and contact details. Placeholder.' },
    { title: 'Onboard Experience', body: 'Quiet cabins, considered amenities, and attentive crews. Placeholder description only.' },
    { title: 'Concierge Support', body: 'Assistance before, during, and after each flight. Placeholder text.' },
  ]

  return (
    <div>
      <Section title="Experience" kicker="Linear, clear, minimal">
        <p className="text-slate-600 max-w-2xl">A straightforward outline of how members travel. Minimal transitions and clean layout, designed to be replaced with your real content.</p>
      </Section>

      <Section subdued>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((i, idx)=> (
            <div key={i.title} className="border border-slate-200 rounded-xl p-6">
              <div className="text-xs text-slate-500">Step {idx+1}</div>
              <h3 className="text-xl font-semibold mt-1">{i.title}</h3>
              <p className="text-slate-600 mt-2">{i.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
