// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js'
  ],
  notify: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js}'
  ],
  testRegex: '(\\.(test|spec))\\.(js)$',
  coverageThreshold: {
    'global': {
      'branches': 95,
      'functions': 97,
      'lines': 97.9,
      'statements': 97.9
    }
  }
};
