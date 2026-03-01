const tsconfig = require('../../../tsconfig.json');

module.exports = {
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.test.json',
      diagnostics: false
    }],
    '^.+\\.jsx?$': ['ts-jest', {
      tsconfig: './tsconfig.test.json',
      diagnostics: false
    }]
  },
  rootDir: '../../../',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  cacheDirectory: '<rootDir>/build/jest-cache',
  coverageDirectory: '<rootDir>/build/test-results/',
  testMatch: ['<rootDir>/src/test/javascript/spec/**/@(*.)@(spec.ts?(x))'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/test/javascript'
  ],
  moduleNameMapper: mapTypescriptAliasToJestAlias({
    '\\.(css|scss)$': 'identity-obj-proxy'
  }),
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './build/test-results/', outputName: 'TESTS-results-jest.xml' }]
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)'
  ],
  setupFiles: [
    '<rootDir>/src/test/javascript/spec/enzyme-setup.ts',
    '<rootDir>/src/test/javascript/spec/storage-mock.ts'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer']
};

function mapTypescriptAliasToJestAlias(alias = {}) {
  const jestAliases = { ...alias };
  if (!tsconfig.compilerOptions.paths) {
    return jestAliases;
  }
  Object.entries(tsconfig.compilerOptions.paths)
    .filter(([key, value]) => {
      if (value.length) {
        return true;
      }
      return false;
    })
    .map(([key, value]) => {
      const regexToReplace = /(.*)\/\*$/;
      const aliasKey = key.replace(regexToReplace, '$1/(.*)');
      const aliasValue = value[0].replace(regexToReplace, '$1/$$1');
      return [aliasKey, `<rootDir>/${aliasValue}`];
    })
    .reduce((aliases, [key, value]) => {
      aliases[key] = value;
      return aliases;
    }, jestAliases);
  return jestAliases;
}
