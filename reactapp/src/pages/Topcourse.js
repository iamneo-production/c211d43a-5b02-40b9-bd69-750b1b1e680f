import React from "react";
import "./landing.css"

function Topcourse(){

  const img1 = 'https://lh3.googleusercontent.com/pw/AIL4fc-BqnFubeys4PyItmj5EwdwlJlEKnHWg6y9cyxRN5VdQ4B-_gCmhoj8Xnm4f6c3x_A729Av462md0d8pn2gSyVGTHAKzPlAT8McOKv81_tnIz2G3rRZDZ_03EvivkwVvU4JBEsg5MWiGgfLOqRr_rt-w7FfeHWoKTnU_gM5jpQ4lejifG-T0_atRERr0dh0T7I8-bQUhXnrhiRdjASULEVE72eJKZ-MJ-YVYHtJKDMON3qxsAs-DWzdEFJsNXvQ8O0gnUwX_TFYmcfo5vtri0MOeFMzK5XIssmJQ6l_gQVr367c-FPYs7hda_0j2aawqtlBsnRCXbqJAUzArc8g2kxbc4q9OVA2AICya8lmvGIi4AcpT6AbJ4OaNIODWIzuCf_NBadVO2c5-j352jVgYJjt0z7ZqU2BTVQFVBecBTpIxEQSO8ANh4nhC6mjAb0b_Wfc45x8oWa-XiA_T0u3xonU0miLsWlhJZlSi96Yjqdp_30h01kWUcrdTyeZvJJuxiwC5593HmTPQgGdz5aFj5DRq1kHDQL5TLeJBwTB2g9OM3avTcEIIrXP0qsvNZOBeW8Dn2wUol-SlMsaGquSR-ZNV59rM-oe61PoXuB2NyxhgSZr2lTQJVDaSqeJ6TjzpK39qI4l24-XwSHms6100XDUdgnF8-10KKpHZIZCIa-VnH-z2N6H1dzGNZoC18OyevIwuq1PaX90Ok4se7Zv_lYIhKtuA9wcVNXwtI_ITE0JyC9jyFj7CLt7K2dobKWjHlchV1lMIUDQnIDLo6rZOq7WoArWUOI7keCuBLJIweIFoE3c-lznMunwzuA-sliQAvtOYY--0JIDdm0cg7wGZGbEkU34uP72zaCbXaTIHgU57Oi4kBACdchGcvK2GjkoFA1cRptoheU26jOf75E91EhY=w1281-h854-s-no?authuser=0';
const img2 = 'https://lh3.googleusercontent.com/pw/AIL4fc8np5P6_4tMj8n6OWOmiluvU1V9yxnBIJPts1O9LYcrVAMXuwkA_jzyE3WjqeaCjfZwsGb4Cfb_LsyxrRFeHwP2ow4JOM2ktNn6g41qXpiprj_s09tDZ9okBn4FQV_zgQyN9bCebpI0ruk5UbWkkSUj87nH53aMvQzuZ-ptiUqfaV8OkurXGFL0kNogH1q9nqW5mpkkxoPkObv6dky6jav4FQhU7tzg0rgnXtiqDaiDjDlimeIdCi26zMLf-QUondCXKjCW0bWdc_plnd1oCGRuHkez0OMoDWbpxYo9WN-uCUttwfHXnqg5KFNO3ayy_OvhHkPbVgXjQXEVR5oGLS3pLdrskHp8ZZslZpHxWLTeZMPasDjUn4a_-WNbQOWlfzOCRvAodsdOcFoBb3qy1CYuskkhfRN4soNCYeILVqqAnNSQsLwOqyly0yhqB7-2XFvoLpP1uxPN4E0cgFJM9Y1IhcGbN7N9EGFGCWA0HAkAFxVrnRo1UbxkJRoEdyFbpzxluK4vaVLLlEZg3HN7c-n9KcTiL9JL_V87XVZDPLJ7qDPe4tW3a1NElmoHnNKDvCoRq4Ud_aobD8h3CAmP5BLI6rkG61Cj28WB_86XknOXycowIr5pRWqC8veGefayvf3p0VHrhtDZXx8oK7ht9YqcCTcFjPb1l9RXbiWK2a24cHHu8re3lq2oRp2XmHzGW_q5evt7B-6M5Cf__EN5Y2B7dDHcgc2I5uNR1SgJcFXeRXxptQTj8FQ_BOh2eSUU0SBov14HngnQzQXgipubHY-qBIdVdqHltdEvY5Qb4d5WFrzd9LZo-u7E2OLM6aIsrVTR2I6l1cPLoW0GsWgqFEBFDnDQlKSBG0Vkpx_nbH4AoCB9lvnqRBS1YRPgKV6dIMEFGl5sTRgu5Lv0dYsZOwfr=w1196-h854-s-no?authuser=0';
const img3 = 'https://lh3.googleusercontent.com/pw/AIL4fc_MGCc-F6kGm0ysHLI8PjwTc3qIrjsT7Y5N1KGkEufLMuF4wjXdfBKvWolaCnViXaAnqwS2SzzeEIO_3G-zLWU2rqXCCNeoliMDBpXbp9Q_zUohpNVlQJae7NjmOBNovEFMlxUjjeFThm1uqg6CuJGiqVXsXN09xL5c41Q9WPbCs6MsOiTTtDj6mHE8xZFDnsT_gZYaHyrmSCoAbbd3bCNOTHFbLwkkQqru-zPzBISZFX0FSyG8h97vPQU5-yOHsswoycMzY7TtrvuPlCv6taKOopZGyz_p1w946zV0xBoautsnw-9Y0k7CxlpFxzzyp7J_RnuQFNHRjp4bv6bdHuU8i-ZDoMWW6rMIqDy0lWWQT7ClLV8zWkai5qNed1kgyTxT0W5GzhS5oZ1uxjyJm1a27QejzkH5hi8rGyBm9GKD63LYqoEewWzBMwdTsKq2Jfcsb-ZQwMGVUhZCStBxfYNwjf59nysxmOkhcGgYro3gYdnj2d-OwEYQQlfaxkQ65PXeIxJtoqsEF6zQTIOcbSCkv8dR4dBo2BR5v7jLqczfVWXkfxOYnsaOGGFNVOKtlUSgDOaKltAmt71_vnq2V8Bgt7shxcWnAz7Rh2RX0CG9BbwO0Kic5CAIoR6eysDVrRxr-Fvfq8SEB8bE7n0luqhbbCMbIPCvUxJyyLeA8KdZfH1NhownLGt-_pDgq0FYxzFXmvemO6x-VkFPMg1-7v2TlDhC5Zz0zfmxnqtAPxN6Q5_A_fb2X9Jnl6tFGA-MIha5infkQv8H6COgbtxKOBypcQxm06PhLW8mJQPVSeN9Phmriz-MrBrV5PUwky4BJvr-9bsH6whS5A1jmyMg7hQm1WkaEh_NIVrbdJo4xJ-ZOxGfjsKHrg1RczOY4-rJy7nCT6FaRVPAz_Xkt3jFqSM2=w1278-h854-s-no?authuser=0';
const img4 = 'https://lh3.googleusercontent.com/pw/AIL4fc9vI8crQ12w9dm2911XV5kewZetho_tCRF9ANFwQ1KLXjeWVVrL27aUB2tDfGErrdRm466JMJ6wz8Hu32PbrVwJxy3sIwR0pBBMJ_xr8z7Rw0Z4e5m-Mk7l2WEiZIaxCuO9toXZaBg-8te0ikMeDR7dnVuzVeDj2VzdTVqnSc1AwJLrJCWLkQhV9n14nrPpkGhph_yuOWDLYhVMEzB5jVOh-tYZEhnVYDWsGZT0bU1n67lb63PRHBybKOLLl7dVagyjMpg8bLGU7pUVj_LYQkY5vnnTp95H0txmwG0I9ZNwW-ji3pjfmxBpZ7WGstlCJRmSQeF0umsX-d9tPoi1nrbalKKHip5Omcja1WujqgYo60P5DTSq5Mf4bw-uQz8JQ6a2rcPa8xK_tJ1SpPxtPCwrYHet01rzxbtVvK9gBMhK86OEZqVEe9cWP-2_cftmBV6dH6h41qtAzU-1hA2j5zqB5HvCXb4d0x_uq98Z83mlSkBzcYkQ9rJrqduJ2Mh0JyJPc5AMvyTdP4Yfux_-T2B4Ms_7ot4q7IGM0NsF10zjBYu1fbolJjGCxmULsVivBTDgy2NVWbmCWjqMhA2NL8P3pbiG4DKdGASokr2cPKoaBjURIsWrgxvOYMJX0_J9SHWUpxAmP7_Fa2Zg_nbY3Nvwg-XtoiLp5IUQVuBcQbA6bxto4pRZBI5X2abnKaVVVkAtve_ljDCqMJIT_j-E7tBFElXK2VDrKROmPLX71bto4vUmQBhXvx_yTnw8UQglxRU3Cm81SKjEP1W7gYlYq-JR2WfP_KLr4W609-yEg2-_1UTqVykT1ksVlV3AsdSOy7M6y748N8pieolmVOcY4-lwezPBvDQBCF0NMWal11V5dMQJWR4mMtyaHBIvV7AsIcvOaVV7dqXdA0giMY3Zh0dD=w1281-h854-s-no?authuser=0';
const img5 = 'https://lh3.googleusercontent.com/pw/AIL4fc990YloUIH1j92nzIo9bnIiGDo3v2byJIseMI0UbShUX3bq8Ch0iBvO1Lu2MOH9x_yAcbLX3FNtzyN5jy9J1vSDiFd9Vk_BoBbsd7VncpKbM3oz-b94Zgz0CisiBl4p-5UGIehyaSHIyp80vEUylFLGcL00N1aBQkMiju7NQRu9p7ELBmCfYW-B0Cek_5y7zOw_aK0IxTK3d3EcI_mB-bfUMa8wJHSjFTzVQknDqr2TaK7T9lWfb2pTK-g2RTNJuG34ATyAzGVmkjp5CzKjNEXta7BWSlmTsrUk2mml3cz_dK_fBJ8pwKRMzSVMlqX2Wz6Btz_gd92-DbtKFYD51n_bN8lmDLxNF9OVnx3SKSQYSwol-htqmzkRDR7g2_8irYEwHGKgP7_iM3ZOMwo6ONMN36Lpz82XqUxushqXrP6rVXPPh0FrcINJLxP4HIA8R9hbAwdduk_eyfj2kugHmFI-sc55qI2gg3uJcskWJMOC1pNxIrTZgWb38HqHPFW68WNH-iU9s0KxJoOTwTZsHvhX1G7OuEQKvYYYIxwUnrH28qtutWrNuZzfQl8Q6QwDpKXZOgNVdcxvU26HSPQMNXfN5OaUucpxOiWunxh1DnMk65DDX40bDkuszACgGGAnwRhaMiH3dBGCiOvzwLQEnRXuxk8XNMYSWQnfV2DjUFGxTG3nwtN_ti0GEjvawQRDlk2gBqG80ZB9dRX8bGOKD6VVto73WEgx15W1T4Ewh0U8SMb6pM5_cMySysO1x64t4Qd9XGsT8ggOnjbsbDvRBQ-3kTVCUn7wFGXjPMJMgHxYLvVAK6UsFt45Uth2pFYNAPcaLOYfHAE4uHFCdmwdgVGQcoVenzxIK2l_NbpZjI1dYLEqHQVqK01Aw2EsYq_ojH0Z8tAfnnMhnuR5s_8Chqw7=w1280-h854-s-no?authuser=0';
const img6 = 'https://lh3.googleusercontent.com/pw/AIL4fc_xZpe2O2WTP7R881BNeMESfLrRS5_2qCAQtW1hWLUes1eGIxXa1OAtCMceS6QHV7Ojo-MyK8dkXEr5dYfrwzK_rFL0wUxXwt9BX-OkHkJ8uZRmLWhtKAdyAZhpDJ5QGJ72KSDzg-Gw5auRejgsJq3EVlQfqP2FhTsffSmUhYHRqx728BsCV19AMu0Hv27MgEMs510OFyfKCPVjy-rWSUSz7l0siFif53GCKI-LfCLFyfHuVq_WzhjmV9wjT7vu4TzH9DEjkp21jZu0dyD0ts1RSx5J2TrJhO_csls8HLsuGbf_86tVXaVGeooiGPcCtNn71pTl3gTcaCEeQ151YJ2Vhwyl9aoWFQGRO2MMSt0Aq552eofn1jqwP4PZ-Npz2UwgujJji1aNpLMX0yTFtdfOHleOgOl0RecQqKjnlDxVLSlaDpMOPN1w3eWsNbdAIt3nJjHLJB9roG3vIe-7Kw7Cx7SQJXBsJcKV2OuI5Bc0AcHR4i196VoLeP6ILW2Da7BiS3wcO3HV8XPoL02bkcP4RCwXRW3o2U7HDP_nRkPLZgg-5Pe-2z9RiVGUOFZ4aGLyUyf9WWLoXvJxu39vB94UlK6ZuUFqOpCY-oWP_SedkUK_Xoy2CGn0AuBf7g3cT9PDsligD65Q_c9dbj9lXW3orRWZPhLfTIIygWYgIg70LsjJPy73JVc1vNbDX71bpYDYp46MzDrb5qzeqSieSrhaXxsTOm3mxrdgU4SRC-sUgUVsSCoxlKHBqdq9m7CKCw-RmDU-bCkFtv2wbm7oMoPpBqirUnsIizgcVkhmKvFGuEoxf-eKq7RFRgR36LC6xN4YvwEEt8_IpG3YPKyggPDvqKsLV83LBkL2sANxcYkUqEDll1xOFI7tdtO7FQIALPDvOzgyZ2HUySPE3aJZ7YHS=w1278-h854-s-no?authuser=0';


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