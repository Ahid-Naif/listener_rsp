const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyS0');

const baudRate = 9600;
const delay_ms = 1000 / baudRate;

var counter = 0;
port.on('data', (data) => {
  console.log(typeof(data.Buffer));
  setInterval( () => {
      
    counter++;
    if(counter == 14){
      clearInterval();
    }
  }
      
  , delay_ms)
});
 
// open errors will be emitted as an error event 
port.on('error', function(err) {
  console.log('Error: ', err.message);
});