import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/membership', label: 'Membership' },
  { to: '/aircraft', label: 'Aircraft Access' },
  { to: '/experience', label: 'Experience' },
  { to: '/accessibility', label: 'Accessibility' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-slate-900">Aurelius Air</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-slate-700 hover:text-slate-900 transition-colors ${isActive ? 'text-slate-900 font-medium' : ''}`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
          Inquire
        </a>
      </div>
    </header>
  )
}
