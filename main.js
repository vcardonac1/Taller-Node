const fs = require("fs")
const http = require("http")
const axios = require("axios")

const urlProveedores = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json"
const urlClientes = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json"

http.createServer((req, res)=> {
    res.writeHead(200,{'Content-Type': 'text/html'})
    let info = req.url
    let data = ""
    if (info==="/api/proveedores") {
        data = urlProveedores
    }
    else if (info==="/api/clientes") {
        data = urlClientes
    }
    
    axios.get(data)
    .then(response=>{
        let datos = JSON.stringify(response.data)
        res.write(datos)
    }).catch(err=>{
        console.log(err)
    }).then(()=>{
        res.end()
    })
}).listen(8081)

