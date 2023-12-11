import React from 'react'
import './Contract.css'
import Navbar from '../components/navbar/Navbar'
import ContractUs from '../components/contract us/ContractUs'
function Contract() {
  return (
    <div className='container'>
      <div className="nav-section">
      <Navbar/>
      </div>
        <div className="sub-container">
          <ContractUs/>
        </div>
    </div>
  )
}

export default Contract