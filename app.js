// hello world node app 
var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}
).listen(9999, () => {
    console.log('Server running at port 9999');
});
