
module.exports = {
  extends: ['next/core-web-vitals'],
  ignorePatterns: ['**/.next/**', '**/node_modules/**'],
  root: true,
  settings: {
    next: {
      rootDir: ['basics/*/', 'dashboard/*/', 'seo/'],
    },
  },
};