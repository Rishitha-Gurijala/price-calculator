const { mongoConnect } = require("../mongoConnect.js");

async function create(req, res) {
    try {
        var collection = "users_details";
        let db = await mongoConnect();
        let userExist = await db.collection(collection).findOne({age:"24"});
        if (userExist) {
            return res.status(400).json({ message: "User exists",
                data : userExist
             })
        }
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error." })
    }
}

function calculateDistance(req,res) {
    res.render("index")
}

async function calculatePrice(req,res) {
    res.render("index")
    // calculateDistance();
    // var collection = "users_details";
    // let db = await mongoConnect();
    // let userExist = await db.collection(collection).findOne({age:"24"});
    // if (userExist) {
    //     return res.status(400).json({ message: "User exists",
    //         data : userExist
    //      })
    // }
}

module.exports = { 
    create, 
    calculateDistance, 
    calculatePrice 
};
