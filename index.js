const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyS0');


  port.on('data', (data) => {
    
    console.log(data.toString('ascii'));
  });