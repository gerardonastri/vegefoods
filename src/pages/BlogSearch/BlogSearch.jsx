import React, {useState, useEffect} from 'react'
import './BlogSearch.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchPosts from '../../components/SearchPosts/SearchPosts'
import Newsletter from '../../components/Newsletter/Newsletter'
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar'
import {useLocation} from 'react-router-dom'
import { axiosReq } from '../../utils/apiCalls'
import img1 from '../../images/featured-1.webp'



const BlogSearch = () => {
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const query = useLocation().search

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axiosReq.get(`post/search${query}`)
        setData(res.data)
        setIsLoaded(true)
      } catch (error) {
        console.log(error);
      }
    }
    getBlog()
  }, [query])

  return (
    <div className=''>
        <Navbar />
        <div className="shop__hero">
            <img src={img1} alt="" />
            <h1>blog</h1>
        </div>
        <div className="blog__content">
            <div className="wrapper">
              {isLoaded && (
                <SearchPosts posts={data} />
              )}
              <BlogSidebar />
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default BlogSearch