
module.exports = {
    clearMocks: true,
  
    coverageDirectory: "./documentation/output/unitTest/challenge/",
    coverageReporters: [
      "lcov",
      "json",
      "html"
    ],
  
    reporters: [
      'default',
      ["./node_modules/jest-html-reporter", {
          pageTitle: "Unit Test Report - Addika Challenge Luis Colorado",
          outputPath:"./documentation/output/unitTest/challenge/unitTest.html"
      }]
    ],
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js, jsx}",
      "!**/node_modules/**",
      "!**/documentation/**",
      "!**/_test_/**",
      "!**/jest.config.js/**",
      "!**/index.js/**",
      "!**/.webpack/**",
      "!**/webpack.config.js/**",
      "!**/handler.js/**"
    ],
    testEnvironment: "node",
    testTimeout: 80000
  };
  