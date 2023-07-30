import React,{ Component } from 'react';
import './UserPaySuccess.css';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
export default function UserPaySuccess()
{
const nav = useNavigate();
  

  return(
    <div >
<div className='AboutMain'>
<div className='tick'><i  id="Checkpay" className="fa fa-check"></i></div>
<h1>PAYMENT SUCCESS</h1>
<h5>we received your purchase request; we'll be in touch shortly</h5>
<Button onClick={()=>nav('/userDashboard')} >Back to Home</Button>
</div>
    </div>

  );
}