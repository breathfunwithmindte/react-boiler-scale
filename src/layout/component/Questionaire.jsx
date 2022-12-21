import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { useNavigate } from "react-router-dom";

const Questionnaire = ({questionnaires}) => {
    const navigate = useNavigate();

    const editQuestion=(a)=>{
        let path='/admin/questionaire-engine'
        console.log(a)
        navigate(path,{state:a})

    }
    return ( 
    <div style={{height:'auto',width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5%'}}>

        {questionnaires?questionnaires.map((a,i)=>{
            return(
                <Card style={{margin:'0.5rem'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Questionnaire Title
                    </Typography>
                    <Typography variant="h5" component="div">
                    {a.title.questionaireTitle}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
                    Number Of Questions
                    </Typography>
                    <Typography variant="body2">
                    {a.questions.length}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>

                    <Button size="small" type='submit' onClick={()=>editQuestion(a)}>Edit Questionnaire</Button>

            </CardActions>
            </Card>
            )
        }):<div>eh</div>}
    </div> 
    );
}
 
export default Questionnaire;

// {a.currentQuestionAnswers.map((a,i)=>{
//     return(<div>
//         <h3>HERE</h3>
//         <div>{a.label}</div>
//         <div>{a.value}</div>
//         <div>{a.color}</div>
//         <div>{a.correct}</div>
//         {/* <div style={{width:'auto',height:'auto'}}><img style={{width:'auto',height:'auto'}} src={image} alt="" /></div> */}
//         </div>
//     )
// })}