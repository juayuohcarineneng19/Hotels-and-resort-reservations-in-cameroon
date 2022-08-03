import './Navbar.css'
import React from 'react'

const Navbar=() => {
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <span className='logo'>Iamavailable</span>
            <div className="navitems">
                <button className='navbutton'>Register</button>
                <button className='navbutton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar