import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import {IoMdCart} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <a href="/" className="logo">VEGEFOODS</a>
        <div className={isActive ? 'navbar__links active' : 'navbar__links'}>
          <a href="/">HOME</a>
          <div className="dropdown" onMouseEnter={() => {setShowDropdown(true);}} >
            <span>Shop</span>
            <div className={showDropdown ? "list show" :"list"} onMouseLeave={() => setShowDropdown(false)}>
              <a href="/shop" className="listItem">Shop</a>
              <a href="/wishlist" className="listItem">Wishlist</a>
              <a href="/cart" className="listItem">Cart</a>
              <a href="/checkout" className="listItem">Checkout</a>
            </div>
          </div>
          <a href="/about">ABOUT</a>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
          <a href="/cart" className="cart">
            <IoMdCart />
            <span>[{quantity}]</span>
          </a>
          <div className="closeNavbar" onClick={() => setIsActive(false)}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className='hamburger' onClick={() => {
        setIsActive(prev => !prev);
        setShowDropdown(false)
        }}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  )
}

export default Navbar