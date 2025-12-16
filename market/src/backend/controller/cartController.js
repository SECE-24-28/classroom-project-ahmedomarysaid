const Cart = require("../Models/Cart");

exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ productId, quantity: 1 }]
    });
  } else {
    const item = cart.items.find(
      (i) => i.productId.toString() === productId
    );
    if (item) item.quantity += 1;
    else cart.items.push({ productId, quantity: 1 });
    await cart.save();
  }

  res.json(cart);
};
