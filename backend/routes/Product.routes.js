const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Products = require("../models/Product.model");

router.post("/products", (req, res, next) => {
  const { model, memory, carrier, price } = req.body;

  Products.create({
    model,
    memory,
    carrier,
    price,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});
router.get("/products", (req, res, next) => {
  Products.find().then((allProducts) => res.json(allProducts));
});

router.get("/products/:productId", (req, res, next) => {
  console.log("test");

  const { productId } = req.params;
  console.log(productId);
  Products.findById(productId).then((product) => {
    res.json(product);
  });
});

router.put("/products/:productId", (req, res, next) => {
  const { productId } = req.params;
  console.log("Test", productId);

  Products.findByIdAndUpdate(productId, req.body).then(
    res.json({ message: `Product with Id ${productId} has been updated.` })
  );
});

router.delete("/products/:productId", (req, res, next) => {
  const { productId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    res.status(400).json({ message: "Invalid ID" });
    return;
  }

  Products.findByIdAndDelete(productId)
    .then(() =>
      res.json({ message: `Product with ${productId} has been deleted` })
    )
    .catch((error) => res.json(error));
});

module.exports = router;
