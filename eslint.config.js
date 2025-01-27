// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  // Configures for antfu's config
  {
    react: true,
    css: true,
    html: true,
    ignores: [
      '**/dist/',
      '**/temp/',
      'ai-research/',
      'apps/backoffice/src/routeTree.gen.ts',
    ],
  },
  // From the second arguments they are ESLint Flat Configs
  // Careful, antfu renames some plugins for consistency https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming
  {
    files: ['apps/api/**/*.ts', 'apps/api/**/*.json'],
    rules: {
      'ts/consistent-type-imports': 'off',
      'node/prefer-global/process': ['error', 'always'],
    },
  },
  {
    files: ['apps/backoffice/**/*.ts', 'apps/backoffice/**/*.json'],
  },
  {
    files: ['packages/dtos/**/*.ts', 'packages/dtos/**/*.json'],
  },
)

