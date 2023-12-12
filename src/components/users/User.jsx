import React, { useState } from 'react'
import './User.css'
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
function User() {
    const [fetchData, setfetchData] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setfetchData(response.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const handleDelete = (id)=>{
        console.log(id)
    }

    return (
        <div className="user container">
            {/* <div className='user'>
                {
                    fetchData.map((item) => {
                        const { id, name, username, email, phone } = item;
                        return (
                            <div className="user-card">
                                <h1>{username}</h1>
                                <p>{name}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }

            </div> */}
            {/* <div className="api-btn"> */}
                <Button variant='contained' color='success' sx={{margin:2,padding:1}} onClick={() => fetchUsers()}>Click Me!</Button>
                {/* <button onClick={() => fetchUsers()}>Click me!</button> */}
            {/* </div> */}

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            fetchData.map((row) => {
                                const { id, name, username, email, phone } = row;
                                return (
                                    <TableRow key={id}>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{username}</TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell>{phone}</TableCell>
                                        <TableCell className='btn-cell'>
                                            <Button variant='contained' color='error' sx={{ margin: 1 }} onClick={(id)=>handleDelete(id)} ><DeleteIcon fontSize='small' /></Button>
                                            <Button variant='contained' color='primary' sx={{ margin: 1}}><VisibilityIcon fontSize='small'/></Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        // https://jsonplaceholder.typicode.com/users
    )
}

export default User