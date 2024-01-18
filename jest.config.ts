const config = {
  verbose: true,
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/enums/(.*)$': '<rootDir>/src/enums/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)s?$': ['@swc/jest'],
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
