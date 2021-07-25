module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.{ts,tsx}'],
  rootDir: '../../',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jest-setup.ts'
  ],
  coverageDirectory: '<rootDir>/config/jest/coverage',
  moduleDirectories: ['node_modules', 'src']
}
