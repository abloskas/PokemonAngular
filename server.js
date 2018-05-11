var express = require('express');
var app = express();

//angular
app.use(express.static( __dirname + '/PokemonAPI/dist/PokemonAPI' ));

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
