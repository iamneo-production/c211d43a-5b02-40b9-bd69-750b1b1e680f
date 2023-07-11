import React from "react";

function About(){
  const imageUrl = 'https://lh3.googleusercontent.com/pw/AIL4fc_MP150Q9ops_CKAx2wDSl8RUvU58FDRAVmN7wh9Dwqt8H1gM4ktffRffdcxxnPmmgSoJqXB1I48qNYHzO0gsD0k1k1Z5uuEsiLcR83T65MhVSda5HswrtS-eyDJTC1MNCLepsoZEvVsPbQd2T_Gj8NdijtbE7ic34ygq9EzAqtZEKiNtrC8IlI5etn7ESb30LB5WI5bLmfOXLKyncrcTCKnheTzPG4MrUIvX9c5zVNLTROfdGyRb06F54cyF7a22hh41V7Akg4yrcYfO4PnWWN8QWz8YnNicmALWZRcZXrWmy1JrL_stz08vYHP7UATOm6Hp_Wz9fd3p6TFU8Na7ZVIbs3zNLYZHT79VbExy-6eORxSKESJwx-CIBkV3WnBmkcFhqMKqZWkyCpb7isp8WrYNS_4gu6fwqSzoRmhU2E-tJn2KJUf-jM-RISw12RqEPwkP1CE3lfg4zudOyrE8bSUaLFHlL3Enii9hIeEf92jo1occPs5IpnRxtSGAiOKAfMerhwtBKBZALh7MUsCSzdOsR2_U2FTwnAIC0TFj9roiNN1J2tbiTDNC668fgxQnEEuDXXAtg8P9ok60j3huXb9r7dgO5QYajlmRIKOHV4njoB5zXJEAMeCIs5Jur36iK6LLxNfIP58d6joKcvxywvuxn_F7lOjL015dWE0TW9p7D7vle31MT5uFCMe1rz7yFLl_bw7mTJnc01VE3F-qrnn83ZKUlCHEpny4IMRFD32atU5DP3CfeujBLUSXvPF4Oyfaboo_V1swe5ep25CXQmUNDYS78DjmbClhYbUBYHeddujfKQJS_PthJXkZzVCv_qwJfp1hz4endio0C9zpNaNEwijgm2RwELoo-Q05L2oI7pH0hn6PZDi_LLvj5M7KHlYYFqOMGSxTO0NY4oCYDd=w854-h854-s-no?authuser=0';
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