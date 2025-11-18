export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="w-8 h-8 rounded-full bg-slate-900" aria-hidden="true" />
          <p className="text-sm text-slate-600 max-w-xs">A modern private aviation membership with a focus on clarity, comfort, and dependable service. All content is placeholder.</p>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900 mb-3">Company</p>
          <ul className="space-y-2">
            <li><a className="hover:text-slate-900" href="/about">About</a></li>
            <li><a className="hover:text-slate-900" href="/accessibility">Accessibility</a></li>
            <li><a className="hover:text-slate-900" href="/legal">Legal</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-medium text-slate-900 mb-3">Contact</p>
          <ul className="space-y-2">
            <li>info@exampleair.com</li>
            <li>(000) 000-0000</li>
            <li>123 Placeholder Ave, Suite 100</li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Aurelius Air — Placeholder site</div>
    </footer>
  )
}
