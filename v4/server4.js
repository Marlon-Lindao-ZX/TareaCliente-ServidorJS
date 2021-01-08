//https://nodejs.org/api/url.html#url_urlobject_pathname

const http = require("http")
const { URL } = require('url');
const PORT = 3000
const server = http.createServer()

server.on("request", (request, response) => {
  
  const { method, url, headers } = request
  let urlParts = new URL(url, `http://${headers.host}`)

  // [1]
  if (method === "GET" && urlParts.pathname === "/" ) {
    response.setHeader("Content-Type", "text/html")
    response.statusCode = 200
    response.end("<html><body><h1>Cats!</h1></body></html>")
  }
})

server.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})