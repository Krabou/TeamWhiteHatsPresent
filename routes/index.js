const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("")

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});


module.exports = router;
