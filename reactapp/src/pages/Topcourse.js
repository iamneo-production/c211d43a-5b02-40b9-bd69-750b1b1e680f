import React from "react";

function Topcourse(){

  const img1 = 'https://lh3.googleusercontent.com/pw/AIL4fc_aaM2jTBXnHmwe31Ag_HN0bT5glMtGUqsCNIJzJg5gMjF_AUlNNWHHiJrgWZdFT3JR3HJmoJwDksPI_9Rk_NFTn4n53B1iB3dJfjr6JheH2qUa6O8cloT-BuxqEmszDyAp_N6zHG_E0E_FY6YC-iSBSNA8hdQg41rY0CtWphyK4WF6Dsq2uyDtmoJ3X5qdLoD6E1BGOr2lJD-gYGPXfpfh0J7X3i6mnvDEkpgYePcugkRyWRM3lQ2HAQiV-o_QwBob-tflaSnZsGDt-_vsjmkNQJSv7PXd1r1mEhMy2Mjw1vJLGHVHqWE_3NuInlpySSJVmvB-Mg8g9NcWv28HZZfu54eqgfXaEEbn41_C4KveV0Ct0tg3xRrbPk1SHEHe8f1qgm9A_TD8FawX6SxPIo9qqjtVhf7qfsOtlKwUmHErarCrPUFbEpL4zzZkRBh6tYeNVjzvvQinK9MXEEUcRnnC_VO-LqLjrJ5b1cbvqTPtnxt0DW6kxly06sh3SwU_GtHl854McOjM4JOjTC61Z899gmZ2biW1VfLqrcNJjJlyl8TwqGRw60Bveq5uyA8CnN66OMR6ZldiNNHqGM4X9qcO5Ip4S2n4izKPr9HZaHZnTce1ciE0WYoUg2xuwNml6z-tHSimdNfbIcPMD7T7naogm0M6DvMxJRefwgOdCyNPiZGbrXSaf21X6BAIcLc-_6geKZai5PInkH38ROywtDruG1oeD0dVkD1oPawgPmiXqno7tJLxPWbfHAuqPOnUsqpueJVV85IZKjyqQsIKpcxb6VQadQdRoIPKXTPRpH6OolvI9MiAdU7EAvPUt_iIOz5y_KTtB4c8pdOyo1lfPl-6pXJdxLS-t56gND8QtO-Hacf_DKMMkEpGjpKjLd6qP6pwq4UshvyYgLdwEnWMDI-7=w336-h224-no?authuser=0';
const img2 = 'https://lh3.googleusercontent.com/pw/AIL4fc-Me32ZnmJxg9sAoXJcgSY44wao8KqzORxQHpY5I97PScxpUCGk8CDzzxwbZxrLHOJyHt9Xvtc40G4RfUYjFMLX2iFe1ce6lWjBnXeH0ZobPHupuuBB_J5pghk9UjULWas_MvlBj1ebjBMgduVqDWXkhcBqqi9lGvrwwK-BlFh2c7AXw7t7_i1JHImis8J161rlaW3RibR9RPbyL1b4HcfTqiKEgH8Ub2BiYm2eSEnWQByyTcHCAyt71eIVcmpoJYzCv5ieP6VgN2B5g_bwRe69wpzuDuP6lpeDwj-g4ymt6NcXv1ETyGO3bF27iiAuhFlIddiIo6YH7Xbwh9CVzgzUiIsHlp-SH3-k-_F4gLnbZ3QWmBXcGgvmdZyVq7QrGH3DHMM5v9t9c2hih1-u0QnhgTVpfnFrohIhRdqpW6YaPw98N78AinNK65fGq-NCweqTYTL4GsEmf5MJntJA_UJ2u1XSBGabAtes7KXQGgP_zcITakXbXkJ26NGRgsSgnps0tmgmiS2tOoHlGay67ZD783KKbKBRNmIfAbZ6hQZxVHR637FTkO7rVYGSzXHoc2JePjGNARwo3ZImQNWm5Zgyw0hz254tCPbbquv2pTamHCmJ5pFWqU5FUOArnkKd6IymkqkDvsfuO-vF-ZnIcrPQVqzy2TWw3HaIfu2rE2tv-7ppNqfUI7Lm8cve6L953tkfE4nU8VMHaT0Twtom75WmJw-6rnONVbewzWJxRC3Exr2tVpnuKxRwIqTeDNKgTfXHgqV9LA0VZATyT4_F9eFlBwS-ggIVqHC61ZIC16slop6FDdG4QKYUf5CFfkIQmJV19y3FE5sC18HXH3iwDi35mfscXL3GEh_rRnjzUKBkPVOSdOmMi6o2eB3ErmiB0I72J_QA0aqqzA5if3Luy-n4=w1196-h854-s-no?authuser=0';
const img3 = 'https://lh3.googleusercontent.com/pw/AIL4fc_hqkTdnQ7-DQPa7ejSEGlKyiSjeFOBfteVA-XM22yIdtDMatG4vq3oGqqSu2lHOP4xtr9XKt-DhymevFl3rRpZ9DZsk6bdAmwmprr_aT4BSMVXKrEJI4V6ai5yCuzxF355K735K7CJ7D51r1l63fpq31ldor5uZyPJqYo75T2GYbDfDCQ5GvmJRc5UQtH7zIThFFLeXbMSTQw7DM5_rGsMNl0yahIobIYfxDCnHvxIdfWHc65Qg5aRrp5y_54-ULfnrK1QJYljQl-BavuH09joex-DTZV50kJnRsyOjKbhiYgs3cTjSXkse8bTMqG_EwXmWLkTfS00SqFSC7zs5oTdiO_gOJ2JPPFL5SQ5VfX4hGv_DzxWtT6bW4GwFw3YEAcIV4fMU4egm1AWK6oEINCi0DJUfvmOzox-ZkpcEZP2akOv7BwKZm0Ndyen4fBkkiYtz63QPKwUJUhhLkBIWO8uq8d9qHS6a8QWD0El75j7FyS-P6LYN74pTAil6m6_dK7kVfSrf8YhrYlFZh5_hRu9zLTEIerXseqSn8JvXRLqBAYnrJlgJFmpoe0kxCP-AL8SmjxkxinknEJS16fLblHzjeB8RXzEpXFVORWqMSOzHqnG61Rnu7cRrTHT1jXXSH5iJGckttWN8efyW9V7LdReek_tAiTR_U0sKECfDWEQ3BT1lR21ME7TGYxW3m6nvGdKy-1ZKfxXS75hu9UwUcOnzVmZKhvCu4Lwtk1M7FJ6VWAhHYGfLEL48DBYcE1_bJ7QBUxli7VZYc4lcyPJzhp1NcjP97RBr39DNJEuZg_PsRjDV8djz-NJHMDkawqBJ_G0jlfqCPOsp1qySdMHC_AqAtF9eDWWZvDR0JHm-kcREuG1q9CM1Umi4RphpyXAd9QshSDO8tr0PA9nEYlN-Mx4=w1278-h854-s-no?authuser=0';
const img4 = 'https://lh3.googleusercontent.com/pw/AIL4fc-9AOkBz8TO3MvLwT3UB2Ky9fteVgOf5Jm57U8cL6vzqBUhPlm-Ih4GicSyE1bX7c6hTlkLuM6q5JTRguLJD-8lWpRMWdnudHOWPxyL611G5mRU0Xm0ciBhFb-ZYabq_bdq1ok5nSFt0bQ1oS2TwnxQpqm437QsGDjDAZdB3H50asA02_7u1Zsz8fVMQIEnhYE-8bswcOBSGk_4FumPC-ttnJzTN6xs0E3t46uwVStwZUqoYcImwf_P5CSeChYLiyeq_f4DtHAZMVDYz-NSwSJcjdWqXWhahnY4R_YqbFrgAkcHesqiciU3a_tfWKxAZ_XrKzj98I0sFVMo-ScqVEIh-Ewuek8WTtrSndDLp6mkF2IQTTTk2L9o8a-7_q18cPOCFZ525wnTR417Nz3LFNivx9VAe7qGOttQV7UdFMpRAjotKoFXlU2jv2Hny5G6r2ovd8j3n_IHAPiDLbXZ2L_kyh2PgFlMQUWToV6-88rGxZV4YhmshpYDEsCv40WLM6EZaEDouoRHtqBqPptC_PQwIrmcJghzJcATk7kxAT9FJitXNwDlRHt6Xq5CPotZsMs3qoaHQHEisxPHGW5AhlWkr0hiE6Hy-mSAjzWwrtrFBUkQdXgnL_Z73qh1cxKIuXGmGhkkiCfTAqbcsfrvoSvacHh1CS6UaGq__DSgrSTFWD3aMO-Dh0KC88ehyM2ZRKSD-_IgTPmVIT4rkh1fB2ScC3S4LbD_fatk6MBBsRBOvIND6ltww1J5jGlf1praP9_yvWaFXd7ud3HXkBl0wwDGfKzawOVtNvLKATRNpgijngj2hhHZTVzZeQZfCCltz1pNCW8cazROE0E8hGwu18Sx63h1F0UgcdsBp1rIKJKjPXmk2aU4CiuZWjc4BOn9UAIjSsGzGmpBUYo0wWA2fo8i=w1281-h854-s-no?authuser=0';
const img5 = 'https://lh3.googleusercontent.com/pw/AIL4fc_ETBQILSz_4590AwiLaCRQ3nAz4rHIJi0WORiEDK094Lo2UX3OSKvrli00EAMXNM1Q7RLjwV5IPEp5HMgE17SR4ZN-ilqgGU7ZjeMHgK-sKQ8l4wqvsFPchDMPYs8MnPQsSZiMh_oeEWyMlBhpU-7MsE1uCHI0iJl_jrIxPhT1XnOJUtFgBhGyktZ3cBrXeD6R68FD9a7M78BEt6gHPp0I4zF68W0vfh9UuEFpHn2ESTOBas6hzt9FkXIAjL0iZe7Aw8OuMmLKyWARQvxmtKL6nbFKr_S3Vcz7QgUMbxph16B9SBDMFjzhzEgkFapQObBoiciyxylGaOZNxhS_EfoaexdMIB8CeqyOWuGFSqLlXzb3zbTiP9F-ZqNxKCxpm1cjL_zVyjPUgGxUm8lLQQreXsiOVrKc2QdoM_GoYNcYNVuKJSj1jU0HjjxJ2MxxNUGyD19S-tgzBSazJxAbUL05xDTKG6GTzuav-aqVCJM1pN_a8AHmLo90j3hmoeLxjztZwIIRfWgC0GkF9VRaUQouBspkoavQUWOWOea0fRkuQL75URUeKGIBol42rQTcl6LLEYC0WsoqgZe1DVEiKMWZyUc_5pSHF5z_PCLa9vnZ7ocmehja0aMO6Vu0XRnmusvhcN6dm8YqZCqlKnKQ4FPWMl6NrvEXCKkbns3a-VVfl3c8si7727hoNpMYWP2pLHd5vizlvDUd8D14MWuMBBWR95Ki-fSiJ0v3WZyxV0dIBrL5WM010VSPQrrf6lybkOLTzGRpdJHdFbqySexodRmp0jy7tBMfsLZzBtJ6-ej3tNim7HI90DLJRwUu7F1ZJhYt-wDC1ySTqpGq-fMZoY4SRUN8dE2Lh326MdUq1j1ueXo3CG-vvByq94W9WRq0z2fnaXimC37797QcFjAsttFR=w1280-h854-s-no?authuser=0';
const img6 = 'https://lh3.googleusercontent.com/pw/AIL4fc8ZeWKiGfiYTeSSn2FHEBsZGNa1pMMVcsDCaqTZecRGlc5U4F-ppHv4TTSeeDxlqRtGHpKGg0yT1qjCFVEBzsX2TaHIrR2nLee3OqrL7vcfWI7C44sIeX84F9_AzSK_oZP_gGgWUfE-0SWU5BQq5_DsmFYBzh9NUxdRr_8O-cGZHv3vwBHHHK-aE6GiaoyqEbKmgid52JrtYZXu3o4BCbxsOB_na7IdFzA_bKZy7urhWFTS-ezAArc7MPOAR6I5dLfIbTC8bRXbyWADIQzp2GS-vk5Gw7482sIVWdxcvWxLmgm83TSXNKu-jlONBSmk6XYrZFTZ4Tb0ass67KQt_lRC1GoCTY6jwn4yy07D4sQxXlMjFCOJOVbkCN9MaF201ZfOOx_SkQ3oi5-KDgSg1N_DYcQ4v1EEL6EIZv3_ch_WgIg_MqxLx5uEvnV7CQflzhZ4jXJ4ZsEk8WCV-dPlGvmj5pt0_cxGIvxepNHzbW4hnMDlpCmUvWX2Bghgamdge04VY-cUf-u1qDhF556yhs8yQ-v5MPInwjqiiigmC-hFzykoOXXUF-7fJZtGuJs2AmbqUsPhKFb6jvizTYkmBKEVDMiY_lJj-wSa1y-ZWR8DdS6eNSnuOdU3oLVLcNvAamiDkhAVef0fquDOjDU2guEbgdh0_knhT1FItglHC3TVansmOyfJau3_tXuJSr4vaXfmwkgaqBr-9BJk-Md5E0RZq3S9kOC3kZEl1J92R6e4lqiwd-nY0byKKGJ1KKvudxsMWxfsgOGajiQChkJSxdrs_sGx92hpqm5t8JODYFU4p8IaecvQ5Y8mh1aFTNRWyDdZPFac6fIg1aw_C2IrRUNbBq0cyRTlIsQXRzvYgjus6I171bJJpVErw7iawREpcc5i2falh2UgAis16NpBoEwb=w1278-h854-s-no?authuser=0';


    return(
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

    );
}
export default Topcourse;