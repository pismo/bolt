module.exports = {
  collectCoverage:true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/packages/**/*.{tsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/index.ts'
  ],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  rootDir: '.',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest'
  },
  testRegex: '(spec|test).[jt]s?(x)$'
};