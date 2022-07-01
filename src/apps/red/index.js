const server = require('./server');
const port = process.env.RED_PORT || 3000

server.listen(port, () => {
  console.log(`RED app listening on port ${port}`)
});

