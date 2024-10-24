var mongoDB = require("mongodb");
var MongoClient = mongoDB.MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, client) {
  if (err) throw err;

  console.log("Connected to MongoDB");

  // Close the connection
  client.close();
});
