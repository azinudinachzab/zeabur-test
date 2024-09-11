"use strict";

// server.mjs
var _require = require('node:http'),
  createServer = _require.createServer;
var server = createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
const PORT = process.env.PORT || 8080
server.listen(PORT, '127.0.0.1', function () {
  console.log(`Listening on localhost:${PORT}`);
});

// run with `node server.mjs`
