# ADR-005: Go (Gin/Chi) Backend for Phase 2

- **Status:** Planned
- **Date:** 2026-05-13

## Context

Phase 2 requires a backend API to proxy GitHub data (with caching), handle contact form submissions, and later connect to a database in Phase 3. We evaluated Node.js/Express, Python FastAPI, and Go (Gin/Chi).

## Decision

Use **Go with the Chi router** for the Phase 2 backend.

Rationale:
- Compiles to a single static binary — fits well in a minimal Docker image (`FROM scratch` or `alpine`).
- Chi is lightweight and idiomatic; no magic, easy to read for future contributors.
- Aligns with the user's DevOps background (Go is prevalent in the CNCF ecosystem: Kubernetes, Terraform, etc.).
- Fast startup time — important for Docker container cold starts.

Planned endpoints:
- `GET /api/repos` — proxy to GitHub API, in-memory cache with 5-min TTL
- `POST /api/contact` — forward form submission to email/webhook
- `GET /api/health` — liveness probe for Docker health check

## Consequences

- Adds a second build stage and container to the compose setup.
- Go module will live in `backend/` with its own `Dockerfile`.
- `pgx` will be used for Phase 3 PostgreSQL connectivity (already idiomatic in Go).

## Phase Impact

- **Phase 2:** `backend/` filled with Go code; `docker-compose.phase2.yml` promoted.
- **Phase 3:** DB connection added to Go backend; no frontend or Nginx changes.
