const SerialPort = require('serialport')
const parsers = SerialPort.parsers

// Use a `\r\n` as a line terminator
const parser = new parsers.Readline({
  delimiter: '\r\n',
})

const port = new SerialPort('/dev/ttyS0', {
  baudRate: 9600,
})

port.pipe(parser)

port.on('open', () => console.log('Port open'))

parser.on('data', console.log)