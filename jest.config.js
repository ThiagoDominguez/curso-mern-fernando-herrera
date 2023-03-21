// module.exports = {
//   testEnvironment: "jest-environment-jsdom",
//   setupFiles: ["./jest.setup.js"],
//   moduleNameMapper: {
//     "^.+\\.svg$": "jest-svg-transformer",
//     "\\.(css|less|scss)$": "identity-obj-proxy",
//   },
// };

const config = {
  setupFilesAfterEnv: ["./jest.setup.js"],
};

module.exports = config;

// module.exports = {
//   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
//   setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy",
//   },
// };
