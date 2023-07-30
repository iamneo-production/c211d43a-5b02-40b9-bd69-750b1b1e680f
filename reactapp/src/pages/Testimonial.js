import React from "react";
import "./landing.css"
import img1 from './Asserts/test1.jpg';
import img2 from './Asserts/testi2.jpg';
import img3 from './Asserts/test3.jpg';
function Testimonial(){
  
    return(
        <div class="abtestimonial">
      <h2 class="title">What our Students Say</h2>
      <div class="row">
        
        <div class="testimonial">
  <figure class="StudentLand">
    <img src={img1} alt="profile-sample3" class="profilee"/>
    <figcaption>
      <h2>Sam Austin</h2>
      <h4>UX Design</h4>
      <blockquote>After taking this course , am now an AWS Certified Cloud Practitioner!.</blockquote>
    </figcaption>
  </figure>
  <figure class="StudentLand">
    <img src={img2} alt="profile-sample6" class="profilee" />
  <figcaption>
    <h2>Christina Worell</h2>
    <h4>CEO</h4>
    <blockquote>One of the best courses on management and leadership I have come across so far.</blockquote>
  </figcaption>
</figure>
  <figure class="StudentLand">
    <img src={img3} alt="profile-sample6" class="profilee" />
    <figcaption>
      <h2>Catherine Tuffey</h2>
      <h4>DATA SCIENTIST</h4>
      <blockquote>I highly recommend this course for all the budding  AI and data scientists.</blockquote>
    </figcaption>
  </figure>
</div>

     
      </div>
      
  </div>

    );
}
export default Testimonial;