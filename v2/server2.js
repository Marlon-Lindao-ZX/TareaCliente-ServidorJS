//https://blog.bearer.sh/create-node-http-server/

const http = require("http")
const PORT = 3000
const server = http.createServer()

server.on("request", (request, response) => {
  // [1]
  const { method, url, headers } = request

  // [2]
  if (method === "GET" && url === "/cats") {
    response.statusCode = 200
    response.setHeader("Content-Type", "application/json")
    const responseBody = {
      headers,
      method,
      url,
      body: ["Luna", "Don Gato", "Manchitas"]
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