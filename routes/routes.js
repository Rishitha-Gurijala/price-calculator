
const {
    create,
    calculateDistance,
    calculatePrice
} = require("../controller/userController.js");


function getRoutes() {
    app.get("/user/distance", calculateDistance);
    app.get("/user/create", create);
    app.post("/user/travelPrice", calculatePrice);
}


module.exports = { 
    getRoutes
};
