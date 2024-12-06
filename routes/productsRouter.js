const express = require("express");
const router = express.Router();
const multer = require("multer");
const productModel = require("../models/product-model");


const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    
    let product = await productModel.create({
      image: req.file.buffer, 
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });

    req.flash("success", "Product successfully created");
    res.redirect("/owners/admin");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
