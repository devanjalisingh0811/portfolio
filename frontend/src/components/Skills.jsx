import { SKILLS } from '../config/index.js'
import './Skills.css'

const CATEGORY_LABELS = {
  containers:    'Containers & Orchestration',
  iac:           'Infrastructure as Code',
  cloud:         'Cloud Platforms',
  languages:     'Languages',
  cicd:          'CI / CD',
  observability: 'Observability',
}

export default function Skills() {
  const grouped = SKILLS.reduce((acc, skill) => {
    const cat = skill.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-groups">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="skills-group">
            <h3 className="skills-group-title">{CATEGORY_LABELS[cat] || cat}</h3>
            <div className="skills-tags">
              {items.map(({ name }) => (
                <span key={name} className="skill-tag">{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
