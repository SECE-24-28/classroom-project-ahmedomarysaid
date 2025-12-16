import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import SignUp from "./SignUp";
import "tailwindcss";


function App(){
  return(
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/product/:id" element={ <ProductDetails/> }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

       </Routes>
       </BrowserRouter>

  )
}
export default App;