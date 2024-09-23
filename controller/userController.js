const { User } = require("../model/userModel.js");

async function create(req,res){
    try {

        let userExist = await User.findOne({"age": "19"});
        if(userExist) {
            return res.status(400).json({message: "User exists"})
        }
    } catch(err) {
        res.status(500).json({error : "Internal Server Error."})
    }
}

async function fetch(req,res){
    try {
        return res.json("Hello World")
    } catch(err) {
        res.status(500).json({error : "Internal Server Error.", err})
    }
}

module.exports = { fetch, create };
