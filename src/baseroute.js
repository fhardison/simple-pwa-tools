let basename = 'simple-pwa-tools';

if (process.env.GITHUB_PAGES) {
  basename = `/${process.env.GITHUB_PAGES}`;
}

export default basename;