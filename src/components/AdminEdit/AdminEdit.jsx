import React, {useState} from 'react'
import './AdminEdit.css'
import {useSelector} from 'react-redux'
import { axiosReq } from '../../utils/apiCalls'

const AdminEdit = ({type, data}) => {
  const user = useSelector(state => state.user.currentUser)
  
  const [title, setTitle] = useState(data?.title)
  const [desc, setDesc] = useState(data?.desc)
  const [imgUrl, setImgUrl] = useState(data?.imgUrl)
  const [price, setPrice] = useState(data?.price)
  const [category, setCategory] = useState(data?.category)
  const [content, setContent] = useState(data?.content)
  const [ratings, setRatings] = useState(200)
  const [sold, setSold] = useState(150)

  

  const handleSubmit = async (createType) => {
    if(createType === 'post'){
      const res = await axiosReq.put(`post/${data._id}`, {
        title,
        desc,
        imgUrl,
        content,
        category,
        user
      })
      window.location.reload()
    } else {
      const res = await axiosReq.put(`product/${data._id}`, {
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
        <h1>Update Post</h1>
        <div className="adminForm__form">
          <div className="adminForm__form-formGroup">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="img">Image</label>
            <input type="text" name="img" id="img" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          </div>
          <div className="adminForm__form-btn">
            <button onClick={() => handleSubmit('post')}>Update</button>
          </div>
        </div>
      </div>
    </div>
  )


  if(type === 'product') return (
    <div className='adminForm'>
      <div className="adminForm__wrapper">
        <h1>Update Product</h1>
        <div className="adminForm__form">
          <div className="adminForm__form-formGroup">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="adminForm__form-formGroup">
            <label htmlFor="img">Image</label>
            <input type="text" name="img" id="img" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
          </div>
          <div className="adminForm__form-btn">
            <button onClick={() => handleSubmit('product')}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEdit