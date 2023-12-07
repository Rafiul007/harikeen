import React, { useState } from 'react'
import './ContractUs.css'
function ContractUs() {
    const [info, setinfo] = useState({ name: '', email: '', contract: '', address: '', subject: '', commnet: '' })
    const allInfo=[];
    const handleChange = (event) => {
        const { name, value } = event.target;
        setinfo((prevInfo) => ({
            ...prevInfo, [name]: value,
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        allInfo.push(...allInfo, info)
        console.log('Form data',info);
        console.log('All info: ',allInfo);
        setinfo(
            { name: '', email: '', contract: '', address: '', subject: '', commnet: '' }
        )
    }
    return (
        <div className='contractUs-container'>
            <div className="contractUs-heading">
                <h1>Contract Us</h1>
                <p>Red Grocer Limited is an online grocery supermarket available in Chattogram City Corporation area. Our goal is to provide fast service and good grocery products to the people of Chittagong in any condition to save their valuable time.</p>
            </div>
            <div className="input-container">
                <div className="input-field">
                    <input type='text' placeholder='Name' name='name' value={info.name} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <input type='email' placeholder='Email' name='email' value={info.email} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <input type='text' placeholder='Contract number' name='contract' value={info.contract} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <input type='text' placeholder='Address' name='address' value={info.address} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <input type='text' placeholder='Subject' name='subject' value={info.subject} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <textarea placeholder='Your message' name='commnet' value={info.commnet} onChange={handleChange} />
                </div>
            </div>
            <button onClick={handleSubmit} type='submit'>Submit</button>
        </div>
    )
}

export default ContractUs