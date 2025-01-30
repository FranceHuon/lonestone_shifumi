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
      'apps/web/src/routeTree.gen.ts',
      'apps/web/src/components/ui/color-mode.tsx',
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
    files: ['apps/web/**/*.ts', 'apps/web/**/*.json'],
  },
  {
    files: ['packages/dtos/**/*.ts', 'packages/dtos/**/*.json'],
  },
)
