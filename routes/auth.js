const express = require("express");
const router = new express.Router();
const userModel = require("./../models/User");

router.get("/signup", (req, res) => {
    res.render("signup");
  });
  
  router.get("/signin", (req, res) => {
    res.render("signin");
  });
  
router.post("/signin", (req, res) =>{
    res.redirect("/products_manage")
})

module.exports = router;
