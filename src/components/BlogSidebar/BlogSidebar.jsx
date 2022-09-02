import React, { useEffect } from 'react'
import { useState } from 'react'
import './BlogSidebar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {axiosReq} from '../../utils/apiCalls'
import {FaComments} from 'react-icons/fa'
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';


const BlogSidebar = () => {
  const [search, setSearch] = useState('')
  const [recentPosts, setRecentPosts] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosReq.get('post/recent')
        setRecentPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getPosts()
  }, [])

  const handleSearch = async () => {
    navigate(`/search?q=${search}`)
  }

  return (
    <div className='blogSidebar'>
      <div className="blogSidebar__search">
        <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
        <AiOutlineSearch onClick={handleSearch} />
      </div>
      <div className="blogSidebar__categories">
        <h3>Categories</h3>
        <div className="blogSidebar__categories-container">
          <a href="/blog/category/vegetables">Vegetables</a>
          <a href="/blog/category/fruits">Fruits</a>
          <a href="/blog/category/juice">Juice</a>
          <a href="/blog/category/dries">Dries</a>
        </div>
      </div>
      <div className="blogSidebar__recentPosts">
        <h3>Recent Blog</h3>
        <div className="blogSidebar__recentPosts-container">
          {recentPosts?.map(post => (
            <div className="recentPost">
              <img src={post.imgUrl} alt="" />
              <div className="recentPost__info">
                <h4>{post.title}</h4>
                <div className="post__info-up">
                  <span>
                    <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
                  </span>
                  <span>{post.user.username}</span>
                  <span className='post__comments'><FaComments /> 3</span>
                </div>
              </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSidebar