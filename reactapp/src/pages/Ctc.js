import React from "react";
import { useNavigate } from "react-router-dom";


function Ctc(){
  const navigate = useNavigate();

  const handleclick=()=>{
    navigate('/auth');
  }
    return(
        <div>
<div class="cta">
        <div className="container">
          <div class="title-wrapper">

            <h2 class="h2 cta-title">
              <span>Create Free Account & Get Register</span>

              
            </h2>

            <button class="btn btn-primary" onClick={handleclick}>Register Now</button>

          </div>

          <div class="cta-banner"></div>

        </div>
      </div>
      </div>
      
    );
}
export default Ctc;