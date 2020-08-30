const net = require ('net');
const server = net.createServer();
server.on('connection', (client) => {
  client.write('Which file do you need? ');
  client.setEncoding('utf8');
  client.on('data', (data) => {
    console.log("The required file: ", data);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000! ");
})