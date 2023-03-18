const { response } = require("express");
const express = require("express")
const app = express();
const hbs = require("hbs");
const mongoose = require ("mongoose")
const bodyParser = require("body-parser")
const detail = require ("./models/Details")
// with the help of mongoose we will do our connectivity
const Sliding = require ("./models/silder")
const service = require ("./models/services")
const banner1 = require ("./models/banner1")
const banner2 = require ("./models/banner2")
const banner3 = require ("./models/banner3")
const about = require("./models/about")



const routes = require("./routes/main");
const { urlencoded } = require("body-parser");


// (request,response) we are giving a callback
// if someone request on "/" on PORT 5556 then this callback function will work
// and if we want to send anything then we will write response.send()

// request is used for the data to read which is coming from the website 
// app.get("/",(request,response)=>{
//     response.send("wow this is data from server")
// })

// template engine
// we are setting up our template engine
app.set("view engine","hbs")

// we are defining where are we putting our files
// it is defining that our views are placed in views folder
app.set("views","views")

hbs.registerPartials("views/partials")

// since we have to know what we are passing so thats why we have used this
app.use(bodyParser.urlencoded({
    extended:true // through this we can use pass body which means the 
    // urlencoded data which we are getting it can become object after passing
}))

// we are using static function of express
// we are telling express that our static folder is public folder
// if we want our url to start from static rather then public 
// like this /static/css/style.css
// for that we will write static before express
app.use("/static",express.static("public"))
// here we can call any routes
// if we put blank i.e "" the all the routes will come
// if app.use("/user",routes) this means that we have to put 
// localhost: 5556/user then only it will call that route
app.use("",routes)



//mongodb+srv://Devesh_Sharma:BxSCYsdcayWYiMNU@cluster0.4i8epyb.mongodb.net/test?authMechanism=SCRAM-SHA-1&authSource=Cluster0

// db connections
mongoose.connect("mongodb+srv://Devesh_Sharma:BxSCYsdcayWYiMNU@cluster0.4i8epyb.mongodb.net/test?authMechanism=SCRAM-SHA-1&authSource=Cluster0").then(()=>
      console.log("connected"),

    //   about.create({
    //     title: "About this site",
    //     detail: "Knock Kock tera baap ayaa"
    //   }),

      //   banner3.create({
      //   title: "eren yeger",
      //   detail: "shinzo sasageyo",
      //   image2: "/static/images/baki.png"
      // }),

      // banner2.create({
      //   title: "eren yeger",
      //   detail: "shinzo sasageyo",
      //   image1: "https://wallpapercave.com/wp/wp1837539.jpg"
      // }),

      // banner1.create({
      //   title: "Ronaldo tera baap hai",
      //   detail: "bhahja yaha seh"
      // }),

    //   service.create([
    //     {
    //         icon:"fa-brands fa-accusoft",
    //         title:"Provide best cources",
    //         description:"best cources suiiiiiiiii",
    //         linkText:"https://www.youtube.com/",
    //         link:"Check"
    //     }
    //   ]),


      
    //   Sliding.create([
        
    //     {
    //         title:"mercedes",
    //         subTitle:"suiiiuiuiuiuiuiui",
    //         imageUrl:"/static/images/mercedes.jpg",
    //         class:"active"
    //     },
    //     {
    //         title:"Erwin",
    //         subTitle:"suiiiuiuiuiuiuiui",
    //         imageUrl:"/static/images/mercedes.jpg"
    //     },
    //     {
    //         title:"Pathetic",
    //         subTitle:"suiiiuiuiuiuiuiui",
    //         imageUrl:"/static/images/mercedes.jpg"
    //     }
    // ]),
    //   detail.create({
    //     brandName: "Insane Beat",
    //     brandIconUrl: "https://yt3.googleusercontent.com/ytc/AL5GRJU7cwMKfTOhqqki4Hm5qdcX7yI4ndCE6T1tfx8q=s176-c-k-c0x00ffffff-no-rj" ,
    //     links: [
    //         {
    //         label: "Home",
    //         url: "/",
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact us",
    //         url:"/contact"
    //     }
    //   ],
    //   })
    );



//here we are making an express server
//process.env.PORT | 5556 :- if we did'nt get the env file then our 
//PORT number will be 5556
app.listen(process.env.PORT | 5556,()=>{
    console.log("server started")
});