import React from "react";


function Coursedisplay(){
  
const img1 = 'https://lh3.googleusercontent.com/pw/AIL4fc_dZ5TPJcOJZZtAAq4S59OkyA59vaklAr5xz09MXY8MqgNVj8qyyvoUqgF31EpR9Pu6yFAUWG4PwTToeKDLGQ4F9zZxGpcV5nx4JoE-K0tBNKg8eZZKlgS0uJPe5nkXnw39ksjpENFnMic0yOJWurtwAozD9caI96o6-Pb1PSQiyUNg2zHtk3W1UG7fKF1LadVVOCQ7Pq5yKCxUrnW2orlwdWf_ZDDhnS0dZclV11xz8tVb8havu8m15xqh5EZubmQeUkaZkOAAjU8P7XEFeSg79UPxq_Dkgzn7-WICVdr9ZlHnWzyQl9WXKFaguUifRhf8W7oPq-A7ES-KnR8mk6_V15uMeqGye9dkS_KH3Bd7YOqieQfFTzYkNbHA6ct3K-Fi9iYpAyVQbQKHc7iikWQfbnG98kX4YVBcW4PqvSNxUYcNsq-fRAPR1FMtm0HK_kyqMNx6BfT0HdvmlejAXICOoQuxt6K6BKhHKdzohItkCRe206U0M0vY1QLBNVRcmjxzZgq3iaX8BwB6yXvvGJLQ3vMZbkJCNNwFjZPdw-QXp0kBR35rfpaFE9nrg9xIPolIs58gDiekGC6MDAmWZ2XJmKN-OTyi9bgOyaSD47RlDljiJ1J_0VyP1qg3MyxDiFXCmvwx6QCG5B3j-gDRHKVPSZ5gRig3vXH2sYIGq03YLM7T3VaOYTlegxaAlg3zBFistI0rKNK3uo3Y2RF0YcIcqpX7ycuIlPD73CghW9gq0DT_6mKqRV13pYuqAMpQ317wbYUF0JP53g-KnM-1SlwbSaXGeNXzw4ySa5-B5YcLsH4A7aydaCzjowJn7oqyFTg9Sh_tOfS8fMtnjOS62SXb5jueUZWBlTqQ97RSQJ-DxFQEOx9_6nHJt1S7RBmUYOrY1IHwsvzRowGOlQDpWpDh=w1278-h854-s-no?authuser=0';
const img2 = 'https://lh3.googleusercontent.com/pw/AIL4fc99ZG-PU1TbMQPO-VIpeOGOVWZprlDRekSich7wOgHjxxURCEhaH_2rf4h7SpBCqHN8_cKuNOMfyjAKSSSOTkFPqnXTWAqO9bcoswluzEck5-VQQpyhYhB-2Rn9qX-BgKSpg4f0-UteI-L7TL___GBCF8fl7PAHRJTO_rLfluvz91_mLwhVIfJ9d8iEuEoi0D4J0ql0QDyNMUX7XuLXcIa3sqX2iCYNW1w70Y6fb_Qy81dRGJgHc5VUcYtzWJ5IIH3FSdcN5rcZ-24lF5ktK3hEoU-9arHgNfyuga9YVVFQ6M30HnrtjUb05_1raY2iIUEDWXwG9OOD-Mb10wRX4e7MmrWXafCoGUGwXfQZvXzPEwZdcs11_DNY9GcCJfKVq3lBc2RTECIE_dEgZ0Uk_0p_eFzw1i8NzqKwvQEdcFHlqDXxDQAAfx5UF5iOYiJQDcwPa6lc4yQnJ-1OPr2_RZFcHgWvZXydDYaACc6-1Hy_mSpbWlKrXfbAw7ARE_KX4RKtblW1RmCldoqv6yL_37qSOam3WWVgn8vf3SDTvIkRcN0ZY6xuvEuUQC4FJ13vDUdJBoLB_I6witH6vWOcZOgSOkR0sKnYMmBDpKp92sNYiFUE47KDDG-C9k1NPNOVDmWg0llorlfkcpJyeQS5oZJZukiJMq_9vTu6Id2pGw8ido0ctXWrF-XxKEjZDq1E0FJOhRxy4qIVcS04JMo92Vt-JkwzeiKQrvGryz3DsJ3bDLza5N4Yp5aFLSG9Gf5GR7Ts722BMzQUo59qGWcinISbjRb3t5ya6Fu-kXNzNw9FNnaW36urI4fimx4rhShFJgKf5tWDIIoLRApmr7ah6BS5X2fnzcndOpeXdmosKKW4ESPX8gfc13_gnx9RhBLYKmvIVCxyFBSaRu4dxSsyUACO=w1281-h854-s-no?authuser=0';
const img3 = 'https://lh3.googleusercontent.com/pw/AIL4fc9kFWJG-6AjFC_XMjiZH463G5eN8bF394Hhz3YZZZgruAnauLW-J2NJpHB2_MLkE7PmtgGplGja08ixPCC9FyVPxgRwpDr4oKpIIzDQf-LGmJ2NqvFwesyyblbX-4x9PzksksJ8Bm8EKatoZ6W3EucVucudlQnTQp6VS3s2ToQZ4ICVHrhSW8bZZiGU3McpJKB8dwQpCH-tI0lLoZCDiiLL20ah8JMp6ZJ99GMr1tW3LbubBXm5ZkdoU9Sw_v_lq0eeFVg_PRO6ymOilLXGPA0lAU2bOl8drHgoM8kmXqNsdZoAab_qJfkiAB727nzJiNrb9sjox8OOQ54JjdFNnJxRMh34lNh5akqVAuA-I_8Fh7hmBM0Z_YBnEAu3KQ45Omxxd-2wOs_diZzLOT0Hs8LS-b_sMZCCtCyIsSUCoTFClLo-PSWJZvZdRvhzNQF5JEuPW8uib9gdaO-FEtPiMFhl_CHv4DGi2om1BthdgB1NTQRKXXCEnIUNaCYYr-gGQ7jKZPxOpWChLRGLyRiPpfTT4ty5ASKSIuHRPAOilp88J0Vp1ipET09a1glnbKZKsmbbVsA2KUSwIqF_wB8LptaSMuM9sxz2D5epfF6tRCvMr_o9Ab6tmRLnIr0fAhVkuvRgaKa1Zv3y9bor6-5bcUDjUlzUW0INBkVOdMmAtof5mIpEKfBSTxPdIWJBX6DPMZeEauyUj6fIo8PlYxasyUtQyn1gxX3Kn85pcA40xhNtFdTLNfFrrEEWIIWwHjIFelu7t9Vp4S4qACPE3XE_qayLYxJItCsDqZrKCaWevvclsUvvgQr4q294DWyYVfCRJTJXaHakQiLl4lrT8EFdTV1uqUkQqtLjCcJgev-UnRbEg4-tb-vtedNTfum4mjXkAEd441SXfNm0RNvX6glRiQWg=w393-h280-s-no?authuser=0';
const img4 = 'https://lh3.googleusercontent.com/pw/AIL4fc-L_cCCQv4Hq0dwWokAHYuzjBfb75FcYgZrPe0W1a7-xRF4-PXxwaBVaerOWqszzCLZSYEKs6ciPo_q3wiVTKcFzM_NOXdl1qfg7Sfr96oDaZ3QT6h011DHs8p_pvIsoQQKGEr6pWa0hcSnNVqwyY9fBStzfi6mOiaE2hFTT6rwXq5Rr427119Ps-IcTKAufo-GHDkV3wbUwA1czP2iOEbawPjfBoGOTOYAeb6ZJe8oISB5DIsYebrZ9kev98fTHigMX9eqELF2dkdKPWxFTMiImWf6ZZA4icsgbwdonxuRS_VuNJRhjI6QazqG77LqFIyWRISBPffwOV6w9p2rs2G7WkLEw-sm25aq0usWGif4X_AVsvpXqyDpaZJ_eA-xTiQLZpADizDrixeSkwzvUk3I2eYWnHx5ZMv6mK6pyRo8AdkJTAQxEYTPfQpFL6IsNwlS99m-Kt66uop_9tCC7JGicxAXES3dZzYSr9npQjmW4GHecxZfBfD_uu61tBycRFwVkvNEOsj4XXpSgX_TsHhGAgx_cjM5YQuj11hxinb1UZnDdD_W11kSuBghhiCvHP9__hdSpA0r5Ty9YyR-NqdHTQl3bTkNPrTuB-9tu-sWJfIyjGXhVx8jQ1NW5kUEM3OPR-nMGf9JHdhpzij161inzUmVJDlOa0wFEufnfNBRfVOCNK6XXc4zu_RGFK2WFwHKJnQb_9Nt9xseERqUZAgb-hbKuWaDgFtjUQhKfdcG9YrWiaGunVbV_BMBAxWc6bS8TbShH2zgkdSMDZrcrJldeyxls8yxc4zzcy2ExfOBeiHLjoQrqHvSubhDz1qbktswItjIK3A00COQK2w0nyEnEbfMll4P-t1TRkPD4oGxMdwS8pTJQtasd2SwE-uL-17zwgjQ3GjKdUUY23hS36J1=w1280-h854-s-no?authuser=0';
const img5 = 'https://lh3.googleusercontent.com/pw/AIL4fc-sd399tGeBVa1r29z9U_mtmJaLhbd1AzcTyecYABl6ni4c4hjconVItfUvEIrm7Mi3Bwm6SbocOY-B4N-jnOhWuhXlJd8fkVjuhFi1OKVUwK_312aGUGI2ssSyifHBDpFTtePbb7zvcgz2V7ceyQ_DI0RQxIQkQUPqaRHMMSdoYGtqzYNHA5QRY-jKxvflGK2jRXROhNtVLEgXJGiLDqtsdnb3SLQY-DntcC5Wh8EV9aifNoIMCnvoDMYjYbI5-4UetPnOy3QTKEMx3VCw5_-21aa2SK_oa2ueYsPtZ6_31ce6yhugAP1r168HfVYxFwsmPwYDMeXo6lxX6MXhYjuTquMKW_0VYPhm1jRrW9M0eZavTxt5mxnIoulevXSssm1ksJQ3ScyKe9EqSWZows9_PrnKWqii_tP8Cg00bpkxpaArIh04ZLAGLvOGa-0wLng3jyjhP8_PvX0Up_jsz2jwxejJeuVixtpe5UCgxQH-YSpjwX-Dpg209zy4Gk_vjYdchEt_I6Zds_xCUdDyXfqmHkzgIGlm4HTlgNwPymAhul1mkw4HFXic5Nxl8xjz-5ctD8rir3Cc8h7CyRuB0OQCiWAUEBn6WzwfEF_qcivO0vn0Q4Tk-DWzyvNZXJnCTbuopD-t4WYDDOL6gx0t3zv40V-g4uIq626y9i4iVUeUQAMY9bQqULL9cadkNvKeCWN6KAB6HIi07FxB8q9IpQT2XN1RzK9QOrhESNbUu3INrOQa7pKH-PzN5SYVI8Orhzi-cOXreG4QI1OC4qJ9cJ6kjdQc1Ciuy2-Ha2DRgwKetIkBwoWtDWMiGQziwHiwGlS2D-1RuSsn3cb3a9DPbK390ajY1Gry_JKGgi3rgLPiJ66aOdtDOKNQIywEU49vqYLAFhT1i8e8-KIpVFS-c595=w1281-h854-s-no?authuser=0';
const img6 = 'https://lh3.googleusercontent.com/pw/AIL4fc-RIKYmREinZ0GH7Zm8h7m4WtE4I4-ZFV9q0Nm5v6IyBE6a_AXb9k2IV1gf7q84lE0j954z0b4TakXWMliUP0HBDAHJ1rsJfQP2TuZL5Mc0zxP07oWt8-fSrPNExfnCTnF0X1Or2Naqf7oeZ77u-_62oXOKBsMsaIUKnZYUTICmcMD9iwcDGzHE6VvL350wF4kJWENtqx6aP7VToDy9C5BNktKRDRK2VV_z6nKaD0STEbu6-YJOTKP42nEr-tnpWOrPYqB3hGsNKubDdYOWv4SISRgmm757OCJktx91mDWGbz5rwqroxgqUBOPlK-EWdgTDp3JRzJGRBzrcPOTCIBqnHn-iRVTSK7xUxSqjo182h76nFVg1cd0QO-oS4WLsjckAsEFVpN0pAmbPrGTjnDbKFY5N1-M_L6m2ev4IK4o36w4YqL_8g5FaPIT6fbxoAWx7V5pWmYE2qz4XGsnFiMfhD816xcXLiN-Ws7oKsTi1UhePOLX-H4eNS1GzdtUutQsMZCT2VXICMafxeSboCbvGeIWvOSgQQLTfJLqqSakaq2OMJXtE0AF_wl3Wf_pwKFevr-uf44e4pNzaOBVXb_e2j9P6dFh2sdz1jGMv2Snb4XnVyYdACfcUA90-Vy-j-1WhA3d0xzfbYBAoSl1Hov7R9P2LROzGV5C59WA1421F4ZJ3D0pF1B8IYsTXZ-vaDJgFMFM2swT9QeIkD6F_MWUSf1Xe5aQVKSKtfvRl40-f8aOfG2IWIpeu-npXYLtWbOtNk2c_rBrciHnBE21i4X5D6xuYbuGdR-Eq1G2xmWicbA5xqWSnbDR23Z_gGLCnDDwEZ8yoAPae46SWFjnwBC7jI4X49SrvkZwG_Kc1po5_Zp_KjwqUPlvi4sLCpAurzDqTLUB5dULYMy4BKg9xRh5S=w1280-h854-s-no?authuser=0';
const img7 = 'https://lh3.googleusercontent.com/pw/AIL4fc-BcGjZx4nlJy8OC4Jd6vAr4yzuDDsi8oroCK1jilyJUdEoquYXqsqb7H4UgnJ5zQsdEUuxI9aTnwJENss6t7ub8rIBzcF1feH-V9-UotGni7o_3B0fQTnHhiOQtPAPzYlCRL8_uY4R1XEzQEWcMBMXrHzU7HgyRdWzjTLjV29HeLetdLDBCwKIO7FkPMmoCeQN5919LPaOftpeoFltmydUoAvXxrdBGYWEFh6PcJhKCI6kaJIGXU3jKhuMEuPu6W114bzSwazrpzZ-z7L4CvCZQKfi1MoR-Z8qMtRYjTdQIOES3xzE6OJn1WVmw81bBjJ28eKt7sYUjm3w1PtmP7k2l-qFK5XiOLJibGKO_kgJsdveEpwQiqFa2RPSv_xk9cMz3J8kL8uWBnO-9skDUvofbBMjvy_cVEMIrlKNCCQ3VTGYvwSiip8LDrfwPg57mDDHM4DsLYiO3vf-Fph29EzDDK62p6w7gX0tEPbO-hUFhs5NyzFQTjxW72BRi3GL9YTZFGBqZbeZzBIBctwnk6X6Z_rBp4intQz6uafUhXbu50pFxS1NMwRDPiTmS7OCtksQ55BXRkkUtOqxcjsX6fsq1JhMTE7jT0ql0DkjzXtx6ZdswG_8kh1qYCaIgRUeHUH-EMblTRrAih-KHhIJv_n0NRQEHYhHwhmutibhLiC9_SnqWCL3y7AcCEDwKyHLd4fMHYTW_Vgnd9Vq6qliCsqcMqjXXmjZwL3q3xDvpZv4CVRe5Bv0svdT18oZL9I1BiB6sbGDSgubodwnXo2GUaNn06im1G-jUwazBEcLMaa1IOLgZ-0KEUpCLTcDbhv4upg7Be5vh_8LDcoY4K_cwR5B0Ru4shai8AmQzlbLjzdMhcrgv86vsNK161PhEfshks6tj499ssJeMUVukDNYkS0_=w626-h385-s-no?authuser=0';
const img8 = 'https://lh3.googleusercontent.com/pw/AIL4fc_RxcbeiLqLqFXFFtgy89DWBm-GMTEvZbTb0kRhjdIjafE7S1gewZov3IMaQz1c2hR6vueHbhEUFNxQq9OtaTTLZNiUlMcrIXdMnXtDNxBASZ-8wCLoGC3y8eGfrX7cJn1Z9vvnb_RkmaS1sgTyt6aqQeNBvhKQTMTctaApAkZynBKRc_SPN3g5dIruN6R1Ccb83CifwguDgisTq6HR2UoLtJdWKhWCP4wa2b-n7tiNJ2LjLGO0cdRA5wcZRuipgY-5BLqmRO47wD2_2a7daWmo2hhSosLFDDwrT46QBuPE4a5bNdc9d1wgTzRZIHOC5ZrReE-i6Y2tSSCQLEj6E-6Qcm4Ld4Nn-TFgksxSHi5HleOclpxQXUN6paEAWyA06WoLRGNz3E1GSkp26Ijm3ZiEtpxYUyEdgLGBOKpCZiihIO2zvZ7ZTRqvrN3XZlon56d2GTeXdC2apxGkh75YLlGmB3IjgyNEZIIDrDvxp9YFaOMs65u6SAvMW34nAw1IwmEvlNs67zN7HHRBYhkHyKdyUoz-4HXkD4hwFX4n-p2S4zxHP-rUhFMEcelOKUpJa-FOtFJ6m_MTyQja31fEF1kOAErJUqZmVK4XEisr3F8xAxTYtg-nyFpzy8S2SPACjqZVlP3jaTUn6Y-2MuWiqqZUQi-xE9kfQwprrEPXNsYjdXb94gv-jw1Qdpco7qbVJ_U4nohCI5NGGKLgDb-eXe5EihTgLhKREgQYqWSg7tHa-ITe6XDJJNbkjiTC2c3Dwux_GZCDYJN5ddQoQp630_yq5MvUXY2rBtG5OjFv1a0zOzPX3AyY9a6EcjzZVLPUEEAf3mr4E63hQauK7jZXF6bhat7I1bLakk2MKxE5xoNjtOo3dNdYQmaZBnP_X_N9j8J3mfgIAIrKTGA7G_4JU28P=w1287-h854-s-no?authuser=0';
    return(
  
<div className="top-courses">
  <h4 className="subject">Subjects</h4>
  <h2 className="topcourse-title">Explore Top Subjects</h2>
    <div className="flex-container">
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img1} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">AWS Certification</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img2} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Data Science</h4>
              <span>100 Courses</span>
          </a>
      </div> 
         
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img3} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Machine Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img4} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Ethical Hacking</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img5} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Digital Marketing</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img6} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium"> Graphic Design </h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img7} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Deep Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="flex-box">
        <div className="cat-item ">
          <img className="image" src={img8} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Cyber Security</h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      </div>
      <button className="btn btn-primary">Discover More</button>
</div>
      
    );
}
export default Coursedisplay;