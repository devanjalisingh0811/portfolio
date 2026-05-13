import { useState, useEffect } from 'react';
import { GITHUB_USERNAME, API_BASE, GITHUB_TOKEN } from '../config/index.js';

export function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Phase 1: direct GitHub API  |  Phase 2: /api/repos via Go backend
    const url = API_BASE
      ? `${API_BASE}/repos`
      : `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=20`;

    const headers = GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {};

    fetch(url, { headers })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { repos, loading, error };
}
