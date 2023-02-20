var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello Sally"
   response.end('Hello Sally\n');
}).listen(9000);

// Console will print the message
console.log('Server running at http://127.0.0.1:9000/');

// Exit if detect signal
process.on('SIGINT', function() {
    process.exit();
});