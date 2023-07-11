import React from 'react';

import Navbar from '../Navbar';


import Ctc from './Ctc';
import Footer from './Footer';
const Contact = () => {
  return (

     <>
     <Navbar/>
       <section class="contact">
  <div class="container">
    <form action="" onsubmit="sendEmail(); reset(); return false;">
        <h2>GET IN TOUCH</h2>
        <input type="text" id="name" placeholder="Enter your name" required/>
        <input type="email" id="mail" placeholder="Enter id" required/>
        <input type="text" id="phone" placeholder="Enter your phone number" required/>
        <textarea id="message"  rows="4" placeholder="Enter your message"></textarea>
        <button type="submit">Send</button>
    </form>

</div>
</section>
<Ctc/>
<Footer/>
   </>
  );
}


export default Contact;
