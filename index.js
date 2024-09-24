let express = require('express');
let app = express();

const path = require("path");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;

const {
    create,
    calculateDistance
} = require("./controller/userController.js");
app.set ("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));




app.get("/user/distance", calculateDistance);
app.get("/user/create", create);





app.listen(PORT);
console.log("Listening on port 3000");