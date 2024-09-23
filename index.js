let express = require('express');
let app = express();

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;

const {
    create
} = require("./controller/userController.js");




app.get("/user/create", create);





app.listen(PORT);
console.log("Listening on port 3000");