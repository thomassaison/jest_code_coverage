/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts"
    ],
    coveragePathIgnorePatterns: [
        "index.ts"
    ],
    "coverageReporters": ["json", "html"],
    // coverageThreshold: {
    //     global: {
    //         lines: 80,
    //     },
    // },
};