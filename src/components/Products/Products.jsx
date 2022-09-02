import React from 'react'
import { useState } from 'react'
import './Products.css'
import { Pagination as Pages } from '@mui/material';
import Product from '../Product/Product'
import { useEffect } from 'react';
import {axiosReq} from '../../utils/apiCalls'

const Products = () => {
  const [category, setCategory] = useState('all')

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage, setProductsPerPage] = useState(8);
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      if(category !== 'all'){
        const res = await axiosReq.get(`product/cat/${category}`)
        setProducts(res.data)
      } else {
        const res = await axiosReq.get(`product`)
        setProducts(res.data)
      }
    }
    getProducts()
  }, [category])

  const indexOfLastImage = currentPage * ProductsPerPage;
    const indexOfFirstProducts = indexOfLastImage - ProductsPerPage;
    const currentProducts = products?.slice(indexOfFirstProducts, indexOfLastImage);
    
    const handleChange = (page) => {
        setCurrentPage(page);
        
    }

  return (
    <div className='products'>
      <div className="wrapper">
        <div className="products__categories">
          <span className={category === 'all' ? 'products__category selected' : 'products__category'} onClick={() => setCategory('all')}>All</span>
          <span className={category === 'vegetables' ? 'products__category selected' : 'products__category'} onClick={() => setCategory('vegetables')} >Vegetables</span>
          <span className={category === 'fruits' ? 'products__category selected' : 'products__category'} onClick={() => setCategory('fruits')} >Fruits</span>
          <span className={category === 'juice' ? 'products__category selected' : 'products__category'} onClick={() => setCategory('juice')} >Juice</span>
          <span className={category === 'dried' ? 'products__category selected' : 'products__category'} onClick={() => setCategory('dried')} >Dried</span>
        </div>
        <div className="products__container">
          {currentProducts?.map(product => (
            <Product product={product} key={product._id} />
          ))}
        </div>
        <Pages variant="outlined"  onChange={(e) => handleChange(e.target.textContent)} sx={{display: 'flex', justifyContent: 'center', margin: '30px'}} count={Math.ceil(products?.length / ProductsPerPage)} />
      </div>
    </div>
  )
}

export default Products