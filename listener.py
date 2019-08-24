import serial

port = serial.Serial("/dev/ttyAMA0", baudrate=9600, timeout=3.0)

while True:
    port.write("\r\nSay something:")
    print("hey")
    rcv = port.read(10)
    print(rcv)
    port.write("\r\nYou sent:" + repr(rcv))