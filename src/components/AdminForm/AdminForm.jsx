import React from 'react'
import { useState } from 'react'
import './AdminForm.css'
import {useSelector} from 'react-redux'
import { axiosReq } from '../../utils/apiCalls'

const AdminForm = ({type}) => {

  const user = useSelector(state => state.user.currentUser)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [ratings, setratings] = useState(200)
  const [sold, setSold] = useState(150)


  const handleSubmit = async (createType) => {
    if(createType === 'post'){
      const res = await axiosReq.post('post', {
        title,
        desc,
        imgUrl,
        content,
        category,
        user
      })
      window.location.reload()
    } else {
      const res = await axiosReq.post('product', {
        title,
        desc,
        imgUrl,
        category,
        price,
        sold,
        ratings
      })
      window.location.reload()
    }
  }

  if(type === 'post') return (
    <div className='adminForm'>
      <div className="adminForm__wrapper">
        <h1>Create Post</h1>
        <div className="adminForm__form">
          <div className="adminForm__form-formGroup">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="img">Image</label>
            <input type="text" name="img" id="img" onChange={(e) => setImgUrl(e.target.value)} />
          </div>
          <div className="adminForm__form-btn">
            <button onClick={() => handleSubmit('post')}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )

  if(type === 'product') return (
    <div className='adminForm'>
      <div className="adminForm__wrapper">
        <h1>Create Product</h1>
        <div className="adminForm__form">
          <div className="adminForm__form-formGroup">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="img">Image</label>
            <input type="text" name="img" id="img" onChange={(e) => setImgUrl(e.target.value)} />
          </div>
          <div className="adminForm__form-btn">
            <button onClick={() => handleSubmit('product')}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminForm