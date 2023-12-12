import React from 'react'
import './Model.css'
import { Button, TextField, Typography } from '@mui/material'
const Modal = ({closeModal}) => {
  return (
    <div className="modal-container" onClick={(e)=>{
        if(e.target.className === "modal-container"){closeModal()}
    }}>
        <div className="modal">
            <Typography variant='h5' px={{margin:5}}>Add User</Typography>
            <form className='modal-from'>
            <TextField id="outlined-basic" label="Name" variant="outlined" size='small' fullWidth color='success'/>
            <TextField id="outlined-basic" label="Username" variant="outlined" size='small' fullWidth color='success'/>
            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' fullWidth color='success'/>
            <TextField id="outlined-basic" label="Phone" variant="outlined" size='small' fullWidth color='success'/>
            <Button color='success' variant='contained' type='submit' >Add</Button>
            </form>
        </div>
    </div>
  )
}

export default Modal