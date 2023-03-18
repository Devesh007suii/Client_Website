const mongoose = require("mongoose")
const banner2 = mongoose.Schema({
    title: String,
    detail: String,
    image1: String
})

module.exports=mongoose.model("banner2",banner2);