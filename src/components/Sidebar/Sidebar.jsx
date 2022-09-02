import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MessageIcon from '@mui/icons-material/Message';
import {useLocation} from 'react-router-dom'

const Sidebar = () => {

  const id = useLocation().pathname.split('/')[2]

  return (
    <div className='sidebar'>
      <div className="group">
        <span className="title">Dashboard</span>
        <div className="links">
          <a href='/admin' className={id === '/admin' && "active"}><HomeIcon /> Home </a>
          <a href='/admin'><AnalyticsIcon /> Analytics </a>
          <a href="/admin"><ManageAccountsIcon /> Manage </a>
        </div>
      </div>
      <div className="group">
        <span className="title">Quick Menu</span>
        <div className="links">
          <a href="/admin/user" className={id  === '/admin/user' && "active"}><PersonOutlineOutlinedIcon /> Users </a>
          <a href="/admin/product" className={id === '/admin/product' && "active"}><GroupsOutlinedIcon /> Products </a>
          <a href="/admin/post" className={id === '/admin/post' && "active"}><NewspaperOutlinedIcon /> Posts </a>
          <a href="/admin/message" className={id === '/admin/message' && "active"}><MessageIcon /> Messages </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar