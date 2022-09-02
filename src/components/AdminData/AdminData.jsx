import React from 'react'
import './AdminData.css'
import {FaPencilAlt} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { axiosReq } from '../../utils/apiCalls'

const AdminData = ({data, type}) => {

  const handleDelete = async (id) => {
    if(window.confirm('are you sure you want to delete this?')){
      try {
        await axiosReq.delete(`${type}/${id}`)
      } catch (error) {
        console.log(error);
      }
    }
  }

  if(type === "post") return (
    <div className='adminData'>
      <a href="/admin/create/post">Create</a>
      <div className="adminData__table">
        <div className="adminData__table-titles">
          <span>title</span>
          <span>desc</span>
          <span>user</span>
          <span className='password'>category</span>
          <span>actions</span>
        </div>
        {data?.map(post => (
          <div className="adminData__table-data">
            <span>{post.title}</span>
            <span>{post.desc.slice(0,50)}</span>
            <span>{post.user.username}</span>
            <span className='password'>{post.category}</span>
            <span className='actions'>
              <a href={`/admin/edit/post/${post._id}`} className="actions__edit"><FaPencilAlt /></a>
              <span onClick={() => handleDelete(post._id)} className='actions__delete'><AiOutlineClose /></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  ) 
  
  if(type === "message") return (
    <div className='adminData'>
      <a href="/admin/create/message">Create</a>
      <div className="adminData__table">
        <div className="adminData__table-titles">
          <span>email</span>
          <span>subject</span>
          <span>message</span>
          <span className='password'>answered</span>
          <span>actions</span>
        </div>
        {data?.map(message => (
          <div className="adminData__table-data">
            <span>{message.email}</span>
            <span>{message.subject}</span>
            <span>{message.message.slice(0,50)}</span>
            <span className='password'>{message.answered}</span>
            <span className='actions'>
              <a href="/admin/edit" className="actions__edit"><FaPencilAlt /></a>
              <span onClick={() => handleDelete(message._id)} className='actions__delete'><AiOutlineClose /></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  ) 

  if(type === "product") return (
    <div className='adminData'>
      <a href="/admin/create/product">Create</a>
      <div className="adminData__table">
        <div className="adminData__table-titles">
          <span>title</span>
          <span>desc</span>
          <span>price</span>
          <span className='password'>category</span>
          <span>actions</span>
        </div>
        {data?.map(product => (
          <div className="adminData__table-data">
            <span>{product.title}</span>
            <span>{product.desc.slice(0,50)}</span>
            <span>{product.price}</span>
            <span className='password'>{product.category}</span>
            <span className='actions'>
              <a href={`/admin/edit/product/${product._id}`} className="actions__edit"><FaPencilAlt /></a>
              <span onClick={() => handleDelete(product._id)} className='actions__delete'><AiOutlineClose /></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  ) 

  if (type === 'user' ) return (
    <div className='adminData'>
      <a href="/admin/create/user">Create</a>
      <div className="adminData__table">
        <div className="adminData__table-titles">
          <span>ID</span>
          <span>username</span>
          <span>email</span>
          <span className='password'>password</span>
          <span>actions</span>
        </div>
        {data?.map(user => (
          <div className="adminData__table-data">
            <span>{user._id}</span>
            <span>{user.username}</span>
            <span>{user.email}</span>
            <span className='password'>{user.password.slice(0,30)}</span>
            <span className='actions'>
              <a href="/admin/edit" className="actions__edit"><FaPencilAlt /></a>
              <span onClick={() => handleDelete(user._id)} className='actions__delete'><AiOutlineClose /></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminData