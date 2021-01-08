//https://nodejs.org/api/url.html#url_new_url_input_base

const http = require("http")
// [1]
const { URL } = require('url');
const PORT = 3000
const server = http.createServer()
const gatos = ["Luna", "Don Gato", "Manchitas"]

server.on("request", (request, response) => {
  
  const { method, url, headers } = request

  // [2]
  let urlParts = new URL(url, `http://${headers.host}`)

  
  if (method === "GET" && url.includes("/cats") ) {
    response.statusCode = 200
    response.setHeader("Content-Type", "application/json")
    const responseBody = {
      headers,
      method,
      url,
      body: gatos[urlParts.searchParams.get("id")]
    }

    response.write(JSON.stringify(responseBody))
    response.end()
  }
})

server.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})