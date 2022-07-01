const server = require('./server');
const port = process.env.GREEN_PORT || 3000

server.listen(port, () => {
  console.log(`GREEN app listening on port ${port}`)
});

