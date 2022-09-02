import React from 'react'
import './Shop.css'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'


const Shop = () => {
  return (
    <div className='shop'>
        <Navbar />
        <div className="shop__hero">
            <img src="https://preview.colorlib.com/theme/vegefoods/images/xbg_1.jpg.pagespeed.ic.CriyRQ4w7N.webp" alt="" />
            <h1>Products</h1>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )

}

export default Shop