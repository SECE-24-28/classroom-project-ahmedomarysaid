import './App.css';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* 🔐 LOGIN / SIGNUP SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "15px",
          padding: "15px"
        }}
      >
        <Link to="/login" className="nav-btn">
          Login
        </Link>
        <Link to="/signup" className="nav-btn">
          Signup
        </Link>
      </div>

      {/* HERO SECTION */}
      <div className="Home">
        <h3>E-COMMERCE SHOPPING CENTRE</h3>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <div className="icon"></div>
      </div>

      <center>
        <div className="card">
          <p className="desc">
            Discover the art of self-expression; our designs help you say who you
            are without having to speak.
            <span>
              <input type="button" value="Shop Now" className="btn" />
            </span>
          </p>

          <span>
            <img
              src="promos.jpg"
              alt="promo"
              className="shopping"
            />
          </span>
        </div>
      </center>

      {/* PROMO PRODUCTS */}
      <div className="promo">

        {/* PRODUCT 1 */}
        <div className="promo1">
          <center>
            <img src="jacket.jpg" alt="jacket" className="image" />
          </center>


           <span className='product'>
          <p className="product-desc">Jacket</p>
          <p className="price">₹5000</p>
          </span>

          <center>
            <input type="button" value="Add to Cart" className="addbtn" />
          </center>
        </div>

        {/* PRODUCT 2 */}
        <div className="promo2">
          <center>
            <img src="t-shirt.jpg" alt="t-shirt" className="image" />
          </center>

          <span className='product'>
          <p className="product-desc">T-shirt</p>
          <p className="price">₹2000</p>
          </span>


          <center>
            <input type="button" value="Add to Cart" className="addbtn" />
          </center>
        </div>

        {/* PRODUCT 3 */}
        <div className="promo3">
          <center>
            <img src="cloth1.jpg" alt="cloth" className="image" />
          </center>


             <span className='product'>
          <p className="product-desc">FullClothSet</p>
          <p className="price">₹4000</p>
          </span>

          <center>
            <input type="button" value="Add to Cart" className="addbtn" />
          </center>
        </div>

        {/* PRODUCT 4 */}
        <div className="promo4">
          <center>
            <img src="glass.jpg" alt="glasses" className="image" />
          </center>

           <span className='product'>
          <p className="product-desc">Glasses</p>
          <p className="price">₹1000</p>
          </span>

          <center>
            <input type="button" value="Add to Cart" className="addbtn" />
          </center>
        </div>

       
        <div className="promo5">
          <center>
            <img src="long.jpg" alt="longsleeve" className="image" />
          </center>
           <span className='product'>
          <p className="product-desc">Jacket</p>
          <p className="price">₹5000</p>
          </span>

          <center>
            <input type="button" value="Add to Cart" className="addbtn" />
          </center>
        </div>

      </div>
    </div>
  );
}

export default Home;
