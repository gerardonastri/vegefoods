import './Create.css'
import React, {useState, useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import {axiosReq} from '../../utils/apiCalls'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminForm from '../../components/AdminForm/AdminForm'
import {useSelector} from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";

const Create = () => {

  const user = useSelector(state => state.user.currentUser);
  const id = useLocation().pathname.split('/')[3]
  const navigate = useNavigate()

  useEffect(() => {
    const pushUser = async () =>  {
        if(!user){
          navigate('/login')
        }
    }
    pushUser()
}, [navigate, user, id])

  return (
    <div>
      <div className="admin__navbar">
        <h2>Admin Page</h2>
        <div className="admin__navbar-links">
            <LogoutIcon />
            <NotificationsNoneIcon />
            <SettingsIcon />
        </div>
      </div>
      <div className="admin__wrapper">
        <Sidebar />
        <AdminForm type={id} />
      </div>
    </div>
  )
}

export default Create