import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import jwtDecode from 'jwt-decode'
import ClassNames from 'classnames'

function SideBar () {
  const user = AuthService.getCurrentUser()
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [, setCurrentUser] = useState(null)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      const decoded = jwtDecode(user.token)
      if (decoded.exp * 1000 < Date.now()) AuthService.logout()
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.user.role.includes('ADMIN_ROLE'))
    }
  }, [])

  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <a href='index3.html' className='brand-link'>
        <img
          src='dist/img/AdminLTELogo.png'
          alt='AdminLTE Logo'
          className='brand-image img-circle elevation-3'
          style={{ opacity: '.8' }}
        />
        <span className='brand-text font-weight-light'>AdminLTE 3</span>
      </a>
      <div className='sidebar'>
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
          <div className='image'>
            <img
              src='dist/img/user2-160x160.jpg'
              className='img-circle elevation-2'
              alt='User Image'
            />
          </div>
          <div className='info'>
            <a href='#' className='d-block'>
              {user.user.name}
            </a>
          </div>
        </div>

        <nav className='mt-2'>
          <ul
            className='nav nav-pills nav-sidebar flex-column'
            data-widget='treeview'
            role='menu'
            data-accordion='false'
          >
            <li className='nav-item '>
              <NavLink
                to='/profile'
                className={({ isActive }) =>
                  ClassNames('nav-link', { active: isActive })}
              >
                <i className='nav-icon fas fa-tachometer-alt' />
                <p>Dashboard</p>
              </NavLink>
            </li>
            {!showAdminBoard && (
              <li className='nav-item'>
                <NavLink
                  to='/user'
                  className={({ isActive }) =>
                    ClassNames('nav-link', { active: isActive })}
                >
                  <i className='nav-icon fas fa-th' />
                  <p>
                    User Charts
                    <span className='right badge badge-danger'>New</span>
                  </p>
                </NavLink>
              </li>
            )}
            {showAdminBoard && (
              <li className='nav-item'>
                <NavLink
                  to='/admin'
                  className={({ isActive }) =>
                    ClassNames('nav-link', { active: isActive })}
                >
                  <i className='nav-icon fas fa-th' />
                  <p>
                    Things Charts
                    <span className='right badge badge-danger'>New</span>
                  </p>
                </NavLink>
              </li>
            )}

            <li className='nav-header'>EXAMPLES</li>
            <li className='nav-item'>
              <a href='pages/calendar.html' className='nav-link'>
                <i className='nav-icon far fa-calendar-alt' />
                <p>
                  Calendar
                  <span className='badge badge-info right'>2</span>
                </p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar
