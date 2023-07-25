import React from "react";
import "./landing.css"

function Testimonial(){
  const img1 ='https://lh3.googleusercontent.com/pw/AIL4fc9G2cNAO3f9P3Cdh-C06LLlkHRusAyMuWvN_7sv0KH5ar09GsPrS1QNSmgpX89iDpQ5Aj7ak_J7IO0zdQz4SAuHF2fEc1jPd8ooEaH-L2svqghwSiQmG2kPWFTxzmwkpsU-JYY8mlxNFcPeAkZuTHU=w602-h902-s-no?authuser=0';

const img2 ='https://lh3.googleusercontent.com/pw/AIL4fc8EKmRPiA8GkivS1mFN0MhNXMvC2MiLw-GEGdn7kOcKacOuKohShb_JiNyX2Nzl6ACNPs4YJ-ziYFua0z22ZDN6m8UD_P7AHbIlfmbeDXffN-5OFPO6kAhvQ4PYtXePFtUziv-zxyZjuj1DmD9zUgPjPZ9ec1JuHrz-r-FaDzpFtZdK0ws1iWnSZ3dHWsEFOf_qV0Bk30bCQCYKF2hNNVfpZsp0l8pKa6KDLAlWDeMF_z9asfFgGX1gAdo9ri15UKrEVObl9jhkXqfmR1BzneNMCpgMP6Otp6K3CC1yuf39jHn-X2-eh9HFBPjlJlVKRmrRKu4ucEjRSLieTwWXBbpuFrIjV5dvJQpjT245OPFfKJ7F0o6gNZYthbHHANVgp81YLOu_YOJ70uglhit7bP60e_StEliE2mGGv8ybFiCd-OlbW3qDPLwIGlQUlcBeJEimJaJeMtjzyYIkzubaQr65KUeSqffUNHmCSp7b-0Q8zo3gv76CK2SsjuzUdTsbVdDHasWgNSSPMXiPBm8lc_UsfeUwALOz4jOusYTp71Q1GBkwZlD8u5rZSynVTD32SC3up9locHfUv2aV0UJTQyjPnISBPu4aaJZf5dYdyM_iOBexEJS764xFwG7RkViO41vacdFvjFasRCEJ2GYQ50VohwSQ-E48j4ikxnEfw2iYluzo30Dqk7784mnat5hva2ErOJgIL-wLPChykC8UD21qAy8fXMohmHnGapCAHoTssgWdvrGzjk6imc5GMz4V62O3f-soBU6zcH9G5RUTf_jQNXPeEj9ZVnQhb9CyOkXI31WG31jwl_YP4kh4S8vTm_Q_23Mf4mQIh8tI-MPf4w33zqWJgsTZLeK1a7BuSJHhogiYxa_JniWp-binUcyjaFAxzW7t0drV9-umzpbLgGZQ=w587-h854-s-no?authuser=0';
const img3 ='https://lh3.googleusercontent.com/pw/AIL4fc8VuVGKT3zcqCtYA9Za9WfmOtWDw9jWm51GprzDvau-KLxRjy_aE6r2z3seQCKPHy7TOrsasoYwlEcqSEm_nfeceasWsdeGS6z5NNlmvEZ6q2gpHAAWLWrZ5iqEfphRjqiksZy7X0G5nbo0o9QdMPVfNTo6DQvr6B04uBSJB_oByZLGuflzY-BbSnoJljjeDLxcE6D7LOPhuGEI6BbYzqH3Aw2G5opm7HSzDfsQHerqp3lgI3jvsu6P9xlE-aca3Q1OPbSp6ZXyEo65i-WKD-Jk57sBvZwsHd_Kg7ksITCZf2geWrs-rJtwcj-gdpGif3dsOWamZSPSV8o_7u3Gq8kiq8aDONTddTZiSFvLYghu0UYiClIfBrKJPnIZu7pyW4ZKtwK4iAixTeat_zVaOr0LWXo3UPOSsSsHaLD1-PmizJEUKB_Wxp7C0lxXxYC1nua8LwTFeEJ2BFDombgTVI_BCJnjZ6Vsao52iuamcFrxLIxTqFEWOoMF6-55DfbJzG8QPaL0QvHQpI3D0ttI1ScZc4iyb4SeluQ1t90zMJGwiCx-A1VIQIpVFp_HA2uL74Jqm9_azW2woCp2ChwRUEfXEAxYBM5qWMr8bpVrI986e16zF5pVhLL7tJUjZn0YorP0NE8xOu4isq1fDFwOtUcGeBsCpKQsTonF2p6VkQA5lDeMKnXMk9fpw24d2EyjIxWAi5hDdkOOBpbWX85U0pdQBSL_Rw7TydcHc_2wIb0GPw6vHiIIglfL8MeBn_rXfor2I0sU4Pql7if3l1rPBAr0em0Zv64Qf2OdmRPh9Mt-PB5F2AZNosW-5dcM0KV3Q0Tm4HuraerQEn8Kdxxx4hqx_jTKw-lBQZT7dFEEGrYk55rSR3QFOS57619OhHwo-kMKgodSfuLNrUhuqiKw0vql=w569-h854-s-no?authuser=0';
    return(
        <div class="abtestimonial">
      <h2 class="title">What our Students Say</h2>
      <div class="row">
        
        <div class="testimonial">
  <figure class="StudentLand">
    <img src={img1} alt="profile-sample3" class="profile"/>
    <figcaption>
      <h2>Sam Austin</h2>
      <h4>UX Design</h4>
      <blockquote>After taking this course , am now an AWS Certified Cloud Practitioner!.</blockquote>
    </figcaption>
  </figure>
  <figure class="StudentLand">
    <img src={img2} alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Christina Worell</h2>
    <h4>CEO</h4>
    <blockquote>One of the best courses on management and leadership I have come across so far.</blockquote>
  </figcaption>
</figure>
  <figure class="StudentLand">
    <img src={img3} alt="profile-sample6" class="profile" />
    <figcaption>
      <h2>Catherine Tuffey</h2>
      <h4>DATA SCIENTIST</h4>
      <blockquote>I highly recommend this course for all the budding  AI and data scientists.</blockquote>
    </figcaption>
  </figure>
</div>

     
      </div>
      
  </div>

    );
}
export default Testimonial;