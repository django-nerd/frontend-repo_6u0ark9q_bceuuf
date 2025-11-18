import Section from '../components/Section'
import { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="text-slate-500">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="text-slate-600 mt-2">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  const faqs = [
    { q: 'Is this content final?', a: 'No. All copy is placeholder and should be replaced with your own language and policies.' },
    { q: 'Are aircraft or operators named?', a: 'No. This page uses generic categories only and avoids specific models or partners.' },
    { q: 'How do membership terms work?', a: 'This is placeholder. Replace with your own structure, pricing, and legal terms.' },
  ]

  return (
    <div>
      <Section title="FAQ" kicker="Simple answers">
        <div className="max-w-2xl">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>
    </div>
  )
}
