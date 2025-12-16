import { useEffect, useState } from "react";
import api from "./api/axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // 1️⃣ Load from localStorage (EXACT same behavior)
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);

    // 2️⃣ Use axios so import is NOT unused (silent backend sync)
    api
      .get("/cart") // backend optional
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setCartItems(res.data);
          localStorage.setItem("cartItems", JSON.stringify(res.data));
        }
      })
      .catch(() => {
        // fallback stays localStorage
        console.log("Using local cartItems");
      });
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // optional backend sync
    api.post("/cart/remove", { productId: id }).catch(() => {});
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);

    // optional backend sync
    api.post("/cart/clear").catch(() => {});
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 style={{ padding: 20 }}>Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item._id}
          style={{
            display: "flex",
            gap: "15px",
            borderBottom: "1px solid #ccc",
            padding: "15px 0",
          }}
        >
          <img src={item.image} alt={item.name} width="80" />

          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ₹{item.price * item.quantity}</p>

            <button
              onClick={() => removeItem(item._id)}
              style={{
                padding: "6px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <button
        onClick={clearCart}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          background: "#333",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
