const net = require('net');

const conn = net.createConnection({ 
  // change to IP address of computer or ngrok host if tunneling
 port: 3000,
 host: 'localhost' // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  conn.write("test.txt");
});

conn.on('data', (data) => {
  console.log('Server says: ', data);
});



