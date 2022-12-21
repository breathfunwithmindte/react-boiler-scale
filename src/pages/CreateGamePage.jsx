import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox,Select, MenuItem} from '@mui/material';
import useCreateGame from '../context/pages/CreateGameContext';
import * as numberGenerator from "number-generator";

const CreateGamePage = () => {
    const {state,setState,pin,setPin} = useCreateGame();
    const w2 = "calc(100vw - 570px)";
    const select = [
        {
            value:'ITIL 2',
            label:'ITIL 2'
        },{
            value:'ITSM',
            label:'ITSM'
        },{
            value:'PRINCE 2',
            label:'PRINCE 2'
        }
    ]
    const ChangeState =(e)=>{
        setState(pr=>{
            return {...pr,[e.target.name]:e.target.value}
        })
    }

    const CreateRoom =(e)=>{
        e.preventDefault();
        console.log(state)
        setPin(numberGenerator.murmurhash2_x86_32("something"));
        console.log(pin)
    }

    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>

        <form onSubmit={CreateRoom} className='d-flex a-i-center j-c-between f-wrap' style={{width: w2,padding:'30px',height:'50%' }}>
            <label style={{fontSize:'2rem'}}>Create Room</label>
            <TextField variant='standard' name={'roomTitle'} onChange={ChangeState} fullWidth placeholder='Enter Room Title' />
            <Select variant='standard' name={'questionnaire'} onChange={ChangeState} fullWidth placeholder='Enter Username'>
                {
                    select.map((i,index)=>{
                        return <MenuItem key={index} value={i.value}>{i.label}</MenuItem>
                    })
                }
            </Select>
            <Button type='submit' variant='outlined'>Create Room</Button>
            {pin?<div>{pin}</div>:<></>}

        </form>
    </div> );
}
 
export default CreateGamePage;