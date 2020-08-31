const net = require ('net');
const fs = require ('fs');
let server, istream = fs.createReadStream ("./test.txt");
server = net.createServer( socket => {
  socket.pipe(process.stdout);
  istream.on("readable", function () {
    let data;
    while (data = this.read()) {
      socket.write(data);
    }
  });
  istream.on("end", function() {
    socket.end();
  });
  istream.on('end', function() {
    server.close(() => {
      console.log("\nTransfer is done!");
    }); 
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
})



// const fs = require('fs');
// const net = require ('net');
// const server = net.createServer();
// server.on('connection', (client) => {
//   client.write('Which file do you need? ');
//   client.setEncoding('utf8');
//   client.on('data', (data) => {
//     console.log("Reading file ");
//     fs.readFile(`./${data}`, 'utf8', (error,fileText) => {
//       client.write(fileText);
//     } )
//   });

  
// });

// server.listen(3000, () => {
//   console.log("Server listening on port 3000! ");
// })