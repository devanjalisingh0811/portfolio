# DevOps Portfolio

[![Docker](https://img.shields.io/badge/Docker-20.10+-blue?logo=docker)](https://www.docker.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?logo=nginx)](https://nginx.org/)
[![Go](https://img.shields.io/badge/Go-1.22-00ADD8?logo=go)](https://go.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)](https://www.postgresql.org/)

A personal DevOps portfolio site built in three incremental phases. Phase 1 (active) ships a React/Vite SPA served by Nginx inside Docker. Phase 2 adds a Go/Chi backend API. Phase 3 adds PostgreSQL persistence.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite 5 |
| Server | Nginx Alpine |
| Containerisation | Docker + Docker Compose |
| Backend (Phase 2) | Go 1.22 + Chi router |
| Database (Phase 3) | PostgreSQL 16 |
| Public tunnel | ngrok |

---

## Architecture — Phase Roadmap

```
Phase 1 (active)
┌────────────────────────────────┐
│  Browser                       │
│    │                           │
│    ▼                           │
│  Nginx :80  ──► /index.html    │
│  (Docker port 8080)            │
│    │                           │
│    └──► GitHub REST API        │
│         (client-side fetch)    │
└────────────────────────────────┘

Phase 2 (planned)
┌────────────────────────────────────────┐
│  Browser                               │
│    │                                   │
│    ▼                                   │
│  Nginx :80                             │
│    ├─ /          ──► React SPA         │
│    └─ /api/*     ──► Go backend :8081  │
│                       ├─ GET  /api/repos    │
│                       ├─ POST /api/contact  │
│                       └─ GET  /api/health   │
└────────────────────────────────────────┘

Phase 3 (planned)
┌───────────────────────────────────────────────┐
│  (Phase 2 stack)                              │
│    │                                          │
│    └──► Go backend ──► PostgreSQL 16 :5432    │
│                         tables: contacts,     │
│                                  visitors     │
└───────────────────────────────────────────────┘
```

---

## Quick Start

### Prerequisites
- Docker Desktop (or Docker Engine + Compose plugin)
- Node 20+ *(only for local dev without Docker)*

### Run with Docker (recommended)

```bash
git clone https://github.com/devanjalisingh0811/portfolio.git
cd portfolio
docker-compose up --build
# Open http://localhost:8080
```

To expose publicly via ngrok:

```bash
ngrok http 8080
```

### Local development (no Docker)

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

---

## Project Structure

```
portfolio/
├── frontend/               # React 18 + Vite SPA
│   ├── src/
│   │   ├── components/     # Hero, Navbar, Projects, Skills, Contact
│   │   ├── hooks/          # useGitHubRepos.js
│   │   ├── config/         # index.js — single source of truth
│   │   └── main.jsx
│   ├── Dockerfile          # Multi-stage: Node build → Nginx serve
│   └── nginx.conf          # SPA fallback + gzip (Phase 2 proxy commented)
├── backend/                # Placeholder (.gitkeep) — Go code goes here in Phase 2
├── decisions/              # Architecture Decision Records (ADRs)
├── docker-compose.yml      # Phase 1
├── docker-compose.phase2.yml  # Phase 2 (planned)
├── docker-compose.phase3.yml  # Phase 3 (planned)
└── .env.example            # Environment variable reference
```

---

## Environment Variables

Phase 1 requires no environment variables. Copy `.env.example` and uncomment variables as phases are activated.

| Variable | Phase | Purpose |
|----------|-------|---------|
| `VITE_API_BASE` | 2 | Set to `/api` to route frontend through Go backend |
| `GITHUB_TOKEN` | 2 | Optional — raises GitHub API rate limit to 5 000 req/hr |
| `DB_PASSWORD` | 3 | Required for PostgreSQL |
| `DB_NAME` | 3 | DB name (default: `portfolio`) |
| `DB_USER` | 3 | DB user (default: `portfolio`) |
| `DB_HOST` | 3 | DB host (default: `db`) |
| `DB_PORT` | 3 | DB port (default: `5432`) |

---

## Personalising the Site

All user-facing data lives in `frontend/src/config/index.js`. See [`frontend/README.md`](frontend/README.md) for a step-by-step guide.

---

## Architecture Decisions

All major decisions are documented as ADRs in [`decisions/`](decisions/README.md).

---

## Contributing

1. Fork the repo and create a branch: `git checkout -b feat/my-feature`
2. Make changes and test with `docker-compose up --build`
3. Open a pull request against `main`