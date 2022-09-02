import React from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Posts from '../../components/Posts/Posts'
import Newsletter from '../../components/Newsletter/Newsletter'
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar'


const blog = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="shop__hero">
            <img src="https://preview.colorlib.com/theme/vegefoods/images/xbg_1.jpg.pagespeed.ic.CriyRQ4w7N.webp" alt="" />
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