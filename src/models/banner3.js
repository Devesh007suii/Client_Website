const mongoose = require("mongoose")
const banner3 = mongoose.Schema({
    title: String,
    detail: String,
    image2: String
})

module.exports=mongoose.model("banner3",banner3);