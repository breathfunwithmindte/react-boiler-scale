import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import image from '../assets/css/a.png'
import Questionnaire from "../layout/component/Questionaire";

const MyQuestionsPage = () => {

    const [allQuestionnaires,setAllQuestionnaires] = useState([]);

    useEffect(()=>{
        async function test(){
            const headers = { 
                'Content-Type': 'application/json',
              };
            const res = await axios.get('http://127.0.0.1:8000/api/v1/admin/questionnaire/get',{headers})
            console.log(res.data)
              setAllQuestionnaires(res.data);
        }
        test()
    },[])

    return ( 
    <div  style={{height:'100vh',overflowY:'auto'}}>
        {allQuestionnaires?<Questionnaire questionnaires={allQuestionnaires}/>:<div>No Questionnaires</div>}

    </div> );
}
 
export default MyQuestionsPage;