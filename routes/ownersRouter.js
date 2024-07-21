const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model")


router.get("/", function (req, res){
    req.send("hey is wprking");
});

if(process.env === "development"){
    router.post("/create", function (req, res){
        req.send("hey it's working")
    });
       
}



module.exports = router