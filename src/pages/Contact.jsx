import Section from '../components/Section'

export default function Contact() {
  return (
    <div id="contact">
      <Section title="Contact" kicker="We’ll follow up promptly">
        <form className="max-w-xl grid gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Phone</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="(000) 000-0000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" placeholder="Tell us about your travel needs (placeholder)"></textarea>
          </div>
          <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-slate-800">Send</button>
        </form>
      </Section>
    </div>
  )
}
