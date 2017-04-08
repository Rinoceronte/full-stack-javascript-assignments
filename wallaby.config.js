module.exports = wallaby => ({
  files: [
    'src/_datasets/*.js',
    'src/javascript/intro/**/*.js',
    '!src/**/*.test.js'
  ],
  
  tests: [
    'src/javascript/intro/**/*.test.js',
  ],
  
  env: {
    type: 'node',
    runner: 'node'
  },
  
  setup: () => require('babel-polyfill'),
  
  testFramework: 'ava',
  
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  
//  debug: true
});
