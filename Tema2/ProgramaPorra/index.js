
var http = require("http");
var url = require("url");
 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'adritake',
  password : 'adritakepassword',
  database : 'porra'
});

var resultado = "NADA AUN";

connection.query('SELECT * from porras', function(err, rows, fields) {
		  if (!err){
		    console.log('The solution is: ', rows);
		    resultado = rows[0].nombre +' '+ rows[0].apuesta +' '+ rows[0].partido;
		  
		  }
		  else
		    console.log('Error while performing Query.');
		 });
	 
  


http.createServer(function(request, response) {
	
	response.writeHead(200, {"Content-Type": "text/plain"});
	
	response.write(resultado);
	
	response.end();

}).listen(8000);

console.log("Programa de porras iniciado...");
