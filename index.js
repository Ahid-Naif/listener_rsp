const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;
 
raspi.init(() => {
  var serial = new Serial('/dev/ttyS0', { baudRate: 9600 });
  serial.open(() => {
    serial.on('data', (data) => {
      process.stdout.write(data);
    });
    serial.write('Hello from raspi-serial');
  });
});