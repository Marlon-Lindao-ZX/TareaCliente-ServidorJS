
let argumentos = process.argv.slice(3)
let temp = []
if(argumentos.length !== 0)
    temp = argumentos

const data = JSON.stringify({
    atributos: temp
});

const options = {
    hostname: "localhost",
    port: '3245',
    method: process.argv[2],
    path: "/pais",
    body: data
};

if(process.argv[2] !== undefined){
    const http = require("http")

    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('Status Code:', res.statusCode);
            if (data.length === 0)
                data += "No hay datos en la lista de objetos en el servidor!!!, utilice post para agregar objetos en el servidor"
            console.log(data);
        });

    }).on("error", (err) => {
        console.log("Error: ", err.message);
    });

    req.write(data);
    req.end();
} else {
    console.log("Digite el comando a utilizar, como GET o POST")
}


//const options = new URL(baseUrl);
/*
if(argumentos.length == 0){
    http.get(
        options,
        res => {
            let data = ''

            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                console.log("Status code: " + res.statusCode)
                console.log(data);
            });

        }
    )
    .end()
} else {
    const data = {
        atributos: argumentos
    };
    axios.post(options, data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
}
*/

