const mongoose = require("mongoose");

const slides = mongoose.Schema({
    title: String,
    subTitle: String,
    imageUrl: String,
    class: String
})

module.exports=mongoose.model("slider",slides);