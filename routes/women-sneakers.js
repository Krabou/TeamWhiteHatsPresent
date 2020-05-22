const express = require("express");
const router = new express.Router();
const sneakerModel = require("../models/Sneaker");

router.get("/sneakers/women", (req, res) => {
 sneakerModel 
    .find()
    .then((dbRes) => {
      console.log(" tous les products >>>>>>>", dbRes);
     
      res.render("sneaker", { sneaker: dbRes }); 
    })
    .catch(next);
  });


  module.exports = router;
