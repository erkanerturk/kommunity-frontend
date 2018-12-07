/* eslint-disable no-console */
import app from '@/server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

// DONT UPDATE! workaround for process.env.PORT issue on heroku builds
const getEnv = c => process.env[c];
const port = getEnv('PORT');

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  }

  console.log(`🚀 started on ${port}`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    // eslint-disable-next-line global-require
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
