// import the HTTP module
var http = require('http');

// Define a port we want to listen to
const PORT = 8080;

// We need a function which handles requests and send response
function handleRequest(request, response) {
    response.end('\n\nIt Works!!\nDocker container is up.\n\nURL Path:' + request.url + '\n\n');
}

// Create a server
var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening.
    console.log("Server listening on: http://localhost:%s", PORT);
});