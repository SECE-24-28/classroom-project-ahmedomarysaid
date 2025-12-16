import { useParams } from "react-router-dom";
import { products } from "./productsData";


function ProductDetails() {
  const { id } = useParams();
  
  const product = products.find(p => p._id === id);
  const handleAdddtoCart = () => {
    const exitingCart=JSON.parse(localStorage.getItem("cartItems")) || [];
    const exitingItem=exitingCart.find(item=>item._id===product._id);

    if(exitingItem){
      exitingItem.quantity +=1;
    }else{
      exitingCart.push({...product, quantity:1});
    }
    localStorage.setItem("cartItems", JSON.stringify(exitingCart));
  };

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name}  className="image"/>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <button onClick={handleAdddtoCart} className="addbtn">Add to Cart</button>

    </div>
  );
}

export default ProductDetails;