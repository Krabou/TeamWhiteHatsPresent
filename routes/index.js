const express = require("express");
const router = express.Router();
const sneakerModel = require("../models/Sneaker");
const tagModel = require("./../models/Tag");
const uploader = require("../config/cloudinary");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", uploader.single("image"), (req, res, next) => {
  const sneaker = {
    ...req.body
  };
  if (req.file) {
    sneaker.image = req.file.secure_url
  };
  Promise.all([sneakerModel.find({"category": req.params.cat }), tagModel.find()])
    .then((dbRes) => {
      console.log(" tous les products >>>>>>>", dbRes);
      res.render("products", {
        sneakers: dbRes[0], tags: dbRes[1]
      });
    })
    .catch(next);
});

router.get("/sneakers", uploader.single("image"), (req, res, next) => {
  const sneaker = {
    ...req.body
  };
  if (req.file) {
    sneaker.image = req.file.secure_url
  };
  sneakerModel
  Promise.all([sneakerModel.find(), tagModel.find()])
    .then((dbRes) => {
      console.log(" tous les products >>>>>>>", dbRes);
      res.render("products", {
        sneakers: dbRes[0], tags: dbRes[1]
      });
    })
    .catch(next);
});


router.get("/one-product/:id", uploader.single("image"), (req, res) => {
  const sneaker = {
    ...req.body
  };
  if (req.file) {
    sneaker.image = req.file.secure_url
  };
  sneakerModel
    .findById(req.params.id)
    .then((dbRes) => {
      res.render("one_product", {
        sneaker: dbRes
      });
    })
    .catch(dbErr => console.error(dbErr));
});



module.exports = router;