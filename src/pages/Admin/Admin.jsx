import React, {useState, useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import {axiosReq} from '../../utils/apiCalls'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminOverview from '../../components/AdminOverview/AdminOverview'
import {useSelector} from 'react-redux'
import './Admin.css'
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const user = useSelector(state => state.user.currentUser);
    const [users, setUsers] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const pushUser = async () =>  {
            if(!user){
              navigate('/login')
            }
        }
        const getData = async () => {
          const userRes = await axiosReq('admin')
          setUsers(userRes)
        }
        pushUser()
        getData()
    }, [navigate, user])

  return (
    <div className='admin'>
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
            <AdminOverview />
        </div>
    </div>
  )
}

export default Admin