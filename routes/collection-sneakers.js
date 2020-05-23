const express = require("express");
const router = express.Router();
const sneakerModel = require("./../models/Sneaker");

router.get("/sneakers/collection", (req, res) => {
    sneakerModel
        .find()
        .then(dbRes => {
            console.log("collection", dbRes)
       
    res.render("products", {
        sneakers: dbRes
        }) })
        .catch((dbErr) => console.log(dbErr));
});

module.exports = router;
