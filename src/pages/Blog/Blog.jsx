import React from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Posts from '../../components/Posts/Posts'
import Newsletter from '../../components/Newsletter/Newsletter'
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar'
import img1 from '../../images/featured-1.webp'


const blog = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="shop__hero">
            <img src={img1} alt="" />
            <h1>blog</h1>
        </div>
        <div className="blog__content">
            <div className="wrapper">
                <Posts />
                <BlogSidebar />
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default blog