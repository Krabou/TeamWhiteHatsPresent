const express = require("express");
const router = new express.Router();
const sneakerModel = require("../models/Sneaker");


router.get("/sneakers/women", (req, res) => {
    res.render("products")
});

router.get("/sneakers/women", (req, res) => {
 sneakerModel 
    .find()
    .then((dbRes) => {
      console.log(" tous les products >>>>>>>", dbRes);
      res.render("sneakers", { sneakers : dbRes }); 
    })
    .catch((dbErr) => console.log(dbErr));
});

router.post("/product", (req, res) => {
    productModel
      .create(req.body)
      .then((dbRes) => {
        console.log("produit ajouté en bdd >>> ", dbRes);
        res.redirect("/dashboard/manage-products");
      })
      .catch((dbErr) => console.error(dbErr));
  });



  module.exports = router;
