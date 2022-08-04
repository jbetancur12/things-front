import { useSubscription } from 'mqtt-react-hooks'
import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useMQTT } from '../../context/mqtt'
import AuthService from '../../services/auth.service'
import Header from '../Admin/Header/Header'
import SideBar from '../Admin/SideBar/SideBar'

const Layout = ({ children }) => {
  const { message } = useSubscription(['json'])
  const { setTemp, setHumidity } = useMQTT()
  const location = useLocation()
  const auth = AuthService.getCurrentUser()

  useEffect(() => {
    if (message?.topic === 'json') {
      const { temperature, humidity } = JSON.parse(message.message)
      setTemp(temperature)
      setHumidity(humidity)
    }
  }, [message])

  return auth
    ? (
      <div>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
          <div className='content'>
            <div className='container-fluid '>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      )
    : (
      <Navigate to='/login' state={location.pathname} />
      )
}

export default Layout
