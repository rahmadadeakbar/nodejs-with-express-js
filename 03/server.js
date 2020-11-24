var express = require('express');
var app = express();


app.get('/', function(request, response){
    response.send('Hal ini beranda');
});

app.get('/profil', function(request, response){
    response.send('Hal ini profil');
});

app.get('/profil/:name', function(request, response){
    response.send(request.params.name);
});

app.listen(3000);