// module.exports = {
// 	verbose: true,
// 	globals: {
// 	  'ts-jest': {
// 		diagnostics: true,
// 	  },
// 	},
// 	transform: {
// 	  '^.+\\.(js|ts|tsx)?$': 'ts-jest',
// 	  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
// 		'jest-transform-stub',
// 	  '\\.(yaml)$': 'jest-raw-loader',
// 	},
// 	transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
// 	moduleNameMapper: {
// 	  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
// 	},
// 	testEnvironment: 'jest-environment-jsdom',
// 	//setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
//   };
module.exports = {
    verbose: true,  // Enables detailed test result logging
    transform: {
      // Transforms TypeScript and JavaScript files using ts-jest
      '^.+\\.(js|ts|tsx)?$': ['ts-jest', {
        diagnostics: {
          warnOnly: true,  // Show warnings instead of breaking tests on type errors
        },
      }],
      // Handle image and static asset imports
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
      // Handle YAML file imports
      '\\.(yaml)$': 'jest-raw-loader',
    },
    // Ignore transformations for certain modules except the specified ones
    transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
    
    // Mocks CSS and similar style imports
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  
    // Use jsdom for simulating browser-like environments for tests
    testEnvironment: 'jest-environment-jsdom',
  
    // Setup file for initializing tests, uncomment if needed
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  
    // Optional: collect coverage information
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text', 'html'],  // Generates lcov, text, and HTML reports
    coveragePathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/src/theme/',
      '<rootDir>/src/index.tsx',
      '<rootDir>/src/reportWebVitals.ts'
    ],
  };
  