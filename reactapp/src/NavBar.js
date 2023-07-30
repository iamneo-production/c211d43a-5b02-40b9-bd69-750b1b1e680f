import React, { Component, useState } from 'react';
import Helmet from 'react-helmet';
import '../src/NavBar.css'
export default function NavBar()
{


    const [satee,SetSatee ]= useState(false)
function handleNaveBar()
{
SetSatee(prevState => prevState===false?true:false)

}


    return(


        <div>
      <Helmet >
      <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </Helmet>
         <div className={satee?'NavBarSmall':'NavBarLarge'}   id={satee?'NavBarSmall':'NavBarLarge'} >
         <div className='TopBar'> 
        <h5>LOGO</h5>
        <i onClick={handleNaveBar} className='bx bx-menu'></i>
        </div>
        <div className='BalanceBody'>
        <div className='NavBar-content' ><i className='bx bx-book-open'></i><h5>COURSE</h5></div>
        <div className='NavBar-content' ><i className='bx bx-help-circle'></i> <h5>HELP Center</h5></div>
        <div  className='NavBar-content'><i className='bx bx-cog' ></i><h5> Settings</h5> </div>
        <div  className='NavBar-content'> <i className='bx bxl-codepen'></i><h5>My Learnings</h5></div> 
        </div>


         </div>

        
        </div>
    )
}