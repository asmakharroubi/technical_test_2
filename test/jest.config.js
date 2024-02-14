module.exports = {
  
  testMatch: ["<rootDir>/src/tests/.test.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageReporters: ["json", "lcov", "text", "clover"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/jest.config.js",
    "/babel.config.js",
  ],
};
