import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-fixed-jsdom",
  coverageReporters: ["json", "text", "lcov", "clover", "json-summary"],
  testPathIgnorePatterns: ["<rootDir>/tests/", "<rootDir>/tests-examples/"],
  // 테스트 전에 실행할 설정 파일을 지정
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
