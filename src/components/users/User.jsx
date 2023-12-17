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
            const response = await axios.get('https://reqres.in/api/users?page=2');
            setfetchData(response.data.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const handleDelete = (id)=>{
        const index = fetchData.findIndex((item)=>item.id === id);
        if(index !== -1){
            fetchData.splice(index,1);
            setfetchData([...fetchData]);
        }
        console.log(index)
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
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            fetchData.map((row) => {
                                const { id, first_name, last_name, email } = row;
                                return (
                                    <TableRow key={id}>
                                        <TableCell>{first_name}</TableCell>
                                        <TableCell>{last_name}</TableCell>
                                        <TableCell>{email}</TableCell>
                                        <TableCell className='btn-cell'>
                                            <Button variant='contained' color='error' sx={{ margin: 1 }} onClick={()=>handleDelete(id)} ><DeleteIcon fontSize='small' /></Button>
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