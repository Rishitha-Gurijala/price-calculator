const { mongoConnect } = require("../mongoConnect.js");
var dist = require('geo-distance-js');

async function create(req, res) {
    try {
        var collection = "users_details";
        let db = await mongoConnect();
        let userExist = await db.collection(collection).findOne({ age: "24" });
        if (userExist) {
            let distance = 2;
            return res.status(400).json({
                message: "Distance in Km :::"
            });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error." })
    }
}

async function calculatePrice(req, res) {
    let params = req.params;
    let userId = params.userId;
    let storeId = params.storeId;

    let usersCollection = "users_details";
    let storeCollection = "store_details";
    let transportCollection = "city_transport_details";

    let db = await mongoConnect();
    let userExist = await db.collection(usersCollection).findOne({ user_id: userId });
    let storeExist = await db.collection(storeCollection).findOne({ store_reg_id: storeId });

    if (!userExist) {
        return res.status(500).json({ error: "Invalid User" })
    }
    if (!storeExist) {
        return res.status(500).json({ error: "Invalid Store" })
    }

    let distance = dist.getDistance(
        storeExist.latitude,
        storeExist.longitude,
        userExist.latitude,
        userExist.longitude
    );
    let qwe = distance/1000;
    distance = Math.round(distance/1000);

    let cityOfStore = storeExist.city;
    let transportPerCity = await db.collection(transportCollection).find({ city: cityOfStore }).toArray();


    let price = calculatePriceFromDistance(distance, transportPerCity);


    return res.status(200).send(price);
}

function calculatePriceFromDistance(distance, transportPerCity) {
    for(let transp of transportPerCity) {
        let slabSplit = transp.slab.split('-');
        let lowerLimit = parseInt(slabSplit[0]);
        let higherLimit = parseInt(slabSplit[1]);
        if(distance > lowerLimit && distance <= higherLimit) {
            return transp.price;
        }
    }
    return '10';

}

module.exports = {
    create,
    calculatePrice
};
