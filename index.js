var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyS0');
 
port.on('open', () => {
  port.on('data', (data) => {
    console.log(data);
  });
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
});