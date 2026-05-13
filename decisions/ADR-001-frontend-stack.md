# ADR-001: React (Vite) as Frontend Stack

- **Status:** Accepted
- **Date:** 2026-05-13

## Context

The portfolio needs a frontend that can dynamically fetch GitHub repo data, render multiple sections (Hero, Projects, Skills, Contact), and be served as a static build via Nginx in Docker. We evaluated plain HTML/CSS/JS, React (Vite), and Vue 3 (Vite).

## Decision

Use **React 18 with Vite** as the frontend build tool.

## Consequences

- Requires a Node.js build step before the Docker image can be built (handled by multi-stage Dockerfile).
- Component model makes it easy to add new sections in later phases without refactoring.
- Vite's fast HMR speeds up local development.
- SPA routing requires Nginx `try_files` fallback (`/index.html`) — see ADR-002.

## Phase Impact

- **Phase 1:** React app is built to static files, served by Nginx. No server-side rendering needed.
- **Phase 2:** `useGitHubRepos` hook is updated to call the Go backend `/api/repos` instead of GitHub directly — no component changes needed.
- **Phase 3:** No frontend changes for DB integration; backend handles persistence transparently.
