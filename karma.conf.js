const webpackConfig = require('./webpack.config');

process.env.BABEL_ENV='test';

const TESTS = 'src/**/*.spec.js';
const SOURCES = 'src/**/!(*.spec.js)';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './node_modules/promise-polyfill/promise.js',
      TESTS,
      SOURCES
    ],
    exclude: ['src/index.js'],
    preprocessors: {
      [TESTS]: ['webpack'],
      [SOURCES]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress', 'junit', 'coverage'],
    coverageReporter: {
      reporters: [
        {type: 'lcov', dir: 'build/codecoverage', subdir: '.'},
        {type: 'cobertura', dir: 'build/codecoverage', subdir: '.'},
        {type: 'text-summary'}
      ]
    },
    junitReporter: {
      outputDir: 'build/testresults',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
};
