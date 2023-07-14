import React from "react";
import "./landing.css"


function Teacher(){
    const img5='https://lh3.googleusercontent.com/pw/AIL4fc9SmAvzf6xqif5Ew4X4L-E9K5dtZwbmOnriULrxHln4o5SSWZjQJ1iXz1Lp8aH4Sa2S77llz4CkyJzAU1AQIypIL1_dKD_W_Zvkq_I518CKk4b06w4Oy_tQ6XiTUMix1m1CLV3Q1YtGdd-YoplcfTjJZh2KSOKyYEgFy7CToFPpQPlXFttQBebrZRut43ZHmr-sbY4zKqPcCKVXb2zu3lN4yCKZSnOJx8wWoPM2_vvKj0oBITWMN5Wugkde4-oeNL8AEBKUDf5TJOXSqIqX5tyj6HwC43VgUga-CgbTmC3juo_JOZPACfjdjOLlR0d-VyK0GGIEdKUwJeGuRgv7YnULVRzrlyWf7y5n7sghavFGLNhmnipz6RhpZgTSDts4v_tfsD8r_yHzrvePiQc0PXvFlQ5jqVU2p5WUGNcQAo9ajIQ3tiDkr8ZAXFuXZQbzqhkCMlPUoplNKvyGfIyNAhhWQUf3Z9cptMTAw70N5ZqHMNz17GMs2cGI5SvhbqsOmUpQN-X2sptP1FBvC2GyCsC5kJ8pmZIGAxuCuM4IXIVAK-n55DacqQfmvFpyFSJ9_7MaW17XVIQ--faHz-ej9IT74Q3h600mj8n2hnqvNySt8rX8ga3EJftfaEDHk9vmbDW4EVrb-nz83DVMjLRPXvgE-FJkty-NaWSTvGGCguvD-CsktCGrNxTiDMYSc5LxbuYyjhR9jB-cklnVZ1twYkab4bqbMnPcSvwh3oas8_g7VA8Jqpa3wlmmbmioBLy4rHvvwCnqQikudFsQSMmM7k7v7dBFqQoSTgOby4YWqf4CCphUri124BS3wjMbuWp2_7l5KB9hTHv1msZCnnhCyJQ45rYV6oE7qa4KgYwFJ0ULkN35gRNMOxbmz70yzcwt4jeGjBPzRAQG9XmnQdEuUQyr=w854-h854-s-no?authuser=0';
    const img4='https://lh3.googleusercontent.com/pw/AIL4fc-__JDdyXl-b9R6S7d9TBcgSzoeOTHKFActEV3IyazLi8Fx4KVz-7zbnzP7Y0rhkW6nM4JFUppXtjYBRR58mjTyxRiPql1zjRVbZO9K19PgetB80yPOvWNKokkePyC3ZnGY5qxvb4Qoi8uU_3wd9vG9J2ghKM6QGFrpfMp3-XJz4zwJ2z5iliAugEmqg5dT4hv9o3F5vM-x9a5HOXevev2iDAiKO2w124ActwAh1SrdxPBVTINSLwGuNSpg0TkzbuH85WjQQUgRa415Q3R1ukN3dllALBUPjYjrhQr6GfO7g6DhgWdYht3ACFEvvVMqyyVjnnfaY--43pq-mY97clA1ALR36LPSlx9Up_MgqfuY0KlsmEZjx_J7Zb6oPMOyPWDzjfI1_meMy0z8Us76xqxjvK71MmlPVHBSfqeKmFXRaWnqyQgfFWyVl9pP4IkpbuNTJMW3-OVk84VKGYBoZOZL-_Fc9UUwR2HuX7QlSV43CeoFwu3oE5PupaGBTM2qe1_UFdXMLV30o6zNuvCWpiSE6tWhBUAJcN9Ah5HypL7PLubzYoPEcOksxDdwm0ceOFeLRz9dAWCRg7iPoiEhKNnhcGGZ8O8Ap106p2SLAfjPOVDfcgKhydH5JQZaoTU6ybv-LVwIFRJlanIsTQ4IqUkw0zFdeZggtc-dC_645no7R7Kg56JXxGXNbLwBPFA8GXe_Wkx2oGdcXzJFJp1-vbCo_jIpbKuw_AtG5O8KAhP_h1pkZyJKy5qVdHUVbUBt2kdTgZsLQXVjlmLSA6PbClrRuUEgpiJV4CTd5IcR3pFju7QhIEiXwYwBAsRhvmXlFk4yI7HRtIZgQw2WW49CfTnNrnyb1dKwmsaYL5ELIDmo7FmeqNsJxtuuNlazcTGYkA0VUENnhnqb3G3-1Ncam-Kg=w854-h854-s-no?authuser=0';
    const img3='https://lh3.googleusercontent.com/pw/AIL4fc8WB_nGs-LjOOo4MifINCaBHkhU2UatHfRamhVATZhfbCKKjWT0MWAYAjh_fgNFetH0cJaUVcpyDeYuJqG9fwAa2Tg1KO7wqs_VAb3ZNdE55rhy_vywkRqgU4HpR7WoQ3B7hUWvh0sIAxC32N5aQjSCz-LvDkTtRyuNUWJeJr9GY5qG8ab9HFHoXqJRGMII0PdwD7vr1HFEkE-bSOTD5S_9rfapACo_q5g0A8CGYRvDtSLXILbBiiHFNKfr2dqPRrY61YQIO4n9sW_tzg-wL2q1qXgbOLyeB4sbnduwVUOnNorsntt9dXAJxpvvHGzwyUQ2460OKM0D8PBv4ZNIY8nUndmCFR6NnyBpF42XacvJ8mFRNFL_0lAPyU03jaCsDhF0xVNHEHcy9PjuVTYkz04QwyGrJIm90Q4QZfYYaPMfdV98BpflB88o74BUuMs8NWJAn3BGnaO01hiBPvIn8AtKBIm0SKO8ZopgK50TbENXLAtOkTmghuZ7Pks5-1uNEbBNCabMi4zrh5LbK0MggybQzvicZt4TUwe8QGLJiw1nlFcPvsyB7qH7blxJ1ZMr43VGF--yk1ucc9nGA3Q9fQR25IFkfSsl2gv-AOpEs3pyvse6_Qjooyv1FgPY4Moakri4g9z5FhcFZJRK97hF9x-JaRfLD6VJt5E1epeTlrQIdn6VKKbWBElvn0ZD0dmBdbVQFGl48Q7XUijI3WNRbQ5hbz2UkIB3x9VzX5BAhBlEGbiHd-Wt60NChgHwOAB6t3zepys67G914z1zLzZsp82IU9XxwEa7MMLfTLE5rgUdg1Wl4Z_Khrjz-FOkXv4s5oTYHFXhBcG2S8EQCcBn_GEHERKMczQdg5UxplULv_8MHnzAvt0dfAXzGYipcDZtJ-u1XqlkoC2MyTDwNypTt6Aw=w854-h854-s-no?authuser=0';
    const img2='https://lh3.googleusercontent.com/pw/AIL4fc93fCGvaWKAQGzNUIgFpGK8AfuMsZWYff1BRzQFmJ-0-L7EgSzGUG4l4job2EyEeKtJPWb0ov1nIKyEBbtq0U8DOOwE4dez81vr1yzc3p0Mhy1xV1LUI-Ft6367g68jvyxylzbj2FfQRdybrYUJBT6lArYd3sC7-IGUjEmpdinjwWJEHfdr1ep-MlhBbNLg-1H1w_FcvXgTDT56O_CH3CTDyyj-tMrnVmMn8FEKu4s-BTjY-Nk11NGHrB5G1KMF49bmZpj2Tsv-iMvAxXJ3zinRcLa6abp-etkQYhBl2jFfiTUOsZRkQmabIN-DyDVxJpqVjUQiFvne6w2P4j7_F5ENloF94bRJbED84-wPhCXks7pedvHXUgZc-m8fxsmkSTNMftsZUU3IFq9h6A-MEnoYqlO67rWhm-h01eWfsd6O0w9QQBrI8eRS0TB5wmZn9zYnZ2ffP38Z-rddobN_4MItf-uN70C-2x6a2rCVDr1bXb5Tap06qGt6Z6j2qN3TVpLiuZFejg3tg-J_c3yh9-Stnei9gmj7MTYqheaBLfhX95A8wdiD7nifsTpZlOBgYGwdjDJnYWIjFZMkZRplfKoL4WZ2FlBoeohz6gLpgZSlZOmjDvidp1uMSKyh59eTstVlntqRWtI8STxdNZ8dDa5kEx8CoCFzcmX3egUBrsVYpVIRruugTZ-vd8nqxscsyv5RPOag4N_VwkH7WReMIgDTu3F2g6nVaptArFYu9Tl9lO3BXmDxDACvCGHt-6RaQC3Mgt5JV_2AQNwTriZE6SnUdb8Tyn8g5BH0_wcFeOPKf23tNmTJc1XDtAt-LSlSj25e8Ufcvrr3d6BRGm8tbiYDECAvz6u3yQYPJc3NxPTs_Qu1OTudQHj_13DIVkgr8KiJD4RXfQPGI00ylDbL5oog=w854-h854-s-no?authuser=0';
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