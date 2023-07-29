import React from "react";
import Navbar from "../Navbar";
import Ctc from "./Ctc";
import Footer from "./Footer";
import "./landing.css"

function Instructor(){
    const img1='https://lh3.googleusercontent.com/pw/AIL4fc8Xqf15X1V14wfTtnRtMzpj1fedeXBSZNeiteaH3hrV004cZHx_3UHSK8xFNl4S_f3trUOBE4zGqWrX0H8gX_JhC4LCbwyOY2cvFCncyo2dL2mtMVVqo50E_HCMovrOuSJuQVTF5JnzAULMuOJRvSNf_BRl2e7-AxYi2dyHIJaK7j25ypmSqFwgVT6hyYi47BZAAX-vFpNysPbI5s53FY-NXMRORagzEe1wPimlxhtIWsSkYC3Mf-1wpn4IdglDeWdomVCAxlyxMAjjoc8r6yyRnHfitYRk1-xgNhB9f9C1GEXaB96GWT0RE1KcgiJucKZmIyIAXuWArCgkGbPEKENYgj7EbYvlQ_0BfVFd2VH1IeKi5j-EUrIFEAmfl_dESMSqEJUwrOdeHDqeWio_Yz4AXsutwskyKcU9n_A5ckSAoQIs8Bvyn1rQWaDkv_AmBWG2RDa_nG3aei1JMZH8d3mh2Y-c8yflDUJhU47NxxLiykGuZalW_bBMxWeMMxSUclCREDnWr7YLXQvY1NBGf_bR1TvrJ9ijS9E0U4b5q6-6fgCMJ2LOK7h7ehexFQ1ZhVPIcgV3j0YV69WkxN50mS-EFwdezw73h43jmNSfYHQmManUlA8JI_l-z0EpuOfl1jRMOWKMSFfiw7UUKOHHt9kFelMZKJsaWfLe2cev8Ibo3Fxi8RUgcadfF4xoc8uL-dHA7jF5DepZQ74cXF2LyARU0c0dYcgVq8WcX14-AwcufSwVwE9_OoI7gIpQNW66yx9xKZj37FOUHI_HuGu2EZ-nFunDFciy_Z9Q1D_wOV2LW8jPLPNrFaoucWC5NPl50PJzLVF0FqurBLe-PfZrDaHtFOrsQ3_7dTSGK55Jb6qC2sSPiXvcmBctQhkgcHUyj7Pw8UjnCJcMHm0y9GwoI3C9=w854-h854-s-no?authuser=0';
    const img2='https://lh3.googleusercontent.com/pw/AIL4fc_wJQrPPpzPnQ41WcQky_QMTdpJQj4Y5ta9ILHymUzkYQCbgegbA1J9FyoUiV2FcMSSNsN4wn1WemoSS01wckSCTcynu1FAxa4TlO13eJ4O3PKC23RRIiq_hg5EAQkyDNSYnBdZB55IEkRw5ttknIHUFfxE62yK28XqcRjxRew0YaFurfDY8UuRV0cNP85ewiaqkx-RVlhQy4IviKoZgZghy2It7QfUeNXJoOJjHaSa8hfs7vCK2aE43bOkVga_45I8IIRm4Khpc9uqIwGwMoyJl0svE_Cx1bTiD5GvvuzNnbUFX89BCO08C6H0oHDpKlme-kogU0BZRQixwVjPIq3LJF9JE9aiWbEiN4X4Emcquraf8_KaEaEkBv8_yV_iQumBD0qhLjPzPbqGpZdg6-77uWr6GqKraMhs972bv-vsLwaNamEKXXZ8iq0uPvd4OKlFpSl3ENtZu4TTQslOu9fooZKVTXC21tRHpm6HwQXmfHQyrBY9SzrAUHhO1HL3LqsP5bRsNjYdbkZF-peeAyVWtH_w8h7nIF4D61wng_URtZp-aN1oPRLWmGQySix7_5XLaNqz33aw25_VUeahhKlX5VTQUoYPKSAri25c_RBkNENJ4Na6jvkZNgwQaMGVGaj1JFB2nL68rfpABwwjR6-95sbf6Kt_SkwL9r7fJ1zknabxULDDaZl5zyPxYOEHbjljqYdWDBhlv2QnWor7j_29SQY_l-QpS4PKOvednLmtGDLqo1GOJqZc725kWhJZEIwuykokh5YqaUIVjxZ9M4_dqMsqJQf0LHAAEdcQiwt_EScCRhxWiJrfwpR787JclymO4TyfdYxsiHK04EAKmusOkyccP9L9NeE_SMPeQtcN_oIpjG2PDB6u2EuXWvn-EF1hbFDiB7qEjH-P4zNezZFM=w854-h854-s-no?authuser=0';
    const img3='https://lh3.googleusercontent.com/pw/AIL4fc8ibprqvSQ9mciO4KaSrNb3ZggUqeO7Fgp-n4PcaJ9jXVOHNa5JqH0hvY11tBY50b86QY19I-DKOwY7EsWlzBShY14o2U-MmyPPnG4wtpSDMGQ9ZugfOwC8GnOhMc840QY2IUqYHcyAPKjNUCfiaBoULtx69m_Am9GQmho8mlduzOPYr-sz3JY6cmIyUAM5QByvFqZ6Hvza0aEZxzMUj3hBLAMYV2tEkkJMUtJ295f6Bgj2EWWU2pc4f36jUi26oCmCo7thLEnxqpibhDKsOvup79iqgIuzlKOxsxgycgB4lrkezERq9FFFXjPFfZU7lmM1Pa3R5iEu12yUni_GUn7mpKn8-5KTzCKpiA6N6dVLu2Q67xpd5-mEsx0IXq4Siocqrzb4Jb3G3_wKSKX5AqQ_kP4bw60AKyN7X2r3vqtsARORyEBPCcoq0WqWq6JZoqeP2UwBxa_Z5_cpJeAaXhOqiybEwmLRatdGGYUrVuQ5LWaasUfAHO3zX0SDlFNEEyLBk1GcsqcNdTFwNqhP9PKlu2XaBCblHlKTztbDO6HtNgV38Kagv0xuES85GyAPCiY_mGI1Xn_o0AiKRBxpCvXASexs7P1G6R_12ae-13XRFGB4uboIDZBukGR3suT_crf9YQnrubofjrykycqj_2l6E4os5DZQ5Snsyq93Y0cQXNXlN6Gb88NI37xFsW-cgVn6kz_f6NTJYVuLGDLmZhhZUpIMTfaVV9DabRRcvi3OSec9oMh1bfU9XvCNdiEq3jRLv1p2zrLQjy3JcR4VHhQUVP1Q2rZDbiYcwUX8tsTMHUkg3kpy1LJJHqbM1qkuPd5VRuxkC67eYnCHCO0mzKKGK_LZLGb2wfICFWtyJEdaKYfI50qHdJ8z3cktEqZmjNlPVBLglcu63r8WaSdrS2wu=w854-h854-s-no?authuser=0';
    const img4='https://lh3.googleusercontent.com/pw/AIL4fc9i3mLbhQF_BbFFcs2xK_KV3oZ_6GBw1d80AnSu-fPVFID3Dmiir3_xQVX8Iw86nPHdNF5Qrve3NkHYDIyDpGHcJ_wd2hKO2O8DZDsc8giQiLxGTvvFzCicAeuGvBBP7XyBy6ZqOZ-c15gnxcBubvM_kABfbUKFZuDcbCmyo2KEko9j6xoJPfQVCTlM0ycOaIzPu_1F6HUPdm0X7oCFVLmCptWjbs7iq4G5s9EZNlDAPlJHm_cOD83P89IUVpt2kCsYPUFSA1U3CmuatKP80P6k7bL8ZSoqLV05eDzZ79ACDT-aK9SlK0jbv3iwQl6F4G4vgphyQkAKYl38wVQKLINcyeFF5O1NbSvyAvAEoyt5s8EK6Ost-j4YSqafDYe2opIcYSf0aKzs-UaANcOdjswLCWm3Kc861ZcQUET-GOtfGeql2zEF-cve8ga-h-41xW1S6uz4nsGck6uYx5tYze4Yo2IYVWZbUygXpwmoIvdCDVtMnxfvsUtmoE7rHsf6Bfs_9yJRPlX73y4Hx9oRllFoeNzDpCt_JaZgymxyFytyQOdvnf7SYX8e2ya6vgmJmApwGtJVXJwr0QCmRs9JO4WANIjCZZoU83dcxwKwzgblJ4JQuSjT-cKUzhnnBjIdFgrsKSWQIPkioPP7vNOxOI72rJ0qZE60PPAtJO3DreW4FQv0MZVSB-Oa4EKpr2bQCRimnLZPQbJJoBbLo12BxUkMJ5epmoX4pOiC9joafSfC6rW-Vou2hHd5hCZk2Q3YdynQUzr7NQj8JQS44qD73sBkWQUOM_WfOMpce7K2OadQ0jtojUo0z5r91KjXtBq18fYJkt-bJWe-H0YM8QB-Z13zfV00Li5BTILNTJx_-jSWulpgWv-9feFakU65pC9btobMe2_te-Sx09lQsvCqJegm=w854-h854-s-no?authuser=0';
    const img5='https://lh3.googleusercontent.com/pw/AIL4fc-EKMWmoUzp3ngamYtoLecz-4pEyVpLKehe7Bt3ZMPScU9gIquxxrgLFI5rSPts_zn3TRkk4Lf0mk9r_pcHAEJsU_INURMpGZ-M2XxfgY62ADhO2nEd1VfCBa7IBpncTbPDX9dE5OXWmriR2GrNNeIDFyvFqdxQ5tPaSgV814Xtzv1OjUChkrdwW_lEZB7XINyjT-36LgNO0uTUuAFXy0lcBb8CF6nNCqyrdLdTfhAvbhRSi842Vq2ztF-XsVeVZDWsFxVPgJsZ-2Xco7ozBER_3Y62i28bb0a9UQIIOHNo3kmshVfiiBzprwzfRNixmBduDqxGYhxw_V1odFqGxHQjTmabY4reqqZGXBRJaAEf2Rf_ZE1tTsln1BuuL0EgAEt80Zh6lNBR5EGRTmOUIg355KAZbDiaTGP6opb8RVzm9rscUa7l8CLsEB5ZQP5lDv63ehLJxG9V0NOQXM0jPHBE3FnIekwog3E5RAhcXVgNEtChobwrkB4zmSuNUACGHFFuWD_Ql3Kte0szoxTq5TSstV5z1BQ7XfP2pvGgTfNnRhaHPg0bBjwYuTxLdDve2VW7wHxA1U0MLpQbFC03k_TiTFJc2p-EaJDWiNIKwUjQJc8gwkeDUE2euzMYSCIIpbH4_QRKjAggo7HnPYXktLs99HnquK8MOlAzMfN-TATPChhmChes7OPi4KblMe5xTUszajQmNlAjyHOkx5eArti3fi-OZOSSNPGrlbdXhtDVoaID4aEygHKPZwMYf7TICr7YmaR782A5gqdkLOOl5WNR4eMQrMCnl2kQUGN51BzSpW9ZYPlnt_sTvycbs3u9QyyOPJ4f3wz7eUOXlL1Jr3K1AtFs74C9LO8dGTH-MlXFE06LHQQfeU16HkFzhzX0vljibI4VH0TYBrP9Muv-bUX8=w854-h854-s-no?authuser=0';
    const img6='https://lh3.googleusercontent.com/pw/AIL4fc_vH1SuSCE1KGc7LHkklfRWM9_i2TRu2wOt0qEbFcdc7o53g8Kk3I8dBOMr8rSisyorMyfn1WsrnpTaOi7MSd33JAIS7PPaxqnXfc4kznPjc18qSo_c4Gp3_Rzm3CcDwXKGZLRNmxdEUluP_XecftBCxxXFdduDrEmeT4TxM2PS_UmUKEH7rzOLgCwCUh33pf0-mWXFUmXOoQ7Fofdj00KLpuCQHb9FSyz_3ruN5tvCtVKUHjc3NsL-qKVR-giEaylI6iGjUN1zIT3ep19pwAs8jdx0znhd0xE9BbaLIH0ZI1skovWSz49uMHw52eZ4Ec-D7UNQgusAitN_L6OBS0nx6-jKHWm6pzXn5W56634fIvaF9baFQZdrNXVpMuUduEudMtKutS9oE6aA6-_0cMmpScy6KAZ90rjqstuxJcVaPVo-jvLYtl9NWIlymv8S99Q1sJ1IRLC9oWhv4QSL29EpKFHtkHVU1DH2Qp8ca3CLKuEMdkHztfJXVj8KaeMuY7jR0yR-JTAXbTDVFqeFMqENF0Rlhxzs7ZqeGyRufnRBuwACJ7UT0buYAj6pFM3EsV425cxLpt1SW-ko0xxGJ6GWQ-zsRmK4aTxJNpexMS1vJ6HjuEp-Q4NWTwZUT-E3V03gxbBtzLIlXs4uYtyTIhF_0Rya88Lph20E3gS1lRyUE_rzMaZVXwVvBl2S3Ewm1r4YfNBiltqYd326hPDLDzztBcwCEYzcVBzTF1bda54jHKXoowd-kuNnPuidfEqQalvMDSU4_7HrmswKw6vihjqut8CfF7nfHt4uvXXf7o0q3jme1rOMXvIHDkJBuj0Sp_cxMeEtDM7ouzkx-zkpzUKLAyELiGRSq-g7P03lq3Ne7lEd5_aITdzbEXIf0o2D4ETPdaXcCArEMGdPn0Gky9Zx=w854-h854-s-no?authuser=0';
    const img7='https://lh3.googleusercontent.com/pw/AIL4fc_bpr0xh_S_vsOTetVXDePbyfefw4E5WsEqDxcy6oxLWduFPx1xG7LxXsmvQesJT8mb2tElkLWVNt37oe3W_oft8mTeMTywyvApFPWIZIBc1rm6PsQC6ZRa1rhX7hjjTIutGLRXd7OV2delbeyny-OKfrgDyjVramMLwXl5ryKsCoxBVcnPynfOM0CBSv8jq9PfR4ttW7LfQi7QSiA-T_339oy54-PkdNg0YGeYlw4fFXcWeMmP5SQWd6F24n2J7yt5cGe7r6scPDlrkYrqIEjMB0-bl1tSNnPVzfIZHMdU3RTcGpYFKQDnyedTd9RQUawPRPm22JxVTOva9YgBPmGJQI9aAF18OJwO3-PpIq2-ApdV-Uvx2Mnjm5kWASdPeW-EoLncHgSDm-6Hxxm1CYO5AiblRdJ_yOQFYc6qWQGeLcQ7BH7m3dWNA6BM3CKA7sTG6tl2uUTHaJyvirnN-F7pvEh8aSTIPOAtkxAgjLfdxPoxZNcwASjgHPIs48D5aBoCOQox8Hvmva4qkg2sGprvYEzUBNgeY-_hfEUl22ihqesWQzGE7ey_4n68J7ZYV0yK1h8sMqJVRuBiQKKtMtUO9SkAETysBYzyCSN3UXEu9eudae9Ng1Jf2tMCs4d3OYTjPNk7rFZYDGLn0WtewPXeza9kWHWxsyA4ohfsxP9nmK0mlFg4I_BRSN5UodZzPuv9f_1XM5Fy1uf3L_IoM1-1YeRWvW3CBg1CJ2Dm3nPoSYT_9eBGL25adxHvP5qtoa4-FD6f-aa7eA7TLby9A1r-_25PvXc0MwZt4qTXlvdFZ1sH7523S6hIAbQ-zqrpqJPB_Ii_rSk5scHPlOkjDwT1ickYhIZOQSVKa3IToHAYxW3ehqZ8ssk5_-lOLq-Z0SjbJyBCeK5aLVVka0RW409z=w854-h854-s-no?authuser=0';
    const img8='https://lh3.googleusercontent.com/pw/AIL4fc9d1YAK-Z3ZLjXRSXmhgclBJTdPIjlwhFrpQARXGbOoBEk5SPrism860CqmL-AWklN_2TAyjrjiuD_FYCFVc_2GHl2FfIYmitgtzGtJaGBxCvlmq6khum22N_F5MkInhE0KviqdegVstFFH0CY5Dxfnaz69vYesQ20O1uhebk7-LlTRmzQY0iIWG9hGEXAgbkyU-lBXlMlqs4MIh0h7HeUJRpJ5H35xXH1NGeJJTmjmxmha3UrrvTLbVffZSsMpk5xb2qijFBBsM4kZF71w9GY7PumnGbuAYK1cnJHBpd9e3wBPoAFzCE152_urCGovDoG0l00OnyNyvL0JmyWdTAVt105xGVTvbKNMbkIJJ3Tb5MP9Ux_1fB8IUL23ny4W6-FkYYJEydE6_jm7J_cfGrbi85SOG4kDMD61zLdfm3wVdD9f-SXjcjeBD06li3QjUs9hSNXxAREISVDumv3fi6Oztv31bLHYSTtnxfrGsySSPt4OOjVxbMMvWI9GU50UOrmkmMjRQjRSFLPJVhRKAr_8j5IAbN88b1FeC_srs1f-z0UYnVXqPoXMHInkNtXHGDzNIJ9A_eAjqsmXqUHcIfesg5MLxh7OUQsSd1Btunp1jXg1UHgHQIQbm_OJsvcAHBaoUtv1fWcAiXlxZ7j2ojHV2fSClcZy8eyl6GSt1lmnzWeA1O1fVole0uAmXOsU7uOix8IOoRoJtE30XRhiCU73lqv7gE5RkRBgn04U-F8CN5zlTVc2Nrwy8M2w7Iwco6qwouyo_yW25wB40lhvhV7UBES8mUnZ8W4k0XxwzZNRC4fbQilmPNTRGpk44jio1hMSM02eZtHlNNJE2MNjQxH5O7fz8Ic-r3zcFZyI4ghZYKB4oRp_tgsDboATm69S46wR1k7RTNvBkRfwlj18w-du=w854-h854-s-no?authuser=0';
    return(
        <>
        <div className="screen2">
            
<div className="instructor">
    <Navbar/>
      
      <div className="cont-fluid">
        
        

        <div className="title-wrapper">
          <h2 className="instructor-title">Introduce with Our Famous Teacher</h2>

        </div>

        <ul className="instructor-list">

          <li>
            <div className="instructor-card">

              <div className="team-item">
                  <div className="team-img">
                      <img className="img-fluid" src={img1} alt=""/>
                      <div className="team-social">
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="bg-secondary p-4">
                      <h3>Adriel Hannan</h3>
                      <p className="m-0">Teacher</p>
                  </div>
              </div>

            </div>
            <div className="instructor-card">

              <div className="team-item">
                  <div className="team-img ">
                      <img className="img-fluid" src={img2} alt=""/>
                      <div className="team-social">
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="bg-secondary p-4">
                      <h3>Ricky Josh</h3>
                      <p className="m-0">Teacher</p>
                  </div>
              </div>

            </div>
            
          </li>
          

          <li>
            <div className="instructor-card">

              <div className="team-item">
                  <div className="team-img ">
                      <img className="img-fluid" src={img3} alt=""/>
                      <div className="team-social">
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="bg-secondary p-4">
                      <h3>Lydia Colace</h3>
                      <p className="m-0">Teacher</p>
                  </div>
              </div>

            </div>
            <div className="instructor-card">

              <div className="team-item">
                  <div className="team-img ">
                      <img className="img-fluid" src={img4} alt=""/>
                      <div className="team-social">
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="bg-secondary p-4">
                      <h3>Rowan Calica</h3>
                      <p className="m-0">Teacher</p>
                  </div>
              </div>

            </div>
          </li>

          <li>

              <div className="instructor-card">

                  <div className="team-item">
                      <div className="team-img ">
                          <img className="img-fluid" src={img5} alt=""/>
                          <div className="team-social">
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div className="bg-secondary p-4">
                          <h3>Gavin Snaza</h3>
                          <p className="m-0">Teacher</p>
                      </div>
                  </div>
  
                </div>
                <div className="instructor-card">

                  <div className="team-item">
                      <div className="team-img ">
                          <img className="img-fluid" src={img6} alt=""/>
                          <div className="team-social">
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div className="bg-secondary p-4">
                          <h3>Daisy Sechler</h3>
                          <p className="m-0">Teacher</p>
                      </div>
                  </div>
  
                </div>
          </li>
          <li>
              <div className="instructor-card">

                  <div className="team-item">
                      <div className="team-img ">
                          <img className="img-fluid" src={img7} alt=""/>
                          <div className="team-social">
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div className="bg-secondary p-4">
                          <h3>Kelsey Salus</h3>
                          <p className="m-0">Teacher</p>
                      </div>
                  </div>
                </div>
                <div className="instructor-card">

                  <div className="team-item">
                      <div className="team-img ">
                          <img className="img-fluid" src={img8} alt=""/>
                          <div className="team-social">
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                              <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div className="bg-secondary p-4">
                          <h3>Jhon Doe</h3>
                          <p className="m-0">Teacher</p>
                      </div>
                  </div>
  
                </div>
                
          
      </li>

        </ul>
       
  
      
      </div>
      <button className="btn btn-primary">View All Courses</button>
      </div>
      </div>
      <Ctc/>
      <Footer/>
      
     
   </>
     
      
      
    );

}
export default Instructor;