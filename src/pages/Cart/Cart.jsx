import React from 'react'
import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { axiosReq } from '../../utils/apiCalls'
import {useSelector} from 'react-redux'
import img1 from '../../images/featured-1.webp'


const Cart = () => {
//   const id = useLocation().pathname.split('/')[2]
    const cart = useSelector(state => state.cart);
  
    console.log(cart);
  return (
    <div className='cart'>
        <Navbar />
        <div className="shop__hero">
            <img src={img1} alt="" />
            <h1>Cart</h1>
        </div>
        <div className="wrapper">
            <table>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>&nbsp;</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.products?.map(product => (
                        <tr>
                        <td className="cart__remove"><span>x</span></td>
                        <td className='cart__img'><img src={product.imgUrl} alt="" /></td>
                        <td className="cart__name">
                            <h3>{product.title}</h3>
                            <p>{product.desc.slice(0,100)}</p>
                        </td>
                        <td className="cart__price">${product.price}</td>
                        <td className='cart__quantity'><span>{product.quantity}</span></td>
                        <td className='cart__total'>${product.price * product.quantity}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart