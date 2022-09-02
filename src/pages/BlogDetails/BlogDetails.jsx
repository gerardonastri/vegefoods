import React, {useState, useEffect} from 'react'
import './BlogDetails.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar'
import { useLocation } from 'react-router-dom'
import { axiosReq } from '../../utils/apiCalls'

const BlogDetails = () => {
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const id = useLocation().pathname.split('/')[2]

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axiosReq.get(`post/find/${id}`);
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getPost()
    }, [id])

  return (
    <div className=''>
        <Navbar />
        <div className="shop__hero">
            <img src="https://preview.colorlib.com/theme/vegefoods/images/xbg_1.jpg.pagespeed.ic.CriyRQ4w7N.webp" alt="" />
            <h1>blog</h1>
        </div>
        <div className="blogDetails">
            <div className="wrapper">
                <div className="blogDetails__container">
                    <div className='blogDetails__content' dangerouslySetInnerHTML={{__html: data?.content}} />
                </div>
                <BlogSidebar />
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default BlogDetails