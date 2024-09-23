const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { route } = require("./routes/userRoute.js");

const app = express();


app.use(bodyParser.json())
dotenv.config();
const PORT = process.env.PORT || 3001;
const MONGOURL = process.env.MONGO_URL
mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected succeessfully");
    app.listen(PORT, () => {
        console.log(`Server running at port : ${PORT}`)
    })
}).catch((error) => {
    console.log("Error::", error);
})

app.use("/api/user", route);