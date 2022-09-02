import React from 'react'
import './Product.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import { useState } from 'react'
import { addProduct } from '../../redux/cartRedux';
import { addProduct2 } from '../../redux/wishlistRedux';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'


const Product = ({product}) => {
  const [showActions, setShowActions] = useState(false)
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const handleClick = () => {
    if(cart.products.indeOf(product._id) === -1){
      dispatch(addProduct({...product, quantity: 1}))
    }
  }

  const handleWishlist = () => {
    if(cart.products.indeOf(product._id) === -1){
      dispatch(addProduct2({...product, quantity: 1}))
    }
  }

  return (
    <div className='product' onMouseEnter={() => setShowActions(true)} onMouseLeave={() => setShowActions(false)}>
      <img src={product.imgUrl} alt="" />
      <span className="product__title">{product.title}</span>
      <span className="product__price">${product.price}</span>
      <div className={showActions ? 'product__actions show' : "product__actions"}>
        <a href={`/product/${product._id}`} className="product__action"><GiHamburgerMenu /></a>
        <span  className="product__action"  onClick={handleClick}><FaShoppingCart /></span>
        <span onClick={handleWishlist} className="product__action"><AiFillHeart /></span>
      </div>
    </div>
  )
}

export default Product