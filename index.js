const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

const port = new SerialPort('/dev/ttyS0');
const parser = port.pipe(new Readline());


const baudRate = 9600;
const delay_ms = 1000 / baudRate;

parser.on('data', data => {
  console.log(`> ${data}`);

  
});