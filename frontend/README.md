# Frontend

React 18 + Vite SPA for the DevOps portfolio. In Phase 1 it is built to static files and served by Nginx inside Docker. No client-side router is used — the page is a single scroll with anchored sections.

---

## Component Tree

```
App.jsx
├── Navbar.jsx          — fixed top nav with section links
├── Hero.jsx            — name, tagline, social links
├── Projects.jsx        — GitHub repo cards (fetched via useGitHubRepos)
├── Skills.jsx          — skill badges grouped by category
└── Contact.jsx         — contact form (Phase 1: static / Phase 2: POST /api/contact)

hooks/
└── useGitHubRepos.js   — fetches repos from GitHub API (Phase 1) or Go backend (Phase 2)

config/
└── index.js            — single source of truth for all site-wide data
```

---

## Personalising the Site

All user-facing content is controlled from **`src/config/index.js`**. You should not need to edit any component files for a basic personalisation.

### 1. Change the GitHub username

```js
// src/config/index.js
export const GITHUB_USERNAME = 'your-github-username';
```

The `Projects` section will automatically fetch and display repos for the new username.

### 2. Pin specific repositories

```js
export const FEATURED_REPOS = [
  'repo-name-1',
  'repo-name-2',
  'repo-name-3',
];
```

Only repos whose names appear in this array are shown in the Projects section. Order is preserved.

### 3. Update skills

```js
export const SKILLS = [
  { name: 'Docker',     category: 'containers' },
  { name: 'Kubernetes', category: 'containers' },
  { name: 'AWS',        category: 'cloud' },
  // add or remove entries freely
];
```

Supported categories (used for grouping/colour in the Skills component):

| Category | Examples |
|----------|---------|
| `containers` | Docker, Kubernetes |
| `iac` | Terraform, Ansible |
| `cloud` | AWS, GCP, Azure |
| `languages` | Go, Python, Shell |
| `cicd` | GitHub Actions, Jenkins |
| `observability` | Prometheus, Grafana |

You can invent new categories — the component renders whatever string is provided.

### 4. Update social links

```js
export const SOCIAL_LINKS = {
  github:   'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  youtube:  'https://www.youtube.com/@your-channel',   // optional
  website:  'https://your-website.com',                 // optional
};
```

Remove any key you do not want displayed — the Hero component skips missing links.

---

## Commands

Run all commands from the `frontend/` directory.

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173 with HMR
npm run build        # production build → dist/
npm run preview      # serve the production build locally for smoke-testing
```

---

## Environment Variables

Create `frontend/.env` (gitignored) from `.env.example` at the repo root.

| Variable | Default | Purpose |
|----------|---------|---------|
| `VITE_API_BASE` | *(empty)* | Set to `/api` in Phase 2 to route through Go backend |
| `VITE_GITHUB_TOKEN` | *(empty)* | Optional PAT — raises unauthenticated rate limit (60/hr) to 5 000/hr |

In Phase 1 neither variable is required.

---

## How `useGitHubRepos` Switches Between Phases

```js
// src/hooks/useGitHubRepos.js (simplified)
const url = API_BASE
  ? `${API_BASE}/repos`                              // Phase 2: Go backend
  : `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=20`;
```

Setting `VITE_API_BASE=/api` in `.env` is the only change needed to activate the Phase 2 data path — no component edits required.

---

## Docker Build

The `Dockerfile` uses a two-stage build:

1. **Stage 1 — build** (`node:20-alpine`): runs `npm ci && npm run build`, producing `dist/`.
2. **Stage 2 — serve** (`nginx:alpine`): copies `dist/` into Nginx and applies `nginx.conf`.

Final image size is approximately 25 MB.