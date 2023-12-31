import React from 'react'
import './Home.css'
import Product from '../screens/Product'
import ContractUs from '../components/contract us/ContractUs'
import Navbar from '../components/navbar/Navbar'
function Home() {
  return (
    <div className='container'>
      <div className="nav-section">
      <Navbar/>
      </div>
        <div className="sub-container">
            <Product/>
        </div>
    </div>
  )
}

export default Home