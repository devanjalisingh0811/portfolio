# Portfolio Tasks

## Phase 1 — Frontend + Docker

- [x] Scaffold project structure
- [x] Create React Vite app (components, hooks, config)
- [x] Hero section
- [x] Projects section (GitHub API, client-side)
- [x] Skills section
- [x] Contact section
- [x] Docker multi-stage build + Nginx config
- [x] docker-compose.yml (Phase 1)
- [x] docker-compose stubs (Phase 2 & 3)
- [x] ADRs written
- [ ] `npm install && npm run build` — verify local build
- [ ] `docker-compose up --build` — verify container runs
- [ ] ngrok verification (public URL loads portfolio)
- [ ] Responsive layout check (mobile viewport)

## Phase 2 — Go Backend (planned)

- [ ] Go module init in `backend/` (Gin or Chi)
- [ ] `/api/repos` endpoint — GitHub API proxy with in-memory caching
- [ ] `/api/contact` endpoint — email or webhook forwarding
- [ ] Update `docker-compose.phase2.yml` → `docker-compose.yml`
- [ ] Uncomment Nginx `/api/` proxy block in `nginx.conf`
- [ ] Update `useGitHubRepos.js` to call `/api/repos` instead of GitHub directly
- [ ] ADR-005 updated with final Go implementation details

## Phase 3 — Database (planned)

- [ ] Add PostgreSQL service to compose
- [ ] Go DB connection with `pgx`
- [ ] Schema: `contacts` table, `visitors` table
- [ ] Backend persists contact form submissions to DB
- [ ] Optional: admin view for contact entries
- [ ] ADR written for DB choice
