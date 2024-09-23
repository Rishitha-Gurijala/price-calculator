let express = require('express');
const MongoClient = require('mongodb').MongoClient;
let app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
let db;

MongoClient.connect(url).then(client => {
    console.log("Connected successfully to server");
    db = client.db(dbName);
});

app.get("/user/create", async function (req, res, next) {
    var collection = "users_details";
    let x = await db.collection(collection).find({}).toArray();
    console.log('hbj');
});
app.listen(PORT);
console.log("Listening on port 3000");