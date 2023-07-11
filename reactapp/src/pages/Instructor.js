import React from "react";
import Navbar from "../Navbar";
import Ctc from "./Ctc";
import Footer from "./Footer";

function Instructor(){
    const img1='https://lh3.googleusercontent.com/pw/AIL4fc8wvBHUQZiBvVeQG4mPQcxREfjaKxJFcuw4VgtMpltLZhfL70Tsa2jncEfxt29rtIUbNNcTkc-kqh2XPaQk94mtUcCwh_3FbBcBgYSFaeuBpAB9rL-PXrRNF6fQ_7QAOUWxG02HuIU38jpFOXfCS4oIEJyrs6mleWUGAIkxtBrj9lajzHaStST_9sEYpAoxH6dxSNv-dBiBzP9Eeyk_Fo11oY6_d3dTkq_BXxIUjpqfUBJUOrBJWxr8lOxJ3-oYkmozKSk1PfTVH70rUrxKgiD4bKqhvoNLvJxG-0wc1r2bY8RYKfsNkHqDgKUx2_4v7LdCIShSmh6pH-6gFP0x7Gdd6PPTxNAwo6Vzedit05yd9A0pj93oOcyQ36Wa4BbAt1Z4IH-zxzjTeAQ9xVbHEujqT7nEQVYvJyRp2nm5H6FfPySOWGUlU4I0Gdve7_aLmOVcp5C46GDWBuyqucvNoRMPC3YXx-K93FIROPX2_-G7isn3QiEqwfi0AsqU83SwF_I64l5Kmd02skGUPJRsB08FchDt3VQ9eLo1vx3_6kiSY7xHiGZAWGPJ8vmPEp59HJDPQSGDyeT4KHTWo3WZlKJ9_ZUYil_rFIdFW617h6d4vVPNtTtwjzFedOYofy_-KTAzzc1DF7NL6JAAy-pPIZ8TJ-YTLc-_xBu9DlfXljsYW3e24oNBjZtU4SNminaT9qa_KxPoggQY6Y_CLmnSO-J4fuzBtIVOFz51vEpmN9knUJunfOj-5C4FbBaOovMDGP8zzW_dbsE5AwYDD6JdRfzQ1hQ5VhMWvTTt12_h4m-LKzATMHU_dU1OZKfu2f4rA1Hxb2TZpvJAKL2_fUIo3nQ6ISpMcB0gfLgjkylzaG7RJWCpJySSpRomH6_AHqJrICJ1Z1bACDuUVntPldePpvN2=s224-no?authuser=0';
    const img2='https://lh3.googleusercontent.com/pw/AIL4fc_lagvdCNuqmK-VCvQC-T57gzUMF-rxjRg1pj7zGUqvxpNnJFuwcO9YtBkiEKV0uWCR_kA6MmRDgG-KtnOdJz3Q4B-ZPHWJF9Kjh7O8PVCu94i_RMfWFmg6FkojX9H6HGuYtG0Rl8mwdWbH39VTosKENgUYBBaHyo57iXAhggYtBXwH2GQYPag-x_gEo2ea09CQmy0TbjrCNKPfBj4arzR1043sglvM8YlyzF5_t7p6XFV0FX3c-qyKL24A9AH6HdKoH6ITMgK5jF5gWggpnNzxYxnj9vJXthQeQ9dcr5qklkGvU_oBGxLutbf08gBe3KrELpro1B7SfjAv21CQfIKeODQiSW_53GrGGWSqHZvX-qlKrSWMJEqnvhwOTqJLXdxzRp2iB21Yk5W9fKzLEdPZLcgTQv5kmhn3fpJvsw4ZOuk7lLn51-6MzTRBMFj4IM3RvcrUVFjvaywEAWDeRQpjKf5uor-ce_rb1yKqkkkmxNCOb5axgyPO6yh9EZqniSM-gqCDVL7k0UoLiapT9qQCS8420RrLFVVgB5HMhieB1FRbnZfApyV8ZliTUvZNnstaxQAiA8YR9TCOmMGuHW8GtpeaGoBcuUND9cqifGrsHikqIcwx9uqr9moSMGHvPvIHgdQVEyUzP6qX80ECPKZcb9ucz6fGEdSo2jXX1LFkdHFBSY5n8TTc8-wvQAOBB2_sMcSvToarmal257aTsByT1X2Ryp3GPpUy_HEU8ox5VmIeKZ1RSavLGzsj3_IWLHc7NTQo1EAid93iosbr1dBvdaBeGwlRwQqcrjJZdM2rfacFNu9Nv2VsOLoHWsozl7ucKT3uGqs7ADlpRhgKDNBFwnatlwNZ2JMUPr3qz_Joy_-H0PFasWJGtCCKqCzsu0u5Rz6dkpr0t4OLFeQs66Ej=w854-h854-s-no?authuser=0';
    const img3='https://lh3.googleusercontent.com/pw/AIL4fc90LdNO7SWN9CIfwwS_btzJTQkvnmMVU9l_f6BYoqT7eEHmijOWo7-dlUQY2mEmvfCCgOqWVYPJdjw9s8Ip_tiy2E0jgNcdPRAuhQDxwctHbmXgfISZ5E-Uqj5FiwJuUEhRin4934GTG4gxKQSQSNSMeI-g3l1B9XtlLtpVdnSIOShqcNnwpg7hilWVV_aY-Nk9R0HGIW2YWQwN-NYtnBMWGxjzsf-H90tl0qldUeVkmMynnoYWQ0aHENUCa1FcD6174eK3CwyvSOU8Cl31JIDkVop0aAztlRhGK9eSltgxXHmFm9R-g_h0EHpCSlN_ghyvolKJ-6wTaIedIn6OJorlFGYjthVFfCQNf35xsNVOzD75npW_TukKj51TDbhmFa27_73J6Csz4j_MExssaOHiCKA8LlEY0pESoZ-sV1YDfPpP7u7VJIwdnaXOZHF-9DGfFAYRyxadcmntq2WJ6dWKEN0WzauGKuHno8S902bY3INKh3zmxStZENC6s8cmqAuCvSrIlauxOdl6RLDONid0t6O9GJA0dVNzjFkVpbNThyP8gvzyHnWfXsAwMiytkAbk7O16Zyde0m8r72wvHcA1Fch7T-xuXZunajL2b3Jb4uV4Stg2tCamC5f47jVXQkUOKMsccBMqr-2coS5ENwYIjqvCOCf0EuGOyUDtPURpHSkU_vJUTr_zyGIwBHn_AnNTarfXJAvMtpbuQIRuxBo_Z0vHGC-9KNA46KglqcIuHi3202cg0P7gM4coQyuLE9wVUqvFbkZhWJG3qE7ODLsj_qa8g89WTvOzYn98nq-4MYVJQ03_Qniw4gpfjJRYMtrMaHkBYTMs6H_okB_L_TZ1FrF3oSBH1z34vKPMRQoJhNVdfABBPRu1eylO94Oe_bCGEmddWZdioOxpk0a1b676=w854-h854-s-no?authuser=0';
    const img4='https://lh3.googleusercontent.com/pw/AIL4fc8b78Tm7eH1bd-8Xi0ozvnuU77stXOczykdrKXjTqs_4O8zJdkZFaNfQMVhv4GxLpH2XYrH6rZYrDf9d4BOlJoToZwBz2fTkJMDJanPFbi6C18GeGkQfM240wC4P5IzhfRyYXpGChwiNyvTMBgpGGvNX7mxJMCozfV8J4-D_Q5VcIxtBAtNQIVZ1YAonA2MLyc_rGl5v72KlnEVYjUjj-kY_Ov86eWz_cydSg53FAD-3i6AX_bs4gjkhydnBtaUP4sqJB45OzHJGwVaRtsTgHWy-jIoa9V7lTNcoIdJKSDRYBKchhzRYOI_cvFVE6ZwmA_xEiCMjGDOT4PpzPHQr1UXOMJIGvAe5EABoufv-ZCJuUdxnxzlSUNtlJQQBV31y3EOGMeHMGctahpZqdLM-6e5R_0zdmLNnKPY8C8PzaHS3K_U25wVJiof9zuKoov7ID3ZhE7ma-8sXlX8YisOPAXmanA0q4mXGlGtSZ4epva43SzgROstVpkpRkTB06WyZRjzdXp72UwwFuwDxz1oYFPFPbtYmLiwHkaPQxXfAbqQRfrn6JHwLzKpp4Jk0DkgJX-xExLW5DCmBbj15PNt8k3w5o-5aigcAbdEw4DvSn4WMcSU-T2W5C-nwNFM_OLtqoVPrHQBXEw1LIQm4ebFIxTkItRFgxR2fPJZTacDNX-I4zqHW2OlAECbC8vrDvVLkeuu3bv0oaSikcf6CRpohn2hbTIqMEtaOKIswx5hxJswkJHdlkmUzRYh0Qp_XlPi_NlrInxn3o0txqiuGjs_XwRTWJWtk_spQvfCehJNrXWPt5AWzJg42gcka09hbm_zC65WUWkux_-8bVs30n0Iz-boTcm_KGYOLY-yjYEa3RlJ2LXHfNVDpsZr5rcq-yxzWzZxCZbfyjfq2L5_jp6PYsYV=w854-h854-s-no?authuser=0';
    const img5='https://lh3.googleusercontent.com/pw/AIL4fc8_LlmA796CYdi_ZdUptD3imWM1baOfIorlg2Dd5fWcc-tl5x29cvE0vIpy7rRBCFOf47p0vOy-XLxmuyiJ8R6-oQH6YYJYGCkXzKOzTY1gGlqj9NPWnfJHLYrCiJcGGE-qv4lhXxnshXYfbbXaNYAeTpQFpAwKkoKTvja96GVk8sUiOvLBpzMhGQjlfPbrR0LfHmYIqnnJWG69uf9I-1ZmiJzbJhV52wh525ChgRuzjh1h7D1yvR2gXci1ab7_4bl54HvOsOCeajRRboWWA_OEj4S2vfklrVQ6xL6WWyNEe9IqiYFSpUYvj912YeETZ08a6f0iCX30zEX8UGKPuSIDyv9SbfOfeS0Xg_Mqbn2hB2s7PtPMegmIq81MUfHC12ARB3DSbZgUTjTtKBvEzDHbQ6NcNfPTVTheciVpoinf0F5hCOyj3anzD6vexJjgaKVYj0vv_LdCbS2M0oJHb8IKojbCy-ljRSnuj1WQyXWttLHQ5T49L2M8RN91kHJrbyzd2KWhUY2lrV1lCSnE1CxXG8PsabRxINIjh7YDB5mWsxLo-bS4pAwel37daQABi9a3f0KqMMj3BZFtwoIRhcfTglTzeKHaI4lj6WqEH-nTvXSyYAnof_N947aMIpaaY17G6g0rl5V2DCED2gQ16RcYd-mxuN3963FxXmNVhqjySIkDX0nnpbcGxnRJLhKOb066H-B008YwO9lYxMObNITJINHd1DgbF5CUbUOzkbn9Tp1ULlwr8BvfSeUJwWOU3mzW0IJINQ0Q3ab2VSlM-8EKV1ERikafpv9-Ejp3U4dCLfbFTGcf6yNLlNQMg5emjslndYbOA_gipPH3_lOJHZ-8w3RUgDqNcw9ZQ93jQTkjb0FLY6rKLP94D2kAiQqS9Gh6mOHvqG4g4URPdjcJ-yZg=s199-no?authuser=0';
    const img6='https://lh3.googleusercontent.com/pw/AIL4fc9_tGneR4MUTlVVGWFWUIsudKhmNbhMvpRQ7KcnDfpN8zwFpMMcOSQkbOdaoEI-xBCtYqCJW00KPiGS9P1uQEzc2b535hPi6xP859BtaJkOuh68ySBethJlJvCyhJ_U9GfLVPLsgI4_6uzGVn9w032t5Nq3pg3WuGMWhJ0Le88LzBpbXM10xwknwFnTYmwr_Q3kcwBOYaop-FswRNcLDOUxx5RC33sFnv4p9Lfmww7KI82VbtVpmZFSXpV3l5ACH48pMTBN8BFKnerCytnuLQmNSk8cHwXpa4vXsUmjsXNfxQglZm15WTP_jLY3-XaBtCnYKFdhQ83d-__F2P5WMIKkARrNR480S3JPxVPIRNjvrQOdsfUl_hz8FTjAn7j0iZRvUTLK4bQc127ISuLuz9MWCawADSZTsSNmH6UlFLnYFkL_RdByurb5HN0O-PWVPyZAAv9zYMcvArnz_GBhMisw_jTulRbM1K8JzOIh74Z0redI25rWJFhTjTsoRQysmHgp0grEIrT-CgnM9ygY1n_XMaJ0tZnu3_KBw3ZqZb0qRY_MOL0FdkIjWQGMe46aojyteAR43cSDSc_dGY_zseRz2iGWIjYQBv3fC4Bg-rBLGPZChn74t0jlt6i3ulaGLqaH5jcJhOOVixbFLO9PUH6ti4qmSRX2sCgTq1Kx7-NbXAx4iEY_V5sf59F8W-PLLq5ZzwH5F1W9D1rZC0YmE5AzeziJz-9pinBiI96RAOlKthT17lHMLgSuMFQvDnXYyqdgMtNCyZVsScOc_sD1sdUIWPyWqdiphiH9ND2KficklyMi_ljq59NPjBNVM39VVW6AsNz6D0Xc1brhkb3B_iNDBuwzlkTruQ2cYGrmWfJGnoQwOL7WKFjhHSfnHqZOE-QtRd4qEQIBjjvcP0zAtQLJ=w854-h854-s-no?authuser=0';
    const img7='https://lh3.googleusercontent.com/pw/AIL4fc_xpDOG8glet_sZh9m3AcgTutr-iStrZPaZy3PmcHsLenTMYFMz145aWeduAqneSdVheTyCTSXp2yrFhbcQ71GO1xlDeYSWa9feXzlsDtMN0HkCZuvSv5Bp7iJNxO9LIv3xZwTM_oM0VskRCLlj-HASV_AXxSMAr4gVDPanwt7c3APL_xeM42HWPibt7gnI41Kh73z5dtWGt1ScziVehoj1Y5oY6TgmXQSqPXR71Jvv7uBT30CLgNKl9jWhLJJO7XK1JagPQtdHw39T6XdbP_yO2UDQNKUvAfRoAQvd3JEJ-Al3a7KPWfI8baVTrXO9lgynD7YcY0AVIX9fdBbtGgTXoLGWlV3JD4JFO-OAYfiCfAGKorTw_Bjb4FblEWFDbe-lVj52Mlm7hqHgkLXEY2VHlRismRiI65Q3qRZbQ3LS_rWTJGI5g6YL3k7cBZLdEWeyxwd2VavpTVrrY2dLXDCU9x2nyoJwoNCbuOaNChod3rk80eIMxNPlX5Mn93tIUBx0-GT0TDErHMVRFHaB54K1qyFC7w54VNrj06HG9DcbZbNz3hYLLvSK4tHT3dAPLGbxOieBc8-ky2YY9VUvw4qXxReOMqRY0rXuojNCtgeGd0og9pUAJ67S2uzvIwWMPe47GrbuVtbdDTitYvBycINmmS24AE0qywMJO4-bT_cNj5LKQhLAapJSUTQYKHAwN_7_ujLryAV3teMRPtiwqGroNhAob5JXGqcPN9V3YfbprTzehVV-T7gwgsP_TvMhF2JB2BhL1jsZpHoWXv87S0cvkDBMAZ4r-_J95fS7n0jcLZfRgA1NB7edTx6m2r0IeRMlUl5RxNnV4X7UVrOjUUFNQjH-Tcw1V81TIg0C8dICNMeXBwc8W7nqUB92qXwPt3nXQpNlHp4TUWbLVZDYSJbc=w854-h854-s-no?authuser=0';

    const img8='https://lh3.googleusercontent.com/pw/AIL4fc9vBwRrGnzULDmv4G7rN5U-Pwl4SX1blj_-z73f_yIEavdJhTgb_Yi6orMBupTyCd3PyKu1MM91Zx_QplSVsz2DyMXwIeL6irCJabB1KupYA2eX3fjOEQ_0Hhjy24uO0jB-FH5YH49FBT261oT4XlS6mceCBwI0D3Bp9EfkOyNjuwOefErdPOqLgYpq-2pIKwA6vdDRuGCZiZ8pBpD16gwi-Aa08fLkIQ-xcNMEbs6Vzc5KH8rzST7_bPHU5Wq--OD-2c6Bv_qi-tZ4u-CWx8fqdQvPZ5kkeK5aVkZXVonokWqXd-fvyorLpip_tXK_GoYMP_wg5hUkazx6ivkUZ6mJugpjmZkXayAyXkZpzC6ubddoP6-HSfswzOwq370bZ3A0OMb36iO9r0-yXKE4DkisuMA9yPlTycJaPMSeYMHABEs6sEO8YRW4CSuMjbrOpVwLfBEeW37qG3LlbSD-z-Pd6lkCORNc8XeXp9taDixmf66zJQmsrUtmwwfjp--PTNbVSvKRlywmwZg6vVNRyrWQ0iweN9J7tcm41iFF4o7QZZcbcZM61DqRejWHu0QfSe7Q1x1K_rKbTt6IhOuc6aHrr_W2vbeJ0vwq7H9YqKqxZ7YfLpOqLtRvZos_6PlMHoNHKWo28hWYNMHuGFzpqlK-xB35Re1DSUazFkr5BdFnWRMxhklXfZxj_-A5bWcCP9axGPCoY2uGihA80umbTVF-G7TojGP6ud0RGeO6kDviKlF9WDDXzaYV3h2VWWyp-mwvk63K9Su0kjAmmsyOXRATJEdWL8JPmuZyRJLgI8mdZ04WCJTbfziEuKDX1A3x_lPpTMnPbYtfykqlrJeneFVxja986ELN9jf8M7Dat-ifd4QITUFQazL_GLHtvltx0fgf_tTfldnDcD9qmCgujuCz=w854-h854-s-no?authuser=0';
    return(
        <>
        <div>
            <Navbar/>
<div className="instructor">
      
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