import React from "react";
import "./landing.css"
import img2 from './Asserts/teacherr1.png';
import img3 from './Asserts/wepik-export-20230608074357Ig3Z.png';
import img4 from './Asserts/teacher7.png';
import img5 from './Asserts/teacher6.png';

function Teacher(){
 
    return(
   
        <div>
<div class="instructor">
      
      <div class="cont-fluid">
        
       

        <div class="title-wrapper">
          <h2 class="instructor-title">Introduce with Our Famous Teacher</h2>

        </div>

        <ul class="instructor-list">

          <li>
            <div class="instructor-card">

              <div class="team-item">
                  <div class="team-img ">
                      <img class="img-fluid" src={img2} alt=""/>
                      <div class="team-social">
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div class="bg-secondary p-4">
                      <h3>Adriel Hannan</h3>
                      <p class="m-0">Teacher</p>
                  </div>
              </div>

            </div>
          </li>

          <li>
            <div class="instructor-card">

              <div class="team-item">
                  <div class="team-img ">
                      <img class="img-fluid" src={img3} alt=""/>
                      <div class="team-social">
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div class="bg-secondary p-4">
                      <h3>Lydia Colace</h3>
                      <p class="m-0">Teacher</p>
                  </div>
              </div>

            </div>
          </li>

          <li>

              <div class="instructor-card">

                  <div class="team-item">
                      <div class="team-img ">
                          <img class="img-fluid" src={img4} alt=""/>
                          <div class="team-social">
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div class="bg-secondary p-4">
                          <h3>Rowan Calica</h3>
                          <p class="m-0">Teacher</p>
                      </div>
                  </div>
  
                </div>
          </li>
          <li>
              <div class="instructor-card">

                  <div class="team-item">
                      <div class="team-img ">
                          <img class="img-fluid" src={img5} alt=""/>
                          <div class="team-social">
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-twitter"></i></a>
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-facebook-f"></i></a>
                              <a class="btn btn-outline-light btn-square mx-1" href="#"><i class="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div class="bg-secondary p-4">
                          <h3>Kelsey Salus</h3>
                          <p class="m-0">Teacher</p>
                      </div>
                  </div>
                </div>
                
          
      </li>

        </ul>
        </div>
      <button class="btn btn-primary">View All Courses</button>
    </div>
      </div>
      
      
    );

}
export default Teacher;