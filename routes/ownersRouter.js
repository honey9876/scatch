const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model")



if(process.env === "development"){
    router.post("/create", async function (req, res){
       let owner = await ownerModel.find();
       if(owner.length > 0) {
        return res.status(500)
        .send("you don't have premission to create a new owner.")    
    }

    let{fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
       });
       res.status(201).send(createdOwner);
    });
       
}

router.get("/", function (req, res){
    req.send("hey is wprking");
});



module.exports = router