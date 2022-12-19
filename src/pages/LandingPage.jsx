import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox,Select, MenuItem} from '@mui/material';
import useLandingPage from '../context/pages/LandingPageContext';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const {state,setState} = useLandingPage();
    const w2 = "calc(100vw - 570px)";
    let navigate = useNavigate();

    const redirectCreate = ()=>{
        let path = '/admin/create-game'
        navigate(path)
    }

    const redirectJoin= ()=>{
        console.log('JOIN')
    }

    const redirectQuestionnaire = ()=>{
        let path = '/admin/questionaire-engine'
        navigate(path)
    }
    const redirectMyQ = ()=>{
        let path = '/admin/questionaires'
        navigate(path)
    }
    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>
        <div className='d-flex a-i-center j-c-between f-wrap' style={{width: '20%',padding:'30px',height:'50%' }}>
            <Button type='button' onClick={redirectMyQ} variant='outlined'>My Questionnaires</Button>
            <Button type='button' onClick={redirectQuestionnaire} variant='outlined'>Create Questionnaire</Button>
            <Button type='button' onClick={redirectCreate} variant='outlined'>Create Game</Button>
            <Button  type='button' onClick={redirectJoin} variant='outlined'>Join</Button>
        </div>
        
    </div> );
}
 
export default LandingPage;