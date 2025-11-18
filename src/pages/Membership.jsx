import Section from '../components/Section'

const tiers = [
  {
    name: 'Foundational',
    summary: 'A practical entry point to private travel.',
    benefits: [
      'Essential booking access',
      'Transparent, placeholder pricing model',
      'Standard concierge touchpoints',
      'Original content — replace with real policy later'
    ],
  },
  {
    name: 'Signature',
    summary: 'Added comfort, planning certainty, and flexible terms.',
    benefits: [
      'Priority confirmations on core days',
      'Preferential terms and windowing',
      'Enhanced amenities selection',
      'Original content — customize to your needs'
    ],
  },
  {
    name: 'Premier',
    summary: 'Maximum certainty and tailored care.',
    benefits: [
      'Highest priority confirmations',
      'Wider network access windows',
      'Dedicated liaison for complex trips',
      'Original content — placeholder benefits'
    ],
  },
]

export default function Membership() {
  return (
    <div>
      <Section title="Membership" kicker="Original structure and copy">
        <p className="text-slate-600 max-w-2xl">Below are three placeholder tiers designed to show layout and hierarchy. Replace names and benefits with your own content. Nothing references competitors.</p>
      </Section>

      <Section subdued>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="border border-slate-200 rounded-xl p-6 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-slate-500">Tier</div>
              <h3 className="text-2xl font-semibold mt-1">{t.name}</h3>
              <p className="text-slate-600 mt-2">{t.summary}</p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                {t.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Request details</a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
