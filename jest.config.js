/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // testMatch: ["**/test/**/*.test.js"],
  // testEnvironment: "node",
  // preset: "ts-jest",
  // because ts-jest is too slow
  // globals: {
  //   "ts-jest": {
  //     isolatedModules: true
  //   }
  // }
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  }
};
