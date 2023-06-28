import React, { Component } from 'react';
import Helmet from 'react-helmet';
import '../src/UpperBar.css'
export default function UpperBar()
{


    return(
    <div>
<Helmet>
<link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
</Helmet>

<div className='UpperBar'>
<div className='Company_logo'>
    <div><i className='bx bxs-home'></i></div>
    <div>company name</div> </div>




<div>
Login

</div>
<div>
    Register
</div>

</div>


       





    </div>


    )
}