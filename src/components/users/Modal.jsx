import React from 'react'
import './Model.css'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
const Modal = ({ closeModal }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      useName: "",
      phone: ""
    },
    onSubmit: (values) => {
      console.log("on submit clicked:", values);
      
    }
  })

  const handlePut =()=>{
    axios.post('https://reqres.in/api/users', {
        first_name: "Rafiul",
        last_name: 'Faisal',
        email: "rafiul.faisal@gmail.com"
      }).then(res => console.log(res)).catch(err => console.log(err));
  }
  return (
    <div className="modal-container" onClick={(e) => {
      if (e.target.className === "modal-container") { closeModal() }
    }}>
      <div className="modal">
        <Typography variant='h5' px={{ margin: 5 }}>Add User</Typography>
        {/* <form className='modal-from'>
          <TextField id="outlined-basic" name='name' label="Name" variant="outlined" size='small' fullWidth color='success' {...formik.getFieldProps('name')} />
          <TextField id="outlined-basic" name='userName' label="Username" variant="outlined" size='small' fullWidth color='success' {...formik.getFieldProps('userName')} />
          <TextField id="outlined-basic" name='email' label="Email" variant="outlined" size='small' fullWidth color='success' {...formik.getFieldProps('email')} />
          <TextField id="outlined-basic" name='phone' label="Phone" variant="outlined" size='small' fullWidth color='success' {...formik.getFieldProps('phone')} />
          <Button color='success' variant='contained' type='submit' >Add</Button>
        </form> */}
        <button onClick={handlePut}>PUT</button>
      </div>
    </div>
  )
}

export default Modal


// note
// formik and materialUI clashed. 
//there is another way in the documentation to use Formik with MaterialUI. Review the code