const server = require('./server');
const port = process.env.BLUE_PORT || 3000

server.listen(port, () => {
  console.log(`BLUE app listening on port ${port}`)
});

