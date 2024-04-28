
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "reactdata";
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

app.post("/addItem", async (req, res) => {
    try {
        await client.connect();
        const { id, title, price, description, category, image, rating } = req.body;

        const newDocument = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating: {
                rate: rating.rate,
                count: rating.count
            }
        };
        
        console.log(newDocument);

        const results = await db
            .collection("fakestore_catalog")
            .insertOne(newDocument);
        res.status(200);
        res.send(results);
    }
    catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }

});

app.delete("/deleteItem/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        await client.connect();
        console.log("Item to delete :", id);
        const query = { id: id };
        // delete
        const results = await db.collection("fakestore_catalog").findOneAndDelete(query);
        res.status(200);
        res.send(results);

        if (results.matchedCount === 0) {
            return res.status(404).send({ message: 'Item not found' });
        }
        
    }
    catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.put("/updateItem/:id", async (req, res) => {
    const id = Number(req.params.id);
    const query = { id: id };
    await client.connect();
    console.log("Item to Update :", id);
    // Data for updating the document, typically comes from the request body
    console.log(req.body);
    const updateData = {
        $set: {
            "price": req.body.price,
        }
    };
    // Add options if needed, for example { upsert: true } to create a document if it doesn't exist
    const options = {};
    const results = await db.collection("fakestore_catalog").findOneAndUpdate(query, updateData, options);
    res.status(200);
    res.send(results);
});