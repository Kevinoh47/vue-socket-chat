// server.js
// load the server resource and route get method
const server = require('server');
const { get, socket } = require('server/router');

// get server port from environment or default to 3000
const port = process.env.PORT || 3000;

server({ port }, [
  get('/', ctx => '<h1>Hello you chatting person</h1>'),
  socket('message', ctx => {
    // send the message to connected sockets
    ctx.io.emit('message', ctx.data);
  }),
  socket('connect', ctx => {
    console.log('client connected', Object.keys(ctx.io.sockets.sockets));
    ctx.io.emit('count', {msg: 'HI U', count: Object.keys(ctx.io.sockets.sockets).length});
  })
])
  .then(() => console.log(`server running at http://localhost:${port}`));