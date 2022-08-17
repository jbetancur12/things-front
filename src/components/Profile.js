import React from 'react'
import AuthService from '../services/auth.service'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser()
  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>
          <strong>{currentUser.user.name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{' '}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.user._id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  )
}

export default Profile
