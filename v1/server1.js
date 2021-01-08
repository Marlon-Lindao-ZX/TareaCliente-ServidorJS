//https://blog.bearer.sh/create-node-http-server/

const http = require("http")
const PORT = 3000
const server = http.createServer()

server.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})