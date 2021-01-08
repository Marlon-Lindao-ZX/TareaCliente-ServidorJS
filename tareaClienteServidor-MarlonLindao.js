let baseUrl = 'https://jsonmock.hackerrank.com/api/countries/search?name='
let argumentos = process.argv.slice(2)
let arg = ''
if (argumentos.length !== 0)
    arg = argumentos[0]
let url = baseUrl.concat(arg);

const https = require("https")
const options = new URL(url);

https.request(
    options,
    res => {
        let data = ''
        let respuesta;
        let message = ''

        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            respuesta = JSON.parse(data)
            let arreglo = respuesta["data"]
            if (arg === "") {
                
                res.statusCode = 400
                message = "No provee la inicial para la busqueda"

            } else if (arreglo.length === 0) {

                res.statusCode = 204
                message = 'No existen paises por la inicial para la busqueda';

            } else {

                let objects = []

                for (let data2 of arreglo) {

                    let objeto = {
                        "name": data2["name"],
                        "capital": data2["capital"],
                        "latlng": data2["latlng"],
                        "languages": data2["languages"]
                    }
    
                    objects.push('{<'+ objeto["name"] +'>/<'+ objeto["capital"] +'>(<' + objeto["latlng"] + '>)[<'+ objeto["languages"] +'>]}\n')
                }

                message = objects.join()
            }
            console.log("Status code: " + res.statusCode)
            console.log(message)

        });
        

    }
).on("error", (err) => {
    console.log("Error: " + err.message);
}).end();

