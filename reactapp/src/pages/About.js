import React from "react";
import imageUrl from'./Asserts/wepik-export-202305271050202fy3.png';
function About(){
  
    return(
    
      <section class="hero">
        <div class="container">

          <figure class="hero-banner">
            <img src={imageUrl} alt="A young lady sits, holding a pen and a notebook."/>
          </figure>

          <div class="hero-content">
<p></p>
<p></p>
            <h1 class="h1 hero-title">Let's <br/>Study Together</h1>

            <p class="section-text">
             Any Succesfull career starts with good education.Together with us you will hav deeper knowledge
             of the subjects that will be especially useful useful for climbing career ladder.
            </p>

            <button class="btn btn-primary">Get Started</button>

          </div>

        </div>
      </section>
      
    );
}
export default About;