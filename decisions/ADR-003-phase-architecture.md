# ADR-003: Phase-Wise Architecture

- **Status:** Accepted
- **Date:** 2026-05-13

## Context

The portfolio should be shippable now (Phase 1) but architected so that a backend and database can be added without rewrites. We need a clear contract between phases.

## Decision

Split the project into three phases with explicit seams:

| Phase | What's added | Compose file |
|-------|-------------|--------------|
| 1 | React + Nginx + Docker + ngrok | `docker-compose.yml` |
| 2 | Go (Gin/Chi) backend, `/api/*` endpoints | `docker-compose.phase2.yml` → promoted to default |
| 3 | PostgreSQL, DB-backed endpoints | `docker-compose.phase3.yml` → promoted to default |

Seams are defined by:
1. `useGitHubRepos.js` — a single `API_BASE` env var switches data source from GitHub directly to the Go backend.
2. `nginx.conf` — one commented block enables the `/api/` proxy.
3. `backend/` directory — currently a `.gitkeep` placeholder, gets filled in Phase 2.

## Consequences

- Each phase is independently runnable; earlier phases are not broken by later ones.
- Stub compose files serve as runnable documentation for future phases.

## Phase Impact

This ADR defines the phase contract itself — all other ADRs reference it.
