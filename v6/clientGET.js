//https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html
const https = require('https');

// [1]
// Generarl el API_KEY
let api_key = ''

https.get('https://api.nasa.gov/planetary/apod?api_key='+api_key, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});