const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const retrieve = require('./retrieveInfo.js')

const parser = port.pipe(new ByteLength({length: 14}))
parser.on('data', (data) => { // will have 14 bytes per data event
  id = retrieve.getID(data);
  console.log(id);
});