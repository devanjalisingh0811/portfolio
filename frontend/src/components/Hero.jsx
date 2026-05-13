import { SOCIAL_LINKS } from '../config/index.js'
import './Hero.css'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-avatar">SL</div>
      <div className="hero-content">
        <h1 className="hero-name">Shubham Londhe</h1>
        <p className="hero-tagline">
          Developer Advocate &amp; DevOps Educator &middot; TrainWithShubham
        </p>
        <p className="hero-bio">
          Helping freshers and professionals build careers in DevOps and Cloud Engineering.
          8+ years in development, platform engineering, and education. Based in Pune, India.
        </p>
        <div className="hero-links">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hero-link">
            GitHub
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hero-link">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="hero-link">
            YouTube
          </a>
          <a href={SOCIAL_LINKS.website} target="_blank" rel="noreferrer" className="hero-link hero-link--primary">
            TrainWithShubham
          </a>
        </div>
      </div>
    </section>
  )
}
