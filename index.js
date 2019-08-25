const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const getId = require('./retrieveInfo.js')

const parser = port.pipe(new ByteLength({length: 14}))
let previousId = '';
parser.on('data', (data) => { // will have 14 bytes per data event
  if(previousId == id){
    return;
  }
  id = getId(data);
  previousId = id
  console.log(id);
});