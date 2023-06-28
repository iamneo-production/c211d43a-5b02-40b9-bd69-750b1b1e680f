import React,{ Component } from 'react';
import '../src/About.css'
import checkimg from '../src/check-solid (2).svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function About()
{

  

  return(
    <div >
<div className='AboutMain'>
<div className='tick'><FontAwesomeIcon icon={faCheck}  size="10x" color='green'/></div>
<h1>PAYMENT SUCCESS</h1>
<h5>we received your purchase request; we'll be in touch shortly</h5>
</div>
    </div>

  );
}
