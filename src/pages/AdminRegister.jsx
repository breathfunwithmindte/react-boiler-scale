import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox} from '@mui/material';
import useRegister from '../context/pages/AdminRegisterContext';
import useMain from '../context/main';
import axios from 'axios'

const AdminRegister = () => {
    const {state,setState} = useRegister();
    const {globalState,setGlobalState} = useMain();

    const w2 = "calc(100vw - 570px)";
    const ChangeState =(e)=>{
        setState(pr=>{
            return {...pr,[e.target.name]:e.target.value}
        })
    }

    const SubmitRegister =async (e)=>{
        e.preventDefault();
        console.log(state)

        const headers = { 
            'Content-Type': 'application/json',
        };


        const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/jwt-auth/register',state,{headers})

        console.log(res.data)
        
    }

    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>

        <form onSubmit={SubmitRegister} className='d-flex a-i-center j-c-between f-wrap' style={{width: w2,padding:'30px',height:'50%' }}>
            <label style={{fontSize:'2rem'}}>Register</label>
            <TextField variant='standard' type='email' name={'email'} onChange={ChangeState} fullWidth placeholder='Enter Email' />
            <TextField variant='standard' name={'username'} onChange={ChangeState} fullWidth placeholder='Enter Username' />
            <TextField variant='standard' name={'password'} onChange={ChangeState} fullWidth placeholder='Enter Password' />
            <Button type='submit' variant='outlined'>Register</Button>
        </form>
       
    </div> );
}
 
export default AdminRegister;