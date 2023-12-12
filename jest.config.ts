import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  roots: ['<rootDir>/src/'],
  verbose: true,
  testTimeout: 30000,
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/__mocks__/', '__utils__'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/__mocks__/fileTransformer.cjs'
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css)$': '<rootDir>/src/__tests__/__mocks__/styleMock.tsx'
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'testconfig.js',
    'package.json',
    'package-lock.json'
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    '<rootDir>/src/__tests__/__utils__/testHelpers.tsx'
  ]
};

export default config;
