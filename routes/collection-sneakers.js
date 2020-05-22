const express = require("express");
const router = express.Router();

// const sneakerModel = require("./../models/Sneaker");

router.get("/sneakers/collection", (req, res, next) => {
    // sneakerModel
    // .find()
    // .then((dbRes) => {
    //   console.log("collection" , dbRes)
    // })
    // res.render("products" , {collection:dbRes})
      res.render("products")
    // .catch(next);
    });

    module.exports = router;