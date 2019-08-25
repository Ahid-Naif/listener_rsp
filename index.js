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
  console.log(id_hex);

  let hex  = id_hex.toString();
	let id_ascii = '';
	for (let i = 0; i < hex.length; i += 2) {
    id_ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  console.log(id_ascii);
});