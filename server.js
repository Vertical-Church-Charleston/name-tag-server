var jsonApi = require("jsonapi-server");
var fs = require("fs");
var path = require("path");

jsonApi.setConfig({
  port: 8080,
  base: "api/v1",
  graphiql: false
});

// Load all the resources
fs.readdirSync(path.join(__dirname, "/resources")).filter(function(filename) {
  return /^[a-z].*\.js$/.test(filename);
}).map(function(filename) {
  return path.join(__dirname, "/resources/", filename);
}).forEach(require);

jsonApi.start();