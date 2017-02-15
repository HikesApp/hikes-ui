import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';
import Express from 'express';

const app = new Express();
const port = 3000;

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
});

app.use(devMiddleware);

app.get('*', (req, res) => {
  const index = devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html'));
  res.end(index);
});

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    );
  }
  /* eslint-enable no-console */
});
