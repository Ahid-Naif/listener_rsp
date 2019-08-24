const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const parser = port.pipe(new ByteLength({length: 14}))
parser.on('data', (data) => { // will have 14 bytes per data event
  let id = data.toJSON().data.toString(16);
  id.shift(); // remove 1st byte (start-byte)
  id.pop(); // remove last byte (end-byte)
  console.log(id);
  console.log(typeof(id[0]));
});