const defaultConfig = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov"
  ],
  coverageThreshold: {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100

    },
    "maxWorkers": "50%",
    watchPathIgnorePatterns: [
      "node_modules"
    ],
    transformIgnorePatterns: [
      "node_modules"
    ]
  }
}

export default {
  projects: [
    {
    ...defaultConfig,
    testEnvironment: "node",
    displayName: "backend",
    collectCoverageFrom: [
      "server/",
      "!server/index.js"
    ],
    transformIgnorePatterns: [
      "node_modules",
          "public/"
    ],
    testMatch: [
      "**/test/**/server/**/*.test.js"
    ]
  },
    {
    ...defaultConfig,
    testEnvironment: "jsdom",
    displayName: "frontend",
    collectCoverageFrom: [
      "public/"
    ],
    transformIgnorePatterns: [
        "node_modules",
          "server"
    ],
    testMatch: [
      "**/test/**/public/**/*.test.js"
    ]
  },
]
}