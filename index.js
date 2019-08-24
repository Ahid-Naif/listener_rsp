const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
const port = new SerialPort('/dev/ttyS0')

const parser = port.pipe(new ByteLength({length: 14}))
parser.on('data', console.log) // will have 8 bytes per data event