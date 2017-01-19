const webpackConfig = require('./webpack.config');

const TEST_SOURCES = 'src/**/*.spec.js';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './node_modules/promise-polyfill/promise.js',
      TEST_SOURCES
    ],
    preprocessors: {
      [TEST_SOURCES]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: 'build',
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
