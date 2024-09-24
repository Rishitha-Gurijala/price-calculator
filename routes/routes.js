
const {
    create,
    calculateDistance
} = require("../controller/userController.js");


function getRoutes() {
    app.get("/user/distance/:userId/:lat1/:lng1/:lat2/:lng2", calculateDistance);
    app.get(`/user/create/:userId`, create);
}


module.exports = { 
    getRoutes
};
