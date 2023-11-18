const express = require("express");
const router = express.Router()
const productController = require("../controllers/productController")
const isAuthenticated = require("../isAutheticated")
router.post("/product/create", isAuthenticated, productController.CreateProduct)
router.post("/product/buy", isAuthenticated, productController.BuyProduct)

module.exports = router