import {Link} from "react-router-dom";
import "./App.css";


function Navbar(){

return(
<nav className="nav">
<Link to = "/"><i class="fa-regular fa-font"></i>Home</Link>
<Link to = "/products"><i class="fa-regular fa-font"></i>Products</Link>
<Link to = "/cart"><i class="fa-regular fa-font"></i>Cart</Link>
<Link to="/contact"><i class="fa-regular fa-font"></i>ContactUs</Link>
<Link to="/Login"></Link>
<Link to="Sign up"></Link>


</nav>

)
}

export default Navbar;