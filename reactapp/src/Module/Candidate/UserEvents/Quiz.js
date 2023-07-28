import React, { Component, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Quiz.css';
import axios from 'axios';
import { Button, MantineProvider, Text } from '@mantine/core';


export default function Quiz() {
  const { ida } = useParams();

  const [quizzes, setQuizArr] = useState([
    {
      qus: 'what is your name',
      opt1: 'askd',
      opt2: 'asdas',
      opt3: 'sabri',
      opt4: 'ajay',
      ans: 1,
      cand: 5,
    },
    {
      qus: 'what is your name',
      opt1: 'askd',
      opt2: 'asdas',
      opt3: 'sabri',
      opt4: 'sanjay',
      ans: 1,
      cand: 5,
    },
  ]);

  const [Glow, setGlow] = useState(6);

  const nav = useNavigate();

  function handleoption(idx, index) {
    setQuizArr((prevArr) => {
      const updateArr = [...prevArr];
      updateArr[index].cand = idx + 1;
      return updateArr;
    });
    console.log(quizzes);
    console.log(ida);
    setGlow(idx + 1);
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/getall')
      .then((response) => {
        const a = response.data;
        const b = a.findIndex((ele) => ele.id == ida);
        setQuizArr(response.data[b].quizzes);
      })
      .catch((error) => console.log(error));
    console.log(ida);
  }, []);

  function handleSubmit() {
    
    const unansweredQuestions = quizzes.some((ele) => ele.cand === 0);
    if (unansweredQuestions) {
    
      alert('Please answer all the questions before submitting.');
    } else {
      const finalans = quizzes.filter((ele) => ele.ans === ele.cand).length;
      console.log(finalans);
      const total = quizzes.length;
      nav(`/score/${finalans}/${total}`);
    }
  }

  return (
    <div className='totalquizes'>
      <h2 className='totalquizesh2' >welcome to our competition</h2>
      {quizzes.map((ele, index) => (
        <div className='quizzz-cooontainer' key={index}>
          <div className='quizzz-quuuestion'>
            <p>{ele.qus}</p>
            <div className='quizzz-optttions'>
              <ul className='quizzz-cooontainer_ul'>
                <li
                  className={ele.cand === 1 ? 'quizzz-cooontainer_li' : 'quizzz-cooontainer_noli'}
                  onClick={() => handleoption(0, index)}
                >
                  {ele.opt1}
                </li>
                <li
                  className={ele.cand === 2 ? 'quizzz-cooontainer_li' : 'quizzz-cooontainer_noli'}
                  onClick={() => handleoption(1, index)}
                >
                  {ele.opt2}
                </li>
                <li
                  className={ele.cand === 3 ? 'quizzz-cooontainer_li' : 'quizzz-cooontainer_noli'}
                  onClick={() => handleoption(2, index)}
                >
                  {ele.opt3}
                </li>
                <li
                  className={ele.cand === 4 ? 'quizzz-cooontainer_li' : 'quizzz-cooontainer_noli'}
                  onClick={() => handleoption(3, index)}
                >
                  {ele.opt4}
                </li>
              </ul>
            </div>
          </div>

        
        </div>
      ))}
      <Button  className='QuizSubmitBtn' onClick={handleSubmit}>submit</Button>
   
    </div>
  );
}
