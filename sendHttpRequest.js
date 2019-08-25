const axios = require('axios')

function post(id){
    axios({
        method: 'post',
        // url: 'http://localhost:8080/id',
        url: 'https://guarded-temple-62222.herokuapp.com/id',
        data: {id: `${id}`},
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
};

module.exports = post;