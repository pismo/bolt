const { defaults } = require('jest-config')

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/packages/**/*.{tsx,ts}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/*.stories.{tsx,ts}'
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  testRegex: '(spec|test).[jt]s?(x)$'
}
