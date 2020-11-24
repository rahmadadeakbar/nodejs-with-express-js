// ini adalah file routes.js


var http = require('http');
var fs = require('fs');
var url = require('url');

function renderFile(filename,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile(filename,null,function(error, data){
        if(error){
            response.writeHead(404);
            response.writeHead('File Not Found');
        }else{
            response.write(data);
        }

        response.end();
    });
}

module.exports ={
     handleRequest : function (request, response) {
         
        response.writeHead(200,{'Content-Type':'text/html'});

        var path = url.parse(request.url).pathname;

        if(path=='/'){
            renderFile('./beranda.html',response);

        }else if(path=='/profil',response){
            renderFile('./profil.html',response);
        }
     }
} 
