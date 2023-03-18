const express = require("express")
const { response } = require("express");

// here we made an object of Router
// and we can make various routes in this object
const routes=express.Router();

const Detail = require("../models/Details");
const slides = require("../models/silder");
const service = require("../models/services");
const contact = require("../models/contact");
const banner1 = require("../models/banner1")
const banner2 = require("../models/banner2")
const banner3 = require("../models/banner3")
const about = require("../models/about")

routes.get("/", async (req,res)=>{

    const detailing = await Detail.findOne({"_id":"641313a491b8069bf29adb3a"})
    // it will return objetcs of detail
    // since its calling asynchronous request so we'll make it synchronous
    // by writing async
    const sliders = await slides.find();
    const services = await service.find();
    const Banner1 = await banner1.findOne({"_id":"641313a491b8069bf29adb35"});
    const Banner2 = await banner2.findOne({"_id":"641435939dc057fce3edfe06"});
    const Banner3 = await banner3.findOne({"_id":"641435939dc057fce3edfe05"});
    const About = await about.findOne({"_id":"641313a491b8069bf29adb32"});


    // we are rendering the detals to the index file
    res.render("index",{
        detailing:detailing,
        // its a key value pair which means all the data of object which we 
        // are getting we are just passing it to the key
        sliders:sliders,
        service:services,
        Banner1:Banner1,
        Banner2:Banner2,
        Banner3:Banner3,
        About:About
    });
})

routes.get("/gallery",async (req,res)=>{
    const detailing = await Detail.findOne({"_id":"640eb0280d15abd4474d3d38"})
    const sliders = await slides.find();
    res.render("gallery",{
        detailing:detailing,
        sliders:sliders
    });
})

// we used routes.post because our method in the <form> was post 
// we have /process-contact-form which is inside <form> 
// so that we'll find data here
routes.post("/process-contact-form", async (request,response)=>{
    console.log("submitted")// this means we know we gor the data
    //now we have to pass the data so we have use console.log(request.body
    // to pass the data in the form of object so we will use body-parser module
    //for it
    console.log(request.body)
    // save the data to db
    try{
        const data=await contact.create(request.body)
        console.log(data);
        response.redirect("/")

    }catch(e)
    {
        console.log(e)
        response.redirect("/")
    }
})

module.exports=routes