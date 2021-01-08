//https://nodejs.org/api/http.html#http_http_request_options_callback

const http = require("http")

http.request(
    {
      hostname: "localhost",
      port: '3000',
      method: 'GET',
      path: "/cats"
    },
    res => {
      let data = ""

      res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No más datos en la respuesta.');
    });

    }
  )
  .end()