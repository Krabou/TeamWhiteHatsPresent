const bcrypt = require("bcrypt");
const exposeFlashMessage = require("./../middlewares/exposeFlashMessage");
const exposeLogginStatus = require("./../middlewares/exposeLoginStatus");
const express = require("express");
const protectPrivateRoute = require("./../middlewares/protectPrivateRoute");
const router = new express.Router();
const userModel = require("./../models/User");

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", (req, res) => {
  res.redirect("/products_manage")
})

// router.post("/signin", (req, res) =>{
//     res.render("products_add")
// })
router.post("/foo", (req, res) => {
  res.render("signin")
})

/*logout*/
router.get("/logout", (req, res)=> {
  req.session.destroy(()=> res.redirect("/signin"));
});

module.exports = router;