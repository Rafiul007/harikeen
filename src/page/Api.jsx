import React from 'react'
import './Api.css'
import Navbar from '../components/navbar/Navbar'
import User from '../components/users/User'
function Api() {
  return (
    <div className='container'>
      <div className="nav-section">
      <Navbar/>
      </div>
        <div className="sub-container">
            <User/>
        </div>
    </div>
  )
}

export default Api