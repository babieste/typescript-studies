/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testMatch: ["**/src/**/*.spec.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["*.ts"],
  coverageDirectory: "../coverage",
  rootDir: ".",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
