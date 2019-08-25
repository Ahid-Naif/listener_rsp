function getID(data) {
    let full_message = data.toJSON().data; // convert data into JSON object
    let id = full_message.slice(7, 11); // get the id from the message
  
    let id_hex = ""; // to store id in HEX format
    // concatenate the bytes into one string
    for (i in id) {
        id_hex += id[i].toString(16);
    }

    let id_ascii = ''; // to store id in ASCII format
    // convert id from HEX into ASCII
    let hex = id_hex.toString();
    for (let i = 0; i < hex.length; i += 2) {
        id_ascii += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }

    // convert id from ASCII into DEC
    let id_dec = parseInt(id_ascii, 16).toString(10);
    return id_dec;
};

module.exports = getID;