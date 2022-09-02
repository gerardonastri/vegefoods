import './Edit.css'
import React, {useState, useEffect} from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import {axiosReq} from '../../utils/apiCalls'
import Sidebar from '../../components/Sidebar/Sidebar'
import AdminEdit from '../../components/AdminEdit/AdminEdit'
import {useSelector} from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";

const Edit = () => {
  const user = useSelector(state => state.user.currentUser);
  const id = useLocation().pathname.split('/')[3]
  const dataId = useLocation().pathname.split('/')[4]
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const pushUser = async () =>  {
        if(!user){
          navigate('/login')
        }
    }
    const getData = async () => {
      const res = await axiosReq.get(`${id}/find/${dataId}`)
      setData(res.data)
      setIsLoaded(true)
    }
    getData()
    pushUser()
}, [navigate, user, id, dataId])

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
        {isLoaded && (
          <AdminEdit type={id} data={data} />
        )}
      </div>
    </div>
  )
}

export default Edit