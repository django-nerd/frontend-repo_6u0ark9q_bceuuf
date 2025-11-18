import Section from '../components/Section'

const categories = [
  {
    name: 'Light Jet',
    img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1600&auto=format&fit=crop',
    desc: 'Ideal for short regional trips with efficient cabin layouts.',
    bullets: ['Capacity: 4–6 travelers', 'Range: ~1,000–1,500 miles', 'Comfort: Compact seating, light catering']
  },
  {
    name: 'Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop',
    desc: 'Balanced range and comfort for frequent business routes.',
    bullets: ['Capacity: 6–8 travelers', 'Range: ~2,000–2,500 miles', 'Comfort: Roomier cabin, added storage']
  },
  {
    name: 'Super Mid-Size Jet',
    img: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=1600&auto=format&fit=crop',
    desc: 'Longer legs and upgraded amenities for cross-country trips.',
    bullets: ['Capacity: 8–9 travelers', 'Range: ~3,000+ miles', 'Comfort: Enhanced cabin features']
  },
  {
    name: 'Large Cabin Jet',
    img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop',
    desc: 'Spacious interiors and extended range for global travel.',
    bullets: ['Capacity: 10–14 travelers', 'Range: Intercontinental', 'Comfort: Stand-up cabin, premium service']
  },
]

export default function Aircraft() {
  return (
    <div>
      <Section title="Aircraft Access" kicker="General categories only">
        <p className="text-slate-600 max-w-2xl">Generic, non-branded categories. Replace images and details as needed. No fleet names, models, or partners referenced.</p>
      </Section>

      <Section subdued>
        <div className="grid gap-8">
          {categories.map((c)=> (
            <div key={c.name} className="grid md:grid-cols-2 gap-6 items-center">
              <div className="overflow-hidden rounded-xl">
                <img src={c.img} alt={c.name} className="w-full h-64 object-cover" loading="lazy" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{c.name}</h3>
                <p className="text-slate-600 mt-2">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                  {c.bullets.map((b)=> <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
