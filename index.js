const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyS0');

const baudRate = 9600;
const delay_ms = 1000 / baudRate;

port.on('open', () => {
  port.on('data', (data) => {
    setInterval(function
      
      , delay_ms)
    console.log(data);
  });
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
});