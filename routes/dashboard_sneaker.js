const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("./../models/Sneaker");

/*Affichage page product*/
router.get("/products_manage", (req, res, next) => {
    sneakerModel
        .find()
        .then((dbRes) =>
            res.render("products_manage", {
                sneakers: dbRes
            }))
        .catch(next)
});

/*Edit*/
router.get("/prod-edit/:id", (req, res, next) => {
    sneakerModel
        .findById(req.params.id)
        .then((dbres) => res.render("product_edit", {
            sneaker: dbRes
        }))
        .catch(next)
});

router.post("/prod-edit/:id", (req, res, next) => {
    sneakerModel
        .findByIdAndUpdate(req.params.id, req.body)
        .then((dbRes) => res.redirect("/products_manage"))
        .catch(next)
});

/*Delete*/
router.post("/prod-delete/:id", (req, res, next) => {
    sneakerModel
        .findByIdAndDelete(req.params.id)
        .then((dbRes) => res.redirect("/products_manage"))
        .catch(next);
});

module.exports = router;