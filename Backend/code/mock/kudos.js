const kudos = require('./kudos.json');
const http = require('http');
const querystring = require('querystring');
const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/kudos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 200
};

kudos.forEach((kudo) => {
    var req = http.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
    })

    req.on('error', (e) => {
        console.error(e);
    })

    req.write(querystring.stringify(kudo))
    console.log('POST request to localhost:8080')
    req.end()
})