const mongoose = require("mongoose")
const about = mongoose.Schema({
    title: String,
    detail: String
})

module.exports=mongoose.model("about",about);