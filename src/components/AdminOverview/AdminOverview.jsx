import React, {useState, useEffect} from 'react'
import './AdminOverview.css'
import {axiosReq} from '../../utils/apiCalls'

const AdminOverview = () => {
  const [users, setUsers] = useState(null);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axiosReq.get('admin/info');
      console.log(res.data);
      setUsers(res.data.users)
      setProducts(res.data.products)
      setPosts(res.data.posts)
      setMessages(res.data.messages)
    }
    getData()
  }, [])


  return (
    <div className='adminOverview'>
      <div className="adminOverview__top">
        <div className="adminOverview__top-item">
          <h3>Products</h3>
          <span>{products?.length}</span>
        </div>
        <div className="adminOverview__top-item">
          <h3>Posts</h3>
          <span>{posts?.length}</span>
        </div>
        <div className="adminOverview__top-item">
          <h3>Users</h3>
          <span>{users?.length}</span>
        </div>
      </div>
      <div className="adminOverview__bottom">
        <div className="adminOverview__bottom-admins">
          <h3>Admins</h3>
          {users?.map(user => (
            <div className="adminOverview__bottom-admin">
              <img src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt="" />
              <span><b>{user.username}</b></span>
              <a href="/users">Display</a>
            </div>
            ))}
        </div>
        <div className="adminOverview__bottom-messages">
          <h3>Messages</h3>
          <div className="adminOverview__bottom-messages_titles">
            <span>Name</span>
            <span>Date</span>
            <span className='email'>Email</span>
            <span>Status</span>
          </div>
          {messages?.map(message => (
            <div className="adminOverview__bottom-messages-item">
              <span>gerardo</span>
              <span className='admin__date'>21/06/2022, 11:56</span>
              <span className='email'>gerardonastri.dev@gmail.com</span>
              <span className="status">Not answered</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminOverview