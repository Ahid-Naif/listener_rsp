let hex = '45324336';


function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }

let mes = hex_to_ascii('3132');
console.log(mes)
let dec = parseInt(hex);
console.log(dec.toString(16));