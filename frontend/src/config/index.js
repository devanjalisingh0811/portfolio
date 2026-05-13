export const GITHUB_USERNAME = 'devanjalisingh0811';

// Showcase repos — update this list as projects are created on GitHub.
// Suggested DevOps projects to add (see issue #1):
//   cicd-pipeline-demo   — GitHub Actions / Jenkins CI/CD workflow
//   k8s-manifests        — Kubernetes Deployments, Services, Ingress, HPA
//   terraform-infra      — Terraform IaC for AWS/GCP/Azure
//   monitoring-stack     — Prometheus + Grafana + Alertmanager in Docker Compose
//   go-microservice      — Go REST API with health checks and structured logging
//   ansible-playbooks    — Ansible configuration management
//   log-aggregation      — ELK / Loki + Grafana centralized logging
export const FEATURED_REPOS = [
  'portfolio',
];

export const SKILLS = [
  { name: 'Docker',          category: 'containers' },
  { name: 'Kubernetes',      category: 'containers' },
  { name: 'Terraform',       category: 'iac' },
  { name: 'Ansible',         category: 'iac' },
  { name: 'AWS',             category: 'cloud' },
  { name: 'GCP',             category: 'cloud' },
  { name: 'Python',          category: 'languages' },
  { name: 'Go',              category: 'languages' },
  { name: 'Shell',           category: 'languages' },
  { name: 'Jenkins',         category: 'cicd' },
  { name: 'GitHub Actions',  category: 'cicd' },
  { name: 'Prometheus',      category: 'observability' },
  { name: 'Grafana',         category: 'observability' },
];

export const SOCIAL_LINKS = {
  github:   'https://github.com/devanjalisingh0811',
  linkedin: 'https://www.linkedin.com/in/devanjalisingh0811',
};

// Phase 2: set VITE_API_BASE=/api in .env to route through Go backend
export const API_BASE = import.meta.env.VITE_API_BASE || '';

export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';