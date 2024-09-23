const express = require('express');
const {fetch, create} = require("../controller/userController.js");

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);

module.exports = { route };
