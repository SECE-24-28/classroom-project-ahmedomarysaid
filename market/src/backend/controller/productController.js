const Product = require("../Models/Product");

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
