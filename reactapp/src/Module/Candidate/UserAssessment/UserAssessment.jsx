
import React, { useState,useEffect } from 'react';
import "./UserAssessment.css";
import axios from 'axios';
import {Modal} from '@mantine/core';
import NavCandidate from '../../../Components/NavCandidate';


function UserAssessment() {
  const [questiondetail, setQuestiondetail] = useState([{ questiontitle: '', optiona: '', optionb: '', optionc: '', optiond: '' ,correctans:''}]);
 
  const [pop,setPop]=useState(false);

  const handleOptionChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/assessment')
      .then((response) => {
        setQuestiondetail(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, []);

  
  return (
    <div>
      <NavCandidate/>
      <h1>Assessment</h1>
      <button className='end' onClick={()=>setPop(true)}>End Test</button>

      {questiondetail.map((ele,index)=>(
      <div key='index' className='quizcontainer'>
        <label>{ele.questiontitle}</label>
        <div className='choice'>
          <input type='radio' name='options' value={ele.optiona} onChange={handleOptionChange} />
          <label>{ele.optiona}</label>
        </div>
        <div className='choice'>
          <input type='radio' name='options' value={ele.optionb} onChange={handleOptionChange} />
          <label>{ele.optionb}</label>
        </div>
        <div className='choice'>
          <input type='radio' name='options' value={ele.optionc} onChange={handleOptionChange} />
          <label>{ele.optionc}</label>
        </div>
        <div className='choice'>
          <input type='radio' name='options' value={ele.optiond} onChange={handleOptionChange} />
          <label>{ele.optiond}</label>
        </div>
       </div>
      ))}

     
     
     <Modal opened={pop} onClose={()=> setPop(false)} title='Score' >
      <h2> Do you want to end the test?</h2><br/>
     <button className='endbut'>End</button> 

     </Modal>
    </div>
  );
}

export default UserAssessment;
