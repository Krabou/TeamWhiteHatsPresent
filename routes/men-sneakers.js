const express = require("express");
const router = express.Router();
// const sneakerModel = require("./../models/Sneaker");

router.get("/sneakers/men", (req, res) => {
    res.render("products");
  });

  module.exports = router;