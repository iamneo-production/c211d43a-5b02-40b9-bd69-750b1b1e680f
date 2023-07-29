import React from "react";

function About(){
  const imageUrl = 'https://lh3.googleusercontent.com/pw/AIL4fc9WFK311ylzAhF0RK4DT0qRxmQhPce0LeVux0G7Hvh5oxcE9lnBR0LTaj-a9YCTAroAkedEePnQkVJOPxXsrHjw6Yt6xvA_dmNm7zMjoJKqKZRqN1bACsKx1cJQL6TC9rrU8nZ3R3wHtO5ofrJZ6EfdHEMGAZOFZsWuJIGxqfm0Vpt4yvji6Uls8j1QLJLQYIo_-30czh16RqkeafwthtDyp2yqnfENLXLx4xJLDPBaJFePNHD6xLEW8MU669zepXgu5oKbgTiGUUbdJ5zb-2etJXJt8ws6kiloMlUBIgt5RLlEnvBp09BGYgLEASPLdpGUGzwC2VZ-1keY7Azohn0KamfMW6VydobO4crBzz41rM3zmiAzqn1oWwpMcRxlh2FpCumswYc-nR_miaphjwmK5UwfA03ZeCFTyb6PH3iUTjaKi5IS_DwjtgU4lSOU9pw8ItbBvTJMm_lY0Qt9eeCEIqCcG7lhQNnxkqYfz-haLVmv9AV4XIYzDZ4mYxFifELXax_qFhUJT1ILtarei621ZYQ4_Z6FTC8F0rXdlqE5DcpMBmWjuSbEj6xXfegSLfilukxRCzfPrwElTeJxSphR1Vr7-D5Yp84Z87XCp8MpkcD0oGSrH0ti2wuz9N2lph9P9Xd57Q53qFo_qANwjFvQkFXLDXDygSwdZ5x7FVsGwSSf5o5J-ssvs8beT6SXq_FfXNLWVT917gwxAOQFJdZqIPTO-2OymCz6Vnf1ahzPbcvHfBswngS0ePNcdy9QUkk1bUFkrKmMZvBZUkegeJwGduDk4Ij1Zli0449C9llzkFN76UwQXHyjnf7yNocpLWiUabPprbM3kYUAtsWL_ohhP1eP-k4o2swHVPVtnOjXxv36IZJ69fdD8HEsVfKBp4upOojWQf9nXngr-7gRVanN=w854-h854-s-no?authuser=0';
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