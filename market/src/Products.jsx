import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products as localProducts } from "./productsData";
import api from "./api/axios";

function Products() {
  const [products, setProducts] = useState(localProducts);

  useEffect(() => {
    // Use axios so import is NOT unused
    api
      .get("/products")
      .then((res) => {
        // only replace if backend sends data
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        }
      })
      .catch(() => {
        // fallback stays as productsData
        console.log("Using local productsData");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img
                className="card"
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />

              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
