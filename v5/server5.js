
const http = require("http")
const { URL } = require('url');
const PORT = 3000
const server = http.createServer()
// [3]
const { parse } = require('querystring');

server.on("request", (request, response) => {
  
  const { method, url, headers } = request
  let urlParts = new URL(url, `http://${headers.host}`)


  // [1]
  if (method === "GET" && urlParts.pathname === "/" ) {
    response.setHeader("Content-Type", "text/html")
    response.statusCode = 200
    html = `<html><body>
    <h1>Cats!</h1>
    <form action="/form" method="POST">
      <input type="email" class="form-control" id="email" placeholder="Ingrese su correo"
                            name="email" required>
      <button type="submit">Enviar</button>
    </form>
    </body></html>`
    response.end(html)
  }
  // [2]
  if (method === "POST" && urlParts.pathname === "/form" ) {
    let data = []

    request.on('data', (chunk) => {
        data.push(chunk);
    });
    request.on('end', () => {
        data = Buffer.concat(data).toString();
        console.log(parse(data));
    });

  } else {
    
    // [4]
    response.statusCode = 404;
    response.end();
  }


})

server.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})