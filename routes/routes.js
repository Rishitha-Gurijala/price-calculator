
const {
    create,
    calculatePrice
} = require("../controller/userController.js");


function getRoutes() {
    app.get("/user/transportPrice/:userId/:storeId", calculatePrice);
    app.get("/user/create/:userId", create);
}


module.exports = { 
    getRoutes
};
