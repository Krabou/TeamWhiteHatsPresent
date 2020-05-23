const express = require("express");
const router = new express.Router();
const sneakerModel = require("../models/Sneaker");
const uploader = require("../config/cloudinary");



router.get("/sneakers/men", (req, res) => {
 sneakerModel 
    .find()
    .then((dbRes) => {
      console.log(" tous les products >>>>>>>", dbRes);
      res.render("products", { sneakers : dbRes }); 
    })
    .catch((dbErr) => console.log(dbErr));
});


 

  module.exports = router;
