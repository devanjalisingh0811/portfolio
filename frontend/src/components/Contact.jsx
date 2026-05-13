import { SOCIAL_LINKS } from '../config/index.js'
import './Contact.css'

const CONTACT_ITEMS = [
  { label: 'GitHub',           href: SOCIAL_LINKS.github,   desc: '@LondheShubham153' },
  { label: 'LinkedIn',         href: SOCIAL_LINKS.linkedin,  desc: 'in/shubhamlondhe1996' },
  { label: 'YouTube',          href: SOCIAL_LINKS.youtube,   desc: '@TrainWithShubham' },
  { label: 'Website',          href: SOCIAL_LINKS.website,   desc: 'trainwithshubham.com' },
]

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Reach out via any of the channels below. A contact form will be available in Phase 2.
      </p>
      <div className="contact-grid">
        {CONTACT_ITEMS.map(({ label, href, desc }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card">
            <span className="contact-label">{label}</span>
            <span className="contact-desc">{desc}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
