const { mongoConnect } = require("../mongoConnect.js");

async function create(req, res) {
    try {
        var collection = "users_details";
        let db = await mongoConnect();
        let userExist = await db.collection(collection).findOne({ age: "24" });
        if (userExist) {
            return res.status(400).json({
                message: "User exists",
                data: userExist
            })
        }
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error." })
    }
}

async function calculateDistance(req, res) {
    // await client.connect();
    // let latLongs = req.params;
    // let redisKey = latLongs.userId;
    // await client.set(redisKey, JSON.stringify(latLongs));
    res.render("index");
}


module.exports = {
    create,
    calculateDistance
};
