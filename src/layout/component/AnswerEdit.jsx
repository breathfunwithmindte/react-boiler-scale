import React from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox } from '@mui/material';


function AnswerEdit({ answer, index, ChangeAnswerByIndex, RemoveAnswerByIndex,ChangeBoolByIndex }) {

  const handleChangeString = (e) => {
    ChangeAnswerByIndex(index, { ...answer, [e.target.name]: e.target.value })
  }
  const handleChangeBool = (e)=>{
    console.log(e.target.checked)
    ChangeBoolByIndex(index,{...answer,[e.target.name]:e.target.checked})
  }
  const invert = require('invert-color');
  return (
        <div div style={{width: "46%", height: "100%", boxShadow: "1px 1px 6.9px 0.14px rgba(0,0,0,0.14)",borderRadius:'5px'}} className="bg-1 d-flex j-c-between m-3">
          <div className="d-flex a-i-center j-c-center f-col" style={{background: answer.color, width: 34,borderRadius:'5px'}}>
            <IconButton color={require('invert-color')(answer.color, true)}>I</IconButton>
            <IconButton color={require('invert-color')(answer.color, true)} onClick={() => RemoveAnswerByIndex(index)}>R</IconButton>
          </div>
          <div className="d-flex f-col a-i-center j-c- sp-1" style={{width: "calc(100% - 23px)"}}>
            <TextField variant="standard" name={"value"} fullWidth value={answer.value} placeholder={answer.label} onChange={handleChangeString} />
            <div className="d-flex a-i-center j-c-between w-f">
              <input type="color" name={"color"} style={{width: "50%"}} value={answer.color} onChange={handleChangeString} />
              <FormControlLabel
                label="Correct"
                control={
                  <Checkbox
                  name='correct'
                    defaultChecked={false}
                    checked={answer.correct}
                    onChange={handleChangeBool}
                    color="primary"
                  />
                }
              />
            </div>
          </div>
        </div>
  );
}

export default AnswerEdit;