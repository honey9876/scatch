const express = require('express');
const router = express.Router();


router.get("/", function (req, res){
    req.send("hey is wprking");
});









module.exports = router