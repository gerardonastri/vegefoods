import React, { useState } from 'react'
import './Details.css'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'
import { axiosReq } from '../../utils/apiCalls'
import Rating from '@mui/material/Rating';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Details = () => {
  const [value, setValue] = useState(3)
  const [product, setProduct] = useState(null)
  const [size, setSize] = useState('')
  const [counter, setCounter] = useState(1)
  const id = useLocation().pathname.split('/')[2]

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosReq.get(`product/find/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProduct()
  }, [id])

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({...product, quantity: counter}))
  }


  return (
    <div className='details'>
      <Navbar />
      <div className="shop__hero">
        <img src="https://preview.colorlib.com/theme/vegefoods/images/xbg_1.jpg.pagespeed.ic.CriyRQ4w7N.webp" alt="" />
        <h1>Product</h1>
        </div>
      <div className="details__product">
        <img src={product?.imgUrl} alt="" />
        <div className="details__product-info">
          <h3>{product?.title}</h3>
          <div className="product__moreInfo">
            <span className="rating">
              <span>{value}</span>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </span>
            <span className="ratings"><b>{product?.ratings}</b> rating</span>
            <span className='sold'><b>{product?.sold}</b> Sold</span>
          </div>
          <span className="details__product-price">${product?.price}</span>
          <div className="details__product-desc"><p>{product?.desc}</p></div>
          <select name="size" id="">
            <option value="small" selected>small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra">extra</option>
          </select>
          <div className="details__product-counter">
            <span className="counter__operator" onClick={() => setCounter(prev => prev - 1)}>-</span>
            <span className="quantity">{counter}</span>
            <span className="counter__operator" onClick={() => setCounter(prev => prev + 1)}>+</span>
          </div>
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Details