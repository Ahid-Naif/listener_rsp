const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyS0', {baudRate: 9600});

const buadRate = 9600;
const delay_ms = 1000 / buadRate;

port.on('data', (data) => {
  console.log(data.toString('hex'));
    
  // var counter = 0;
  // var interval = setInterval( (data) => {
  //   console.log(data.toString('hex'));  

  //   counter++;
  //   if(counter == 14){
  //     clearInterval(interval);
  //   }
  // }
  //   , delay_ms);
});