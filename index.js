const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;
 
raspi.init(() => {
  var serial = new Serial('/dev/ttyS0');
  serial.open(() => {
    serial.on('data', (data) => {
      // process.stdout.write(data);
      console.log(data);
    });
    console.log('Hello from raspi-serial');
  });
});