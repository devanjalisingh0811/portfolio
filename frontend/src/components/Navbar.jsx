import { useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="#about" className="navbar-brand">Shubham Londhe</a>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          </li>
        ))}

      </ul>
    </nav>
  )
}
