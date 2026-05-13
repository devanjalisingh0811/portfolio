# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal DevOps portfolio site built in three phases. Phase 1 (current) is a React/Vite SPA served by Nginx in Docker. Phase 2 adds a Go/Chi backend API. Phase 3 adds PostgreSQL.

## Commands

All frontend commands run from `frontend/`:

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview the production build locally
```

Docker (from repo root):

```bash
docker-compose up --build          # Phase 1: frontend only, port 8080
ngrok http 8080                    # expose publicly for verification
```

## Architecture

The project is split into three phases with explicit seams so each phase is independently runnable.

### Phase 1 (active)
- `frontend/` — React 18 + Vite SPA. No router; single-page with scrolling sections.
- `frontend/Dockerfile` — multi-stage build: Node 20 builds, Nginx Alpine serves.
- `frontend/nginx.conf` — SPA fallback + gzip. The `/api/` proxy block is commented out (Phase 2).
- `docker-compose.yml` — single `frontend` service on port 8080.

### Phase 2 seams (planned — `backend/` is a `.gitkeep` placeholder)
- Set `VITE_API_BASE=/api` in `frontend/.env` → `useGitHubRepos.js` switches from direct GitHub API to Go backend.
- Uncomment the `/api/` proxy block in `frontend/nginx.conf`.
- Replace `docker-compose.yml` with `docker-compose.phase2.yml`.
- Backend: Go + Chi, endpoints `GET /api/repos`, `POST /api/contact`, `GET /api/health`.

### Phase 3 seams (planned)
- Replace compose with `docker-compose.phase3.yml` which adds PostgreSQL 16.
- Backend connects via `pgx`; schema: `contacts` + `visitors` tables.
- Env vars: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (see `.env.example`).

### Key files
- `frontend/src/config/index.js` — single source of truth for `GITHUB_USERNAME`, `FEATURED_REPOS`, `SKILLS`, `SOCIAL_LINKS`, and `API_BASE`.
- `frontend/src/hooks/useGitHubRepos.js` — fetches repos; Phase 1 calls GitHub directly, Phase 2 calls `/api/repos`.
- `decisions/` — ADRs for all major choices (stack, Docker/Nginx, phase architecture, GitHub API strategy, Go backend).

## Environment Variables

Phase 1 requires none. Copy `.env.example` and uncomment as phases are activated:

| Var | Phase | Purpose |
|-----|-------|---------|
| `VITE_API_BASE` | 2 | Set to `/api` to route through Go backend |
| `GITHUB_TOKEN` | 2 | Optional; raises GitHub rate limit to 5000/hr |
| `DB_PASSWORD` | 3 | Required for PostgreSQL |
| `DB_NAME`, `DB_USER`, `DB_HOST`, `DB_PORT` | 3 | DB connection (defaults in compose) |
