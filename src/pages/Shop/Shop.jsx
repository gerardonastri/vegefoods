import React from 'react'
import './Shop.css'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'
import img1 from '../../images/featured-1.webp'


const Shop = () => {
  return (
    <div className='shop'>
        <Navbar />
        <div className="shop__hero">
            <img src={img1} alt="" />
            <h1>Products</h1>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )

}

export default Shop