var http= require('http');
var fs = require('fs');


function handleRequest(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('./index.html',null,function(error, data){
        if(error){
            response.writeHead(404);
            response.writeHead('File Not Found');
        }else{
            response.write(data);
        }

        response.end();
    });
}
var server = http.createServer(handleRequest);
server.listen(3000, function(){
    console.log('Port 3000 Sedang Menyala');

});