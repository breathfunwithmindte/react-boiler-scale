import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import image from '../assets/css/a.png'
const MyQuestionsPage = () => {

    const [all,setAll] = useState([]);

    useEffect(()=>{
        async function test(){
            const headers = { 
                'Content-Type': 'application/json',
              };
            const res = await axios.get('http://127.0.0.1:8000/api/v1/admin/questionnaire/get',{headers})
            console.log(res.data)
              setAll(res.data);
        }
        test()
    },[])

    return ( <div  style={{height:'100vh',overflowY:'auto'}}>
        {!all?<div>eh</div>:all.map((a,i)=>{
            console.log(a.title?.questionaireTitle)
            return(
                <div>
                    <h1>{a.title.questionaireTitle}</h1>
                   {a.questions.map((a,i)=>{
                        return(
                            <div >
                               <h2> {a.currentQuestionInfo.title}</h2>
                               {a.currentQuestionAnswers.map((a,i)=>{
                                    return(<div>
                                        <h3>HERE</h3>
                                        <div>{a.label}</div>
                                        <div>{a.value}</div>
                                        <div>{a.color}</div>
                                        <div>{a.correct}</div>
                                        <div style={{width:'auto',height:'auto'}}><img style={{width:'auto',height:'auto'}} src={image} alt="" /></div>
                                        </div>
                                    )
                               })}
                            </div>
                        )
                   })}
                </div>
            )
        })}
    </div> );
}
 
export default MyQuestionsPage;