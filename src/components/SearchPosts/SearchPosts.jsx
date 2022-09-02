import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {axiosReq} from '../../utils/apiCalls'
import {FaComments} from 'react-icons/fa'
import Moment from 'react-moment';

const SearchPosts = ({posts}) => {
  return (
    <div className='posts'>
      {posts?.map(post => (
        <div className="post">
        <img src={post.imgUrl} alt="" />
        <div className="post__info">
          <div className="post__info-up">
            <span>
              <Moment format="DD MMMM YYYY">{post.createdAt}</Moment>
            </span>
            <span>{post.user.username}</span>
            <span className='post__comments'><FaComments /> 3</span>
          </div>
          <a href={`/blog/${post._id}`}>
            <h3>{post.title}</h3>
          </a>
          <p>{post.desc}</p>
          <a href={`/blog/${post._id}`}><button>Read more</button></a>
        </div>
      </div>
      ))}
    </div>
  )
}

export default SearchPosts