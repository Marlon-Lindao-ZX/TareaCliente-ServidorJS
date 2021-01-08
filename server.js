
const http = require("http")

const { URL } = require('url');
const PORT = 3245
const server = http.createServer()

let objects = []

server.on("request", (request, response) => {
  let message = ''
  const { method, url, headers } = request
  let urlParts = new URL(url, `http://${headers.host}`)

  if (method === "GET" && urlParts.pathname === "/pais") {
      
      if (objects.length === 0) {
        response.statusCode = 204
        message = 'No hay datos en el servidor'
      } else {
        response.statusCode = 200
        let superRespuesta = []
        
        for (let data2 of objects) {
          superRespuesta.push(JSON.stringify(data2))
        }
        message = superRespuesta.join()           
      }
  
      response.write(message)
      response.end()  
    

  } else if(method === "POST" && url.includes("/pais")){
    let data = []
    request.on('data', (chunk) => {
      data.push(chunk);
    });
    request.on('end', () => {
      data = Buffer.concat(data).toString();
      objeto = JSON.parse(data)
      if(objeto.atributos.length === 4){
        response.statusCode = 200
        let temp = {
          pais : objeto.atributos[0],
          provincia : objeto.atributos[1],
          ciudad : objeto.atributos[2],
          parroquia : objeto.atributos[3]
        }
        objects.push(temp)
        message = 'Datos leidos y guardados temporalmente en el servidor';
      }else{
        response.statusCode = 400
        message = 'Cantidad de elementos insuficientes, necesita enviar cuatro atributos <pais> <provincia> <ciudad> <parroquia> en el comando post';
      }
      response.write(message)
      response.end()
    });


  } else {
    response.statusCode = 501
    message = 'Tarea no implementada';
    response.write(message)
    response.end() 
  }
})

server.listen(PORT, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})