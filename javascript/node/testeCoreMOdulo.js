const $http = require("http");
const $os = require("os")
const $fs = require("fs")

// metodo para salver arquivos no sistema.
const savelog = () => {
    $fs.appendFileSync("log.txt","Acessp efetivado "+new Date());
}


//criando um servidor http
$http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<html> <head> <meta charset='UTF-8'></head> <body>");
    res.write("<h1>SErvidor</h1>")
    res.write("Plataforma:"+ $os.platform + "<br/>")
    res.write("Endereço:"+ $os.hostname + "<br/>")
    res.end(); // manda para o cliente
    savelog()

}).listen(3000) //abre na porta 3000