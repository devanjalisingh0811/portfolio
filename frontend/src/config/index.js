export const GITHUB_USERNAME = 'LondheShubham153';

export const FEATURED_REPOS = [
  '90DaysOfDevOps',
  'kubestarter',
  'Shell-Scripting-For-DevOps',
  'TWSThreeTierAppChallenge',
  'kubernetes-in-one-shot',
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
  github:   'https://github.com/LondheShubham153',
  linkedin: 'https://www.linkedin.com/in/shubhamlondhe1996',
  youtube:  'https://www.youtube.com/@TrainWithShubham',
  website:  'https://trainwithshubham.com',
};

// Phase 2: set VITE_API_BASE=/api in .env to route through Go backend
export const API_BASE = import.meta.env.VITE_API_BASE || '';

export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '';
