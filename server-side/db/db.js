const mongoose = require("mongoose");
require('dotenv').config();


async function connectDb(req,res){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb connected successfully");
    } catch (e) {
            console.log(e.message);
    }
}

module.exports = connectDb;