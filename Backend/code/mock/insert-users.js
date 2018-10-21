const users = require('./users');
const http = require('http');
const querystring = require('querystring');
var options = {
    hostname: 'localhost',
    port: 8080,
    path: '/users',
    method: 'POST',
    headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
};


users.forEach((user) => {
    var req = http.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
    })

    req.on('error', (e) => {
        console.error(e);
    })


    req.write(querystring.stringify(user))
    console.log('POST request to localhost:8080')
    req.end()
})