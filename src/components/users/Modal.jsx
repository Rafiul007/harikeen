import React from 'react'
import './Model.css'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Modal = ({ closeModal }) => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required*"),
      last_name: Yup.string().required("Required*"),
      email: Yup.string().email("Not a valid email").required("Required*")
    }),
    onSubmit: (values) => {
      console.log("on submit clicked:", values);
      axios.post('https://reqres.in/api/users', values).then(res => console.log(res)).catch(err => console.log(err))

    }
  })

  const handlePut = () => {
    ;
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
        <form onSubmit={formik.handleSubmit} className="modal-from">
          <div className="input-field">

            <input type='text' placeholder='First Name' name='first_name' id='first_name' {...formik.getFieldProps('first_name')} />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className='error-msg'>{formik.errors.first_name}</div>
            ) : null}
          </div>
          <div className="input-field">

            <input type='text' placeholder='Last Name' name='last_name' id='last_name' {...formik.getFieldProps('last_name')} />
            {formik.touched.last_name && formik.errors.last_name ? (
              <div className='error-msg'>{formik.errors.last_name}</div>
            ) : null}
          </div>
          <div className="input-field">

            <input type='text' placeholder='Email' name='email' id='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div className='error-msg'>{formik.errors.email}</div>
            ) : null}
          </div>


          <button type='submit'>Add user</button>
        </form>

      </div>
    </div>
  )
}

export default Modal


// note
// formik and materialUI clashed.
//there is another way in the documentation to use Formik with MaterialUI. Review the code