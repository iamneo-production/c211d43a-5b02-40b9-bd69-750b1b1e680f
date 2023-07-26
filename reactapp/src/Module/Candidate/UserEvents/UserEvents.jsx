import { Button, Card,Text,Image } from '@mantine/core';
import React, { Component,useEffect, useState } from 'react';
import './UserEvents.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function UserEvents()
{
const [eventArr,setEventArr] = useState([{setName:'java',id:1},{setName:'js',id:2},{setName:'python',id:3}])

const navi =  useNavigate()
function handleEvents(ida)
{
console.log(ida)
navi(`/quiz/${ida}`)
}



useEffect(()=>{

    axios.get('http://localhost:8080/event/getall').then( response => setEventArr(response.data)).catch(error=> console.log( error))
    
    
    },[])

    return (
        <div className='AllEvents'>
          {eventArr.length === 0 ? (
            <div className='no-event-msg'>No event currently available</div>
          ) : (
            eventArr.map((ele, index) => (
              <div className='eventcard' key={index}>
                <Card shadow='sm' padding='md' style={{ height: '250px', width: '200px', background: 'darkblue' }} radius='sm'>
                  <Text size='lg' weight={700} color='white'>
                    {ele.setName}
                  </Text>
                  <br></br>
                  <Image style={{ position: 'relative', left: '30px' }} src='https://media.tenor.com/c3JDi__qymUAAAAi/laptop-user-joypixels.gif' height='120px' width='100px' />
                  <br></br>
                  <Button onClick={() => handleEvents(ele.id)}>start</Button>
                </Card>
              </div>
            ))
          )}
        </div>
      );
}