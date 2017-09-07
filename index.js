const http = require('http');

const STATUS_HTTP_OK = 200;

var lbbeprabi = {
  port : 8080
};

var contentType = "application/json";

lbbeprabi.creerServeur = function (callback) {
  var server = http.createServer(function(request, response) {
    //Execution du callback
    callback(request);

    //Reponse HTML en dur
    response.writeHead(STATUS_HTTP_OK, {"Content-Type": contentType});
    response.write(JSON.stringify(request.headers));
    response.end();

  });

  server.listen(this.port);
}

module.exports = lbbeprabi;


// lbbeprabi.creerServeur(function () {
//   console.log("bj")
// });
