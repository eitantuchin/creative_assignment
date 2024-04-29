
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "geol102";
const client = new MongoClient(url);
const db = client.db(dbName);

var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});


app.get("/showDinos/:name", async (req, res) => {
    const dinoName = req.params.name; // Keep it as a string
    console.log("Dino to find:", dinoName);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "name": dinoName }; // Use the string directly in the query
    const results = await db.collection("jurassic_animals").findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
  });
  



