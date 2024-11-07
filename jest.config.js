/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["*.ts"],
  coverageDirectory: "../coverage",
  rootDir: "src",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
