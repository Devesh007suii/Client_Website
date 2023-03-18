const mongoose = require ("mongoose")
const detail = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
        label: String,
        // label will be the name of link
        url: String,
        // url is the link in which we are going
    },
  ],
//   since we are using multiple links so thats why we used array here
})

module.exports=mongoose.model("detail",detail);
// since we have to export the whole model thats why we wrote
// mongoose.model and since we have to call collection so we have written
// it "detail" and our schems's name is Detail