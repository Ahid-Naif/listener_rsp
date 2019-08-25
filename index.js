const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const getId = require('./retrieveInfo.js')
const post  = require('./sendHttpRequest.js');

const parser = port.pipe(new ByteLength({length: 14}))
let previousId = '';
parser.on('data', (data) => { // will have 14 bytes per data event
  id = getId(data);
  if(previousId == id){
    return;
  }
  previousId = id
  console.log(id);
  post(id);
});