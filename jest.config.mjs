export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  };  