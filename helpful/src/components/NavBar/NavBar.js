import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/helpful-low-resolution-color-logo.png'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // we should delegate the actual logging out to the users service
        userService.logOut()
        setUser(null)
      }

  return (
    <div className='top-nav-container'>
        <div className='logo-container'>
            <img src={logo} alt='logo' />
        </div>
        <div className='nav-container'>
            <div className='nav-item'>
                <button><Link to='/'>Home</Link></button>
            </div>
            <div className='nav-item'>
                <button><Link to='/scheduledservices'>ScheduledServices</Link></button>
            </div>
            <div className='nav-item'>
                <button><Link to='/Homes'>Manage Homes</Link></button>
            </div>
            <div className='nav-item'>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
    </div>
    </div>
  )
}