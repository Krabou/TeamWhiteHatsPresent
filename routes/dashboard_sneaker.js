const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");
const uploader = require("./../config/cloudinary");

/*Display page product*/

router.get(["/products_manage", "/prod-manage"], (req, res, next) => {
    sneakerModel
        .find()
        .then((dbRes) =>
            res.render("products_manage", {
                sneakers: dbRes
            }))
        .catch(next)
});

/*Add*/

router.get("/prod-add",  (req, res, next) => {
    sneakerModel 
       .find()
       .then((dbRes) => {
         console.log(" tous les products >>>>>>>", dbRes);
         res.render("products_add", { sneakers : dbRes }); 
       })
       .catch(next);
   });


router.post("/prod-add", uploader.single("image"), (req, res,next) => {
    const sneaker = {...req.body};
    if (req.file) {
        sneaker.image = req.file.secure_url
    };
    sneakerModel
      .create(sneaker)
      .then((dbRes) => {
        console.log("produit ajouté en bdd >>> ", dbRes);
        res.redirect("/sneakers/women");
      })
      .catch(next);
  });


/*Edit*/
router.get("/prod-edit/:id", (req, res, next) => {
    sneakerModel
        .findById(req.params.id)
        .then((dbRes) => res.render("product_edit", {
            sneaker: dbRes
        }))
        .catch(next)
});

router.post("/prod-edit/:id", uploader.single("image"), (req, res, next) => {
    const sneaker = {
        ...req.body
    };
    if (req.file) {
        sneaker.image = req.file.secure_url
    };
    sneakerModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then((dbRes) => res.redirect("/products_manage"))
        .catch(next)
});

/*Delete*/
router.get("/prod-delete/:id", (req, res, next) => {
    sneakerModel
        .findByIdAndDelete(req.params.id)
        .then((dbRes) => res.redirect("/products_manage"))
        .catch(next);
});

module.exports = router;