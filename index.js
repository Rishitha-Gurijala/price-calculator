let express = require('express');
global.app = express();
const {
    getRoutes
} = require("./routes/routes.js");

const path = require("path");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;

app.set ("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));

getRoutes();

app.listen(PORT);
console.log("Listening on port 3000");