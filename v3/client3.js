//https://nodejs.org/api/http.html#http_http_request_options_callback

const http = require("http")
const options = new URL('http://localhost:3000/cats?id=1');

http.request(
        options,
        res => {
            // [1]
            let data = []

            res.on('data', (chunk) => {
                data.push(chunk);
            });
            res.on('end', () => {
                data = Buffer.concat(data).toString();
                console.log(data);
            });

        }
    )
    .end()