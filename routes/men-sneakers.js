const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");

router.get("/sneakers/:men", (req, res) => {
    sneakerModel
    .find()
    .then(dbRes => {
        console.log("collection", dbRes)
   
res.render("products", {
        collection: dbRes
    }) })
    .catch(dbErr => console.log("error d'affichage collection"));
});

// router.get("/sneakers/men", (req, res) => {
//     sneakerModel 
//        .find()
//        .then((dbRes) => {        
//          res.render("sneaker", { sneaker: dbRes }); 
//        })
//        .catch(next);
//      });
     
//      module.exports = router;