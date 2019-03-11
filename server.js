// server.js
// load the server resource and route get method
const server = require('server');
const { get } = require('server/router');

// get server port from environment or default to 3000
const port = process.env.PORT || 3000;

server({ port }, [
  get('/', ctx=> '<h1>Hello World</h1>')
])
  .then(() => console.log(`server running at http://localhost:${port}`));