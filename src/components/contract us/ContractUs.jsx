import React, { useState } from 'react'
import './ContractUs.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { colors } from '@mui/material';

function ContractUs() {
    // RedGroccer
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            contract: '',
            address: '',
            subject: '',
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, "Must be 2 character or more").max(15, "Must be 15 character or less").required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            contract: Yup.string().min(11, "Must be 11 character").max(11, "Must be 11 character").required("Required"),
            address: Yup.string().min(2, "Must be 2 character or more").max(25, "Must be 15 character or less").required("Required"),
            subject: Yup.string().min(6, "Must be 6 character or more").required(),
            comment: Yup.string().max(200, "Must be 200 character or less")
        }),
        onSubmit: values => {
            console.log("on submit clicked")
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='contractUs-container'>
            <div className="contractUs-heading">
                <h1>Contract Us</h1>
                <p>Red Grocer Limited is an online grocery supermarket available in Chattogram City Corporation area. Our goal is to provide fast service and good grocery products to the people of Chittagong in any condition to save their valuable time.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="input-container">

                <div className="input-field">

                    <input className={`${formik.touched.name && formik.errors.name ? "invalid" : ""}`} type='text' placeholder='Name' name='name' id='name' {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='error-msg'>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="input-field">

                    <input type='email' placeholder='Email' name='email' id='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error-msg'>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="input-field">

                    <input type='text' placeholder='Contract number' name='contract' id='contract' {...formik.getFieldProps('contract')} />
                    {formik.touched.contract && formik.errors.contract ? (
                        <div className='error-msg'>{formik.errors.contract}</div>
                    ) : null}
                </div>
                <div className="input-field-container">
                <div className="input-area">
                    <input type='text' required />
                    <div className="labeline">Name<div className='red'>*</div> </div>
                </div>
            </div>
                <div className="input-field">

                    <input type='text' placeholder='Address' name='address' id='address' {...formik.getFieldProps('address')} />
                    {formik.touched.address && formik.errors.address ? (
                        <div className='error-msg'>{formik.errors.address}</div>
                    ) : null}
                </div>
                <div className="input-field">

                    <input type='text' placeholder='Subject' name='subject' id='subject' {...formik.getFieldProps('subject')} />
                    {formik.touched.subject && formik.errors.subject ? (
                        <div className='error-msg'>{formik.errors.subject}</div>
                    ) : null}
                </div>
                <div className="input-field">

                    <textarea placeholder='Your message' name='comment' id='comment' {...formik.getFieldProps('comment')} />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div className='error-msg'>{formik.errors.comment}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* material input try */}
            
        </div>
    )
}

export default ContractUs




