const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;
 
raspi.init(() => {
  var serial = new Serial();
  serial.open('/dev/ttyS0', {baudRate: 9600}, () => {
    serial.on('data', (data) => {
      // process.stdout.write(data);
      console.log(data);
    });
    console.log('Hello from raspi-serial');
  });
});