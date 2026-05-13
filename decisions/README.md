# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) that document every significant design choice made in the portfolio project. Each ADR captures context, the decision taken, and its consequences across the three phases.

## Index

| ADR | Title | Status | One-line summary |
|-----|-------|--------|-----------------|
| [ADR-001](ADR-001-frontend-stack.md) | React (Vite) as Frontend Stack | Accepted | React 18 + Vite chosen over plain HTML and Vue 3 for its component model and fast HMR |
| [ADR-002](ADR-002-docker-nginx.md) | Multi-Stage Docker Build with Nginx | Accepted | Two-stage Dockerfile (Node build → Nginx serve) keeps the final image ~25 MB with no Node runtime |
| [ADR-003](ADR-003-phase-architecture.md) | Phase-Wise Architecture | Accepted | Project split into three independently-runnable phases with explicit seams (env var, nginx block, compose file) |
| [ADR-004](ADR-004-github-api-client-side.md) | Client-Side GitHub API Calls in Phase 1 | Accepted | Browser calls GitHub REST API directly in Phase 1; hook switches to Go backend in Phase 2 via `VITE_API_BASE` |
| [ADR-005](ADR-005-go-backend-phase2.md) | Go (Chi) Backend for Phase 2 | Planned | Go + Chi chosen for its single-binary output, CNCF alignment, and fast cold starts in Docker |

## How to Add a New ADR

1. Copy an existing ADR file and name it `ADR-00N-short-title.md`.
2. Fill in **Context**, **Decision**, **Consequences**, and **Phase Impact**.
3. Set **Status** to one of: `Proposed` | `Accepted` | `Planned` | `Deprecated` | `Superseded by ADR-00N`.
4. Add a row to the index table above.