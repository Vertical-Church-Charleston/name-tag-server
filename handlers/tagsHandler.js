var MongodbHandler = require("jsonapi-store-mongodb");

var connection = new MongodbHandler({
  url: "mongodb://localhost:27017"
});

module.exports = connection;