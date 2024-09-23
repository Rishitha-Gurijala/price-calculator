const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

let User = mongoose.model("users_details", userSchema);
module.exports = { User };
