import './AdminDetails.css'
import React, {useState, useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import {axiosReq} from '../../utils/apiCalls'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminData from '../../components/AdminData/AdminData'
import {useSelector} from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";

const AdminDetails = () => {
  const user = useSelector(state => state.user.currentUser);
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const id = useLocation().pathname.split('/')[2]
  const navigate = useNavigate()

    useEffect(() => {
        const pushUser = async () =>  {
            if(!user){
              navigate('/login')
            }
        }
        const getData = async () => {
          let res;
          if(id === 'user'){
            res = await axiosReq(`admin`)
          } else {
            res = await axiosReq(`${id}`)
          }
          setData(res.data)
          setIsLoaded(true)
        }
        pushUser()
        getData()
    }, [navigate, user, id])

  return (
    <div className='adminDetails'>
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
        {isLoaded && (
          <AdminData data={data && data} type={id} />
        )}
      </div>
    </div>
  )
}

export default AdminDetails