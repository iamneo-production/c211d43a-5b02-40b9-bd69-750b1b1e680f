import React from "react";
import "./landing.css"


function Teacher(){
    const img5='https://lh3.googleusercontent.com/pw/AIL4fc_bpr0xh_S_vsOTetVXDePbyfefw4E5WsEqDxcy6oxLWduFPx1xG7LxXsmvQesJT8mb2tElkLWVNt37oe3W_oft8mTeMTywyvApFPWIZIBc1rm6PsQC6ZRa1rhX7hjjTIutGLRXd7OV2delbeyny-OKfrgDyjVramMLwXl5ryKsCoxBVcnPynfOM0CBSv8jq9PfR4ttW7LfQi7QSiA-T_339oy54-PkdNg0YGeYlw4fFXcWeMmP5SQWd6F24n2J7yt5cGe7r6scPDlrkYrqIEjMB0-bl1tSNnPVzfIZHMdU3RTcGpYFKQDnyedTd9RQUawPRPm22JxVTOva9YgBPmGJQI9aAF18OJwO3-PpIq2-ApdV-Uvx2Mnjm5kWASdPeW-EoLncHgSDm-6Hxxm1CYO5AiblRdJ_yOQFYc6qWQGeLcQ7BH7m3dWNA6BM3CKA7sTG6tl2uUTHaJyvirnN-F7pvEh8aSTIPOAtkxAgjLfdxPoxZNcwASjgHPIs48D5aBoCOQox8Hvmva4qkg2sGprvYEzUBNgeY-_hfEUl22ihqesWQzGE7ey_4n68J7ZYV0yK1h8sMqJVRuBiQKKtMtUO9SkAETysBYzyCSN3UXEu9eudae9Ng1Jf2tMCs4d3OYTjPNk7rFZYDGLn0WtewPXeza9kWHWxsyA4ohfsxP9nmK0mlFg4I_BRSN5UodZzPuv9f_1XM5Fy1uf3L_IoM1-1YeRWvW3CBg1CJ2Dm3nPoSYT_9eBGL25adxHvP5qtoa4-FD6f-aa7eA7TLby9A1r-_25PvXc0MwZt4qTXlvdFZ1sH7523S6hIAbQ-zqrpqJPB_Ii_rSk5scHPlOkjDwT1ickYhIZOQSVKa3IToHAYxW3ehqZ8ssk5_-lOLq-Z0SjbJyBCeK5aLVVka0RW409z=w854-h854-s-no?authuser=0';
    const img4='https://lh3.googleusercontent.com/pw/AIL4fc9i3mLbhQF_BbFFcs2xK_KV3oZ_6GBw1d80AnSu-fPVFID3Dmiir3_xQVX8Iw86nPHdNF5Qrve3NkHYDIyDpGHcJ_wd2hKO2O8DZDsc8giQiLxGTvvFzCicAeuGvBBP7XyBy6ZqOZ-c15gnxcBubvM_kABfbUKFZuDcbCmyo2KEko9j6xoJPfQVCTlM0ycOaIzPu_1F6HUPdm0X7oCFVLmCptWjbs7iq4G5s9EZNlDAPlJHm_cOD83P89IUVpt2kCsYPUFSA1U3CmuatKP80P6k7bL8ZSoqLV05eDzZ79ACDT-aK9SlK0jbv3iwQl6F4G4vgphyQkAKYl38wVQKLINcyeFF5O1NbSvyAvAEoyt5s8EK6Ost-j4YSqafDYe2opIcYSf0aKzs-UaANcOdjswLCWm3Kc861ZcQUET-GOtfGeql2zEF-cve8ga-h-41xW1S6uz4nsGck6uYx5tYze4Yo2IYVWZbUygXpwmoIvdCDVtMnxfvsUtmoE7rHsf6Bfs_9yJRPlX73y4Hx9oRllFoeNzDpCt_JaZgymxyFytyQOdvnf7SYX8e2ya6vgmJmApwGtJVXJwr0QCmRs9JO4WANIjCZZoU83dcxwKwzgblJ4JQuSjT-cKUzhnnBjIdFgrsKSWQIPkioPP7vNOxOI72rJ0qZE60PPAtJO3DreW4FQv0MZVSB-Oa4EKpr2bQCRimnLZPQbJJoBbLo12BxUkMJ5epmoX4pOiC9joafSfC6rW-Vou2hHd5hCZk2Q3YdynQUzr7NQj8JQS44qD73sBkWQUOM_WfOMpce7K2OadQ0jtojUo0z5r91KjXtBq18fYJkt-bJWe-H0YM8QB-Z13zfV00Li5BTILNTJx_-jSWulpgWv-9feFakU65pC9btobMe2_te-Sx09lQsvCqJegm=w854-h854-s-no?authuser=0';
    const img3='https://lh3.googleusercontent.com/pw/AIL4fc8ibprqvSQ9mciO4KaSrNb3ZggUqeO7Fgp-n4PcaJ9jXVOHNa5JqH0hvY11tBY50b86QY19I-DKOwY7EsWlzBShY14o2U-MmyPPnG4wtpSDMGQ9ZugfOwC8GnOhMc840QY2IUqYHcyAPKjNUCfiaBoULtx69m_Am9GQmho8mlduzOPYr-sz3JY6cmIyUAM5QByvFqZ6Hvza0aEZxzMUj3hBLAMYV2tEkkJMUtJ295f6Bgj2EWWU2pc4f36jUi26oCmCo7thLEnxqpibhDKsOvup79iqgIuzlKOxsxgycgB4lrkezERq9FFFXjPFfZU7lmM1Pa3R5iEu12yUni_GUn7mpKn8-5KTzCKpiA6N6dVLu2Q67xpd5-mEsx0IXq4Siocqrzb4Jb3G3_wKSKX5AqQ_kP4bw60AKyN7X2r3vqtsARORyEBPCcoq0WqWq6JZoqeP2UwBxa_Z5_cpJeAaXhOqiybEwmLRatdGGYUrVuQ5LWaasUfAHO3zX0SDlFNEEyLBk1GcsqcNdTFwNqhP9PKlu2XaBCblHlKTztbDO6HtNgV38Kagv0xuES85GyAPCiY_mGI1Xn_o0AiKRBxpCvXASexs7P1G6R_12ae-13XRFGB4uboIDZBukGR3suT_crf9YQnrubofjrykycqj_2l6E4os5DZQ5Snsyq93Y0cQXNXlN6Gb88NI37xFsW-cgVn6kz_f6NTJYVuLGDLmZhhZUpIMTfaVV9DabRRcvi3OSec9oMh1bfU9XvCNdiEq3jRLv1p2zrLQjy3JcR4VHhQUVP1Q2rZDbiYcwUX8tsTMHUkg3kpy1LJJHqbM1qkuPd5VRuxkC67eYnCHCO0mzKKGK_LZLGb2wfICFWtyJEdaKYfI50qHdJ8z3cktEqZmjNlPVBLglcu63r8WaSdrS2wu=w854-h854-s-no?authuser=0';
    const img2='https://lh3.googleusercontent.com/pw/AIL4fc8Xqf15X1V14wfTtnRtMzpj1fedeXBSZNeiteaH3hrV004cZHx_3UHSK8xFNl4S_f3trUOBE4zGqWrX0H8gX_JhC4LCbwyOY2cvFCncyo2dL2mtMVVqo50E_HCMovrOuSJuQVTF5JnzAULMuOJRvSNf_BRl2e7-AxYi2dyHIJaK7j25ypmSqFwgVT6hyYi47BZAAX-vFpNysPbI5s53FY-NXMRORagzEe1wPimlxhtIWsSkYC3Mf-1wpn4IdglDeWdomVCAxlyxMAjjoc8r6yyRnHfitYRk1-xgNhB9f9C1GEXaB96GWT0RE1KcgiJucKZmIyIAXuWArCgkGbPEKENYgj7EbYvlQ_0BfVFd2VH1IeKi5j-EUrIFEAmfl_dESMSqEJUwrOdeHDqeWio_Yz4AXsutwskyKcU9n_A5ckSAoQIs8Bvyn1rQWaDkv_AmBWG2RDa_nG3aei1JMZH8d3mh2Y-c8yflDUJhU47NxxLiykGuZalW_bBMxWeMMxSUclCREDnWr7YLXQvY1NBGf_bR1TvrJ9ijS9E0U4b5q6-6fgCMJ2LOK7h7ehexFQ1ZhVPIcgV3j0YV69WkxN50mS-EFwdezw73h43jmNSfYHQmManUlA8JI_l-z0EpuOfl1jRMOWKMSFfiw7UUKOHHt9kFelMZKJsaWfLe2cev8Ibo3Fxi8RUgcadfF4xoc8uL-dHA7jF5DepZQ74cXF2LyARU0c0dYcgVq8WcX14-AwcufSwVwE9_OoI7gIpQNW66yx9xKZj37FOUHI_HuGu2EZ-nFunDFciy_Z9Q1D_wOV2LW8jPLPNrFaoucWC5NPl50PJzLVF0FqurBLe-PfZrDaHtFOrsQ3_7dTSGK55Jb6qC2sSPiXvcmBctQhkgcHUyj7Pw8UjnCJcMHm0y9GwoI3C9=w854-h854-s-no?authuser=0';
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