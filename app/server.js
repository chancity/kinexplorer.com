const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
/*
const moduleAlias = require('module-alias');
*/

/*moduleAlias.addAliases({
  react: 'preact/compat',
  react$: 'preact/compat',
  'react-dom': 'preact/compat',
  'react-dom$': 'preact/compat',
});*/
const {createServer} = require('https');
const {parse} = require('url');
const fs = require('fs');
const next = require('next');

const app = next({dev});
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost-key.pem'),
  cert: fs.readFileSync('./certificates/localhost.pem'),
};
app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on https://localhost:${port}`);
  });
});
