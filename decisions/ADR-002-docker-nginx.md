# ADR-002: Multi-Stage Docker Build with Nginx

- **Status:** Accepted
- **Date:** 2026-05-13

## Context

The portfolio must run in a Docker container. We need a strategy to build the React app and serve the static output efficiently.

## Decision

Use a **multi-stage Dockerfile**: stage 1 (`node:20-alpine`) builds the Vite app, stage 2 (`nginx:alpine`) copies only the `dist/` output and serves it. Nginx is configured with an SPA fallback and a commented-out `/api/` proxy block for Phase 2.

## Consequences

- Final Docker image is small (~25MB) — only Nginx + static assets, no Node.js runtime.
- Build happens inside Docker, so local Node.js is not required to run the container.
- The commented Nginx `/api/` proxy block makes Phase 2 activation a one-line change.

## Phase Impact

- **Phase 1:** Single container, single `docker-compose.yml`.
- **Phase 2:** Uncomment the `/api/` proxy in `nginx.conf`; add `backend` service to compose.
- **Phase 3:** No Nginx changes; backend handles DB internally.
