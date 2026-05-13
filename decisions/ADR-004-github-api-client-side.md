# ADR-004: Client-Side GitHub API Calls in Phase 1

- **Status:** Accepted
- **Date:** 2026-05-13

## Context

The Projects section needs to display GitHub repos (stars, forks, language, description). In Phase 1 there is no backend. We can either: (a) hard-code repo data, (b) call the GitHub REST API directly from the browser, or (c) fetch at build time (SSG).

## Decision

Call the **GitHub REST API directly from the browser** using a custom React hook (`useGitHubRepos`).

- Endpoint: `https://api.github.com/users/LondheShubham153/repos?sort=stars&per_page=20`
- No authentication token — public repos, unauthenticated rate limit is 60 req/hr (sufficient for a portfolio).
- Data is fetched on component mount; a loading skeleton is shown while pending.

## Consequences

- No build-time complexity; repos always reflect current GitHub state.
- Rate limit is low but acceptable (portfolio traffic, not high-volume).
- CORS is allowed by GitHub's API for browser requests.
- In Phase 2, `useGitHubRepos` switches its fetch target from `https://api.github.com/...` to `/api/repos` by checking `import.meta.env.VITE_API_BASE`. The Go backend can cache responses and use a token to raise the rate limit.

## Phase Impact

- **Phase 1:** Direct browser → GitHub API.
- **Phase 2:** Browser → Nginx → Go backend → GitHub API (with caching + optional token).
