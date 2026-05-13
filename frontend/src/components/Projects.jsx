import { useGitHubRepos } from '../hooks/useGitHubRepos.js'
import { FEATURED_REPOS } from '../config/index.js'
import './Projects.css'

const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Shell: '#89e051',
  Go: '#00ADD8',
  Dockerfile: '#384d54',
  HCL: '#844FBA',
  default: '#8b949e',
}

function RepoCard({ repo }) {
  const langColor = LANG_COLORS[repo.language] || LANG_COLORS.default
  const isFeatured = FEATURED_REPOS.includes(repo.name)

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={`repo-card ${isFeatured ? 'repo-card--featured' : ''}`}
    >
      {isFeatured && <span className="repo-badge">Featured</span>}
      <h3 className="repo-name">{repo.name}</h3>
      {repo.description && <p className="repo-desc">{repo.description}</p>}
      <div className="repo-meta">
        {repo.language && (
          <span className="repo-lang">
            <span className="repo-lang-dot" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="repo-stat">&#9733; {repo.stargazers_count.toLocaleString()}</span>
        <span className="repo-stat">&#8728; {repo.forks_count.toLocaleString()}</span>
      </div>
    </a>
  )
}

function SkeletonCard() {
  return <div className="repo-card repo-card--skeleton" aria-hidden="true" />
}

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos()

  const sorted = [...repos].sort((a, b) => {
    const aF = FEATURED_REPOS.includes(a.name) ? 0 : 1
    const bF = FEATURED_REPOS.includes(b.name) ? 0 : 1
    return aF - bF || b.stargazers_count - a.stargazers_count
  })

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      {error && <p className="projects-error">Could not load repos: {error}</p>}
      <div className="projects-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : sorted.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
      {!loading && (
        <p className="projects-footer">
          <a href="https://github.com/LondheShubham153" target="_blank" rel="noreferrer">
            View all repositories on GitHub &rarr;
          </a>
        </p>
      )}
    </section>
  )
}
