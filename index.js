const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const parser = port.pipe(new ByteLength({length: 14}))
parser.on('data', (data) => { // will have 14 bytes per data event
  let full_message = data.toJSON().data;
  let id = full_message.slice(7, 11);
  
  let id_hex = "";
  for (i in id) {
    id_hex += id[i].toString(16);
  }
  id_dec = id_hex.parserInt(10);
  console.log(id_dec);
});