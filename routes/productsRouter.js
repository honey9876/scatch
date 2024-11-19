// const express = require("express");
// const router = express.Router();
// const upload = require("../models/product-model");
// const productModel = require("../config/multer-config");

// router.post("/create", upload.single("image"), async function (req, res) {
//  let { image,
//    namne,
//    price,
//    discount,
//    bgcolor,
//    panelcolor,
//    textcolor,
//   } = req.body;

//   let product = await productModel.create({
//     image:req.file.buffer,
//   })
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("hey it's working");
});

module.exports = router;
