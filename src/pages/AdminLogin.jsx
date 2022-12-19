import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox} from '@mui/material';
import useLogin from '../context/pages/AdminLoginContext';
import axios from 'axios'
import useMain from '../context/main';
import types from '../context/types/mainTypes';

const AdminLogin = () => {
    const {state,setState} = useLogin();
    const {globalState,setGlobalState,setToken,dispatchGlobalState} = useMain();

    const w2 = "calc(100vw - 570px)";
    const ChangeState =(e)=>{
        setState(pr=>{
            return {...pr,[e.target.name]:e.target.value}
        })
    }

    const SubmitLogin =async (e)=>{
        e.preventDefault();
        console.log(state)

        const headers = { 
            'Content-Type': 'application/json',
        };

        const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/jwt-auth/login', state,{headers})
        let token = res.data.token;
        document.cookie = `jwtToken=${token}; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/`;
        setToken(token)
        dispatchGlobalState({key: types.AUTHENTICATED, payload:{token:'default', isAuth:true, user:res.data.user}});
        console.log(res.data)
    }

    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>

        <form onSubmit={SubmitLogin} className='d-flex a-i-center j-c-between f-wrap' style={{width: w2,padding:'30px',height:'50%' }}>
            <label style={{fontSize:'2rem'}}>Login</label>
            <TextField variant='standard' name={'email'} onChange={ChangeState} fullWidth placeholder='Enter Email' />
            <TextField variant='standard' name={'password'} onChange={ChangeState} fullWidth placeholder='Enter Password' />
            <Button type='submit' variant='outlined'>Login</Button>
        </form>
       
    </div> );
}
 
export default AdminLogin;