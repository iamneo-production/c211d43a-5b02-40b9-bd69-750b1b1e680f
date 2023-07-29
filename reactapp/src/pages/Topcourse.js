import React from "react";
import "./landing.css"

function Topcourse(){

const img1 = 'https://img.freepik.com/premium-vector/ai-artificial-intelligence-wireframed-female-cyborg-hand-touching-digital-graph-interface_127544-264.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais';
const img2 = 'https://img.freepik.com/premium-vector/artificial-intelligence-digital-technology-concept-robot-with-hologram-brain-big-data-analytics-illustration_41793-1060.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais';
const img3 = 'https://img.freepik.com/premium-photo/close-up-office-workplace-with-computer-monitors-wooden-desktop-abstract-round-big-data-hologram-blurry-background-code-digital-science-concept-double-exposure_670147-8173.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais';
const img4 = 'https://img.freepik.com/premium-photo/creative-background-male-hand-with-phone_99433-522.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.1.1700164988.1685182975&semt=ais';
const img5 = 'https://img.freepik.com/premium-vector/hain-frame-blockchain-concept_127544-75.jpg?size=626&ext=jpg&uid=R104530040&ga=GA1.2.1700164988.1685182975&semt=ais';
const img6 = 'https://img.freepik.com/premium-photo/abstract-modern-tech-programming-code-screen-developer-c-programming-language-computer-script-technology-background-software_505353-126.jpg?w=1060';


    return(
      <div className="screen1">
<div class="departments">
        <div class="container">


          <h2 class="departments-title">We Have Most of Popular Courses</h2>

          <ul class="departments-list">

            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img1} alt="Artificial Intelligence"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Artificial Intelligence</h3>
                </a>

                <p class="card-text">
                  Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img2} alt="Machine Learning"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Machine Learning</h3>
                </a>

                <p class="card-text">
                  Learn Data Science, Data Analysis, Machine Learning (Artificial Intelligence) and Python with Tensorflow, Pandas & more!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img3} alt="Big Data"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Big Data</h3>
                </a>

                <p class="card-text">
                  Big data certifications can help you go after more diverse roles than specific data science jobs.
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img4} alt="Cloud Computing"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title"> Cloud Computing</h3>
                </a>

                <p class="card-text">
                  Cloud computing is one of the top IT fields that is experiencing an emerging trend in 2023. 
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>
            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img5} alt="Civil Engineering"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Blockchain</h3>
                </a>

                <p class="card-text">
                  The syllabus of blockchain development certifications comprises Ethereum, Composer, Javascript, NodeJS, Solidity, etc. </p>
                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>


            <li>
              <div class="departments-card">

                <a href="#" class="card-banner">
                  <figure>
                    <img src={img6} alt="Phyton"/>
                  </figure>
                </a>

                <a href="#">
                  <h3 class="h3 card-title">Phyton</h3>
                </a>
                       
                <p class="card-text">
                  Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                </p>

                <a href="#" class="card-link">
                  <span>Learn More</span>

                  <ion-icon name="arrow-forward"></ion-icon>
                </a>

              </div>
            </li>

          </ul>

          <button class="btn btn-primary">View All Courses</button>

        </div>
      </div>
      </div>

    );
}
export default Topcourse;