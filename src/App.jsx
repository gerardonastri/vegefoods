import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home/Home'
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import AdminDetails from "./pages/AdminDetails/AdminDetails";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import BlogSearch from "./pages/BlogSearch/BlogSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/shop" element={<Shop  />} />
        <Route exact path="/cart" element={<Cart  />} />
        <Route exact path="/contact" element={<Contact  />} />
        <Route exact path="/about" element={<About  />} />
        <Route exact path="/blog" element={<Blog  />} />
        <Route exact path="/blog/:id" element={<BlogDetails  />} />
        <Route exact path="/search" element={<BlogSearch  />} />
        <Route exact path="/wishlist" element={<Wishlist  />} />
        <Route exact path="/wishlist" element={<Wishlist  />} />
        <Route exact path="/product/:id" element={<Details  />} />
        <Route exact path="/admin" element={<Admin  />} />
        <Route exact path="/admin/:id" element={<AdminDetails  />} />
        <Route exact path="/admin/create/:id" element={<Create />} />
        <Route exact path="/admin/edit/:id/:id" element={<Edit />} />
        <Route exact path="/login" element={<Login  />} />
      </Routes>
    </Router>
  );
}

export default App;
