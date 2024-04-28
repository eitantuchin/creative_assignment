
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

app.get("/listCatalog", async (req, res) => {
    await client.connect();
    console.log("Node connected successfully to GET MongoDB");
    const query = {};
    const results = await db
        .collection("fakestore_catalog")
        .find(query)
        .limit(100)
        .toArray();
    console.log(results);
    res.status(200);
    res.send(results);
});

app.get("/:id", async (req, res) => {
    const itemId = Number(req.params.id);
    console.log("Item to find:", itemId);
    await client.connect();
    console.log("Node connected successfully to GET-id MongoDB");
    const query = { "id": itemId };
    const results = await db.collection("fakestore_catalog")
        .findOne(query);
    console.log("Results :", results);
    if (!results) res.send("Not Found").status(404);
    else res.send(results).status(200);
});


