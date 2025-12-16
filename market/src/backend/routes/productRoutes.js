const router = require("express").Router();
const { getProducts } = require("../controller/productController");

router.get("/", getProducts);

module.exports = router;
