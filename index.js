const http = require('http');
const parseUrl = require('url').parse;

const STATUS_HTTP_OK = 200;

var lbbeprabi = {
  port : 8080
};

var contentType = "application/json";

lbbeprabi.creerServeur = function (callback) {
  var server = http.createServer(function(request, response) {
    //Execution du callback
    var url = parseUrl(request.url,true)
    callback(url.query);

    //Reponse HTML en dur
    response.writeHead(STATUS_HTTP_OK, {"Content-Type": contentType});
    response.write(JSON.stringify(url.query));
    response.end();

  });

  server.listen(this.port);
}

module.exports = lbbeprabi;


// lbbeprabi.creerServeur(function () {
//   console.log("bj")
// });
