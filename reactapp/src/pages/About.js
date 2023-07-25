import React from "react";

function About(){
  const imageUrl = 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
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