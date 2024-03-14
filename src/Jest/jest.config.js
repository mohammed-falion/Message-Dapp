module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
      "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
      }
  };
  