const net = require('net');
const fs = require('fs');
remote_server = process.argv[2];
let socket;

socket = remote_server ? net.connect(3000, remote_server): net.connect(3000);
let ostream = fs.createWriteStream("./testReceive.txt");
let date = new Date(), size = 0, elapsed; 
socket.on('data', chunk => {
  size += chunk.length;
  elapsed = new Date() - date;
  socket.write(`\r${(size/ (1024 * 1024)).toFixed(2)} MB of data was sent. Total time elapsed is ${elapsed/1000} s`);
  ostream.write(chunk);
});

socket.on('end', () => {
  console.log(`\nFinished getting file. speed was ${((size / (1024 * 1024)) / (elapsed / 1000)).toFixed(2)} MB/s`);
  process.exit();
});







// const net = require('net');

// const conn = net.createConnection({ 
//   // change to IP address of computer or ngrok host if tunneling
//  port: 3000,
//  host: 'localhost' // or change to the ngrok port if tunneling
// });

// conn.setEncoding('utf8');

// conn.on('connect', () => {
//   conn.write("test.txt");
// });

// conn.on('data', (data) => {
//   console.log('Server says: ', data);
// });



