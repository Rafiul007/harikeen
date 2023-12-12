import React, { useState } from 'react'
import './Api.css'
import Navbar from '../components/navbar/Navbar'
import User from '../components/users/User'
import Modal from '../components/users/Modal'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
function Api() {
  const [modalOpen, setmodalOpen] = useState(false)
  return (
    <div className='container'>
      <div className="nav-section">
      <Navbar/>
      </div>
        <div className="sub-container">
            <User/>
            <Button onClick={()=>setmodalOpen(!modalOpen)} variant='contained' color='primary' sx={{ margin: 1}}> <AddIcon fontSize='small'/> </Button>
            {/* conditional rendering for Modal */}
            {
              modalOpen && <Modal closeModal={()=>{setmodalOpen(false)}} />
            }
        </div>
    </div>
  )
}

export default Api