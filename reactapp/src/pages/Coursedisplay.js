import React from "react";
import "./landing.css"


function Coursedisplay(){
  
const img1 = 'https://lh3.googleusercontent.com/pw/AIL4fc9V4uF9diBz64Hy8CYBf_rQ-yPHAWw2vshFtWjYWA0T7TBTlakdaQD4VEBiIfmN08oxLXWk8cQGFRwdAtayGEWiYXUEjl2lOxpBGfjbM_HUDTAVbNqASyPu7Zxz8yu5DXL_GVwiyfnzrSU5O2TXkNhf7_vebpxBzZC3gSHqolwcHH3PaVCxPch6CjOvmMp24niPlsXq1tlZhMOR7ICe1KPNke148bvTCAzNX08kugeqRGXDRiLOCMikurvQm9Tw-tETCz4DsqUxC7JVhwZD_fw6nEu4DfEtqKn1gGbU3SWoRkYdeGGzw-PylCmF4NPPjtvZBMWXl_8MviId-BL9IdsfCAQEzuaifFqrdHDrxGqqtNOrGMo1RQXS2wjAepFuGZNPZONcJRo1nxkjqqOqCvuoJ3WOemPWQMdVMPe1bY_OGHjA7a2y6TQae9k67r5LEJV30oV4kt-V7L7lQvPEccyo-jE4urXdhakoReHfiFOTdX8_lIIhkBXlFSMmDB1JN5X0qi6lQ8JbWuDaHLWpAYgiDPJmdMN5610SumWYPgjjv4FrK4EqavmGprrELDZ3P7KjM75SG8D4jjL5pb_k6ZyM9N9SvJl57UB3vm6Yk4bZ9rSgL9djywRWdPLQZ4n4aYDMTFaCwzeOQ7U_kwsdF13FSbd6AmH6E8VzGFpXF1NtWEh5pNz40LQTY-MMSIDPhuCIyObqcJIsR4Cyfdo8g1oMb4VPBZcv-E7862SkRK_UPW41DZN4xuQF_6mVvrbgrQkuvmwxDB0WK7clNd7wYRzykHLOYz4aIACQGExpbNyGuUEYMxtJc6aTxCFZ1LErr3U_U2y3gXBL9srPcrGA4RmHoD-L_uDq-5y_vo0PYBZJZnvvBu9ZyTFsRoYKxReMzzTAsGNsLOMDGj8RY_wfUB9d=w1278-h854-s-no?authuser=0';
const img2 = 'https://lh3.googleusercontent.com/pw/AIL4fc-ydtwWkodzaszb1Xmh6xzI32CkNSlEGBUn1tZdeIfNQQLfjFXP0_wuaFhlrhHx3QeraLlhm--eWaqcSkZK-1VfNXdV2rjRMv9Ksh6X3yINH-dVYkMi19h66eMjkEdW5bRfwfiVz_3X0frqH2VLzlGaI23KnTkdYhmB7hEGJrfw0mDSZLzPV3SyLKAeEIxr5OIiPOg10a-b6ckTQj_AZHmUekOtcFb22I8yIDO_FYQJKVcapycw2GFpMbGrVL4IJGyYt4A67kVl5dd9HssT2M5MSgfzwjnkXW6fcj1CPUyVlyD2ZgoF43pOeruur8_uzGgPdNToKzm6Pdrd32ZEf1UfkGZ-46xTyyZQId8gDhvabSsf2wJ7vH_pivxbqz9tZ17v_BXopJw94mXJPXzBkGuDy65Y73Al6TpeivzyHmkiVIGE-pPfJSHtBvMos6z1yfJi5qTC_PsZq7urT0oDGT7IS6FarwBjd5rLXIRElFhA7_04-Ajtlvo-i16eR7n0fYOuCJBbp1XIjTZoV0XKa_3n3QSuAkOPA9LQBja6gQnUnF4-Keb998GQ1GF4tR_1_a3rk7AV0DZ--41VWDNWhsX3dOlgrgqDphJR-jJb3cZTmmmINCfchALtDOy8m45nShuk30Ej-C1iX61RqcgGD4nIVc_ihpnIPU82s_2vXP9G6v_Yd34IbliQYgqMHQjyBlgmNSa7GUpZoCFYZ1VWpjEqpaTyXkxmDXTBfydfkIunfYS7CtbI1Rn7RQpNtXqWvdqnLNO7QeejisGZ8iIDKe6DQvwYqMJ17flli6YMPBE7PR_lhBJaB-1Lsb1ig5Ml8KWGUNFw0zk2yC9JwyrSmTLySiHwRLt56z61uWjZ1x_S9tkfRkoOFaPus-x_vq0xQmCGXQWaY0op1QPiuM7E3hGG=w1281-h854-s-no?authuser=0';
const img3 = 'https://tse3.mm.bing.net/th?id=OIP._yiQ9sHpbbkIivoaaGz7dQHaEo&pid=Api&P=0&h=180';
const img4 = 'https://lh3.googleusercontent.com/pw/AIL4fc9_bMwajE7FgCKkdJ8He1y-tLNhCj4-TzBuO2x7v4upfracM56OpOX1g9_z0JAOjlgCa2bagWqbKnZtWI0bYWW1Aml50nhI-3vba7juGzsmMjxP_TJD2c5TTbD-FWy3fQSeF1Z8pqb8oXSX3CHcxOgjGD2mqebHktq0kIyrGkIyRlEXHxstsLtyunzDDVcXR8fjOdhCCI67AxT53daIXcFv1By1YFLtJIg9X_KDGIgknHA3KCe7XP809d1SnLRkcdNkgypaXbfratM_WZy9uHX8vVWB3yqPosLAmDVohKO9RwWgKH_uecYGiTsv9BQgl8ZlXj6bS4W9NC5YCAANLXr41W0nh23eXqie4scgV9B7iiJ_hdsCg07QstGzTeJagklw7q8y2Jrc05sfcimDVbNNtLB1E7Z4xNXPgGInW5SZLzH1XP_BrScyL6aRCvLP67T9QczcDQHif3xYv9vhQfMDTuQM4a6lbJv2U6vSW-uombKFJiyi5VJV1g4OsuRwo1qiNwgI0PkAPF5o2sfwjgj7sOiD03CcStCZweJVjIOjE9hkf2Q3q75VxZM830TXV4vB9ReSCy9CPV1j8v9nXLqiOYEfrlJFM2FhG7-RNYiblmBnPGTfu_UNWfVNadB85WPmlmOKfA5NAU7MloVpa4isv4zsU4Mt-C3AmiQejc3FGK1bIP86r3iKoiU0w2DvUWp0lRN3n3GG9ABxCU3aSC4ckMjlyLhf-QQkecfPxlnKiX6VoYUDv71K3s1oHOMUySGkRRMcFcoDzdrfUVmkZp5Y9YTzX5fEsjtqmLHNWw0prNr_rGXfdtvvq1lBJA-g4Jt6HvjkOanAZiGnjEp4xTBXf-0fyR1GeL5mX_xFf45qLIQCOogqmfKKKBrlNwI6eVH_CqsS8kJMXQ_k5xdeaR8D=w1280-h854-s-no?authuser=0';
const img5 = 'https://lh3.googleusercontent.com/pw/AIL4fc8KJJQOaKflHLOOkp4771LJo_Zs_udSCyYHtHtnZK0FoNzIIPnZj8iA86L9XtimDKKYnTP0fbbb5L2sjru0Lh3SxB4RNc7VmyQGWUZUiD4l0JKWIAWHckC-N6M5EblT6Zzv0DHGTgMPzB71tXLT-8fEj0l0YLCnR9MINvutaZAV79n2xXFM5qKB_BrVSsAwf2_gedOqNcSYvaEEXlD-i_1w__q0OZlHqnyAzCSupAvaOiDaDkBSH4qVrEa7BazlJqlj9vIKICeCYH4o2wgn2ec4QLjsoc2FspN0I4RlZCbU-2n161a4G7goHqR-URy2YWYegx56SngN7NmXWjH3_3PrA7CD02z07TelUQdF_Kmn_yW8bOvA-DtTif3BVwYPX1y8nW_-kPjC0V0qqNh5GWMj6VWFA0TpZw9YTBZl8vKxgH7WdGY6reNNk1GWJcj_A8tRpUm8KampsGDcQVMO-KQN12eCGbVGXHLN8XNp-uF3rfM7SXnZH-kz7-PcLbWvHsznQT-of1fc2tW9H7ACxfgpLOyROIYwp2LNY1UP_Dwph7d9PC8kK9ge8WYc5Ybl2PE0nD6RG9XHhTy5wl_xcfiWvVQvi-K3qg2P-6co09sggdT0s0QoiukSlJ6e_J3pcQPxiJDpeqQr0LGVPjdTAOtkgtFY4bOiBbmdNRC9wdFl7bQcqnHDLUvoG4-na7Cfr9Pa49QNjWEGKWwomRX78n-L2XQh1IIZVEfr63DF9iJnlRqIEvTu4Iu_dl6JTj3W5omRgKjHtvrLj39C21MWTbXV-322Po5IafDk6h8t0qTsJPB-Ad43JDenDjl99bay7aH8dEwJJAMWEKlJ6MT93OIYWtCbLc6vwo3fiZESJCKVLna1SqkxdpH__jFMSnLHb94Uv6Ninqzi0QZXezJyw8CV=w1281-h854-s-no?authuser=0';
const img6 = 'https://lh3.googleusercontent.com/pw/AIL4fc9E0vfgtGxY-pkDGH_aQM73Pt4NIyTInBAqYxP0AewlcBysSD7VYGvymC4j4U-Kef9ufyvUFwJXlSV6xeu1qJa_DSmY8LB5p9WIZ-m5eVM10_QlAOjqcybju4vEQdaB6OyxU1fzeLGy8EG4yFU1avP_mRif1Qh8F6xX8Cxyuj1qZlg5xOiiilry8UWCLO5wuMussxsva3HXBBaUnN4porJp_GBpzy9aiggIahMCHJmGC5MAcqNOPWUho55AEGPfzrUToGtXhoLrHcIZcTYIxa3hsCR2PyI1L7K8_bfBirUzNJ7tl9rs5H23lliMDODAL-PNzL6mHotSsLAO4DXfA0o2g9FuLgWzidJLd3SRdqMMAWXG4U200M7sf12VDb3F5V1Oj2ciLQji_XIOYtxr6OeiHOTwZns6Hc23ZsPueWrJT7ymQ307Qe5oBaSvDrGAXynl6v6psshTBpJih0rUb2tYsXuDFxoVQ_zuvO7eK9Zn1lYKpfC6g3dvk7xKRXqIADJjn2ahFAuFIBRRqP1fe5grIjv-ELvmrvI_xRLwrL6SVbh8QG6dfwDN3ca2pK50rb0bDqyQw_VMdFtqd-jX4tobViLERWsf7ewv5lZrB86bLw2b1b5BCuL6Lee6-Wvg5TwA6N0N6LQPd6KqrnOctD-YWDRyYbc1w_3jYByiTwyFZ2uFGHyG3KCufI-NAPbl8aFNIzc3DIH0OWZG3pB-fRvfrjbw-R7keE7QdJHuC6Kxbh9gOuVZ2j8ZpDhRPw2kgiy2Bv1ue-IsEMjRb7g8nqpdRex05FPnc3KA90_uHNyLsQ5M9ZfC0omTsOQSz2g_uqp_0udhP1zQvomBH3wVWuaWjITtovWhauI10WfldISthV5gPswlBk519wWAzkVuXfVmr4V9C2Eg1FccnZXfn3tC=w1280-h854-s-no?authuser=0';
const img7 = 'https://lh3.googleusercontent.com/pw/AIL4fc-D1HQmpmGPvDygXFFVrpAu7zyR2n66OeTSsavoVD1t3NxAEaTJ_uaQ6xrSVhfG58BdTm7WLl-C2ZpCUPSTQQESbvvkTxJtLtC1j5iV5BWtPGf3t5_mRR_GV7tuotofeOLpdqtBnPoovGoP0zgn6iw=w626-h385-s-no?authuser=0';
const img8 = 'https://lh3.googleusercontent.com/pw/AIL4fc-uewtLESMjdJFIhcvLe-NSXgq9J2wO4Jxt2Q-BKCxfwkQYfTWDHOBI_r8EnKnaltIJoKkwd8hEbv0cy2KmhdDfN2owvEpetQEPAMS0z0MigUsLDz43gWQqFfYCGiTQv-2XWfW2Cg7Y9P89qxC2it8=w1287-h854-s-no?authuser=0';
    return(
  
<div className="top-courses">
  <h4 className="subject">Subjects</h4>
  <h2 className="topcourse-title">Explore Top Subjects</h2>
    <div className="flex-container">
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img1} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">AWS Certification</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img2} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Data Science</h4>
              <span>100 Courses</span>
          </a>
      </div> 
         
      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img3} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Machine Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img4} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Ethical Hacking</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img5} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Digital Marketing</h4>
              <span>100 Courses</span>
          </a>
      </div>

      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img6} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium"> Graphic Design </h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="fabcbox123">
        <div className="cat-item ">
          <img className="image" src={img7} alt=""/>
          <a className="cat-overlay" href="">
              <h4 className="text-white font-weight-medium">Deep Learning</h4>
              <span>100 Courses</span>
          </a>
      </div>
      </div>
      <div className="fabcbox123">
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