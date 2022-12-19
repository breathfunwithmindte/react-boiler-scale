import React from 'react';
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import useMain from '../context/main';
import types from '../context/types/mainTypes';

const Header = () => {
  const {globalState,setGlobalState,setToken,dispatchGlobalState} = useMain();
  const navigate = useNavigate();

  const RedirectLanding = ()=>{
    let path='/'
    navigate(path)
  }
  const RedirectLogin = ()=>{
    let path='/admin/login'
    navigate(path)
  }
  const RedirectRegister = ()=>{
    let path='/admin/register'
    navigate(path)
  }

  const Logout = ()=>{
    document.cookie= `jwtToken=; expires=${new Date().getDate()}; path=/;`;
    dispatchGlobalState({key:types.LOGOUT});
  }
  
  return (
    <header className="d-flex a-i-center j-c-between bg-1 h-4 sp-5" style={{zIndex: 100, boxShadow: "1px 1px 6.9px 0.14px rgba(0, 0, 0, 0.14)", position: "relative"}}>
      <section className="d-flex a-i-center"  onClick={RedirectLanding}>
        <strong style={{marginRight: "1.4rem"}}>Kahoot</strong>
      </section>
      <div>
        <Button onClick={RedirectLogin}>Login</Button>
        <Button onClick={RedirectRegister}>Register</Button>
        <Button onClick={Logout}>Logout</Button>
      </div>
    </header>
  );
};

export default Header;