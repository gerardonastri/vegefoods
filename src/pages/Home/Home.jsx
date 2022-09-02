import React, {useEffect, useState} from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import Categories from '../../components/Categories/Categories'
import Product from '../../components/Product/Product'
import Testimony from '../../components/Testimony/Testimony'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import {axiosReq} from '../../utils/apiCalls'


const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      const res = await axiosReq.get(`product/featured`)
      setProducts(res.data)
    }
    getProducts()
  })

  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <Categories />
      <div className="featuredProducts">
        <div className="wrapper">
          <span className="featuredProducts__subtitle">Featured Products</span>
          <h1 className="featuredProducts__title">Our Products</h1>
          <p className="featuredProducts__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <div className="products__container">
            {products?.map(product => (
              <Product product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
      <div className="featuredProducts">
        <div className="wrapper">
          <span className="featuredProducts__subtitle">Testimony</span>
          <h1 className="featuredProducts__title">Our satisfied customer says</h1>
          <p className="featuredProducts__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          <div className="testimony__container">
            <Testimony />
          </div>
        </div>
      </div>
      <hr />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home