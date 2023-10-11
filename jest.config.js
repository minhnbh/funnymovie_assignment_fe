const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.base.json");

const exclusionPaths = [
  "/node_modules/",
  "<rootDir>/src/index.ts",
  "<rootDir>/src/index-build.tsx",
];

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  automock: false,
  resetMocks: false,
  watch: false,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileTransformer.config.js",
    "^.+\\.[t|j]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^axios$": "<rootDir>/node_modules/axios/dist/axios.js",
    "\\.(css|less|sass|scss)$": "jest-css-modules-transform",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  roots: ["<rootDir>/src/"],
  verbose: true,
  testTimeout: 2000,
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coverageReporters: ["html", "lcov"],
  testPathIgnorePatterns: exclusionPaths,
  coveragePathIgnorePatterns: exclusionPaths,
  moduleDirectories: ["node_modules"],
  maxWorkers: 2,
};
