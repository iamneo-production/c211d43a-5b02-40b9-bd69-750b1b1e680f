import React from "react";

function Testimonial(){
  const img1 ='https://lh3.googleusercontent.com/pw/AIL4fc8UEsgz2y--17hHfGcWy-0abVNDLAkB7tj1XiEf2tmGv48eS6il8IhgikXxgI1SN74NenoWOLow6xkPyKTyubnH8loWK4izzeKFIORORRA4MfwnQxpNAGQgmVNT5RbTqQT5bmmErYmUBV8PIyYd04RI0U0ZPiXTVzAMKG_E9zEYA62NNF4wUARsXmiIfG6iRDh1XjFJqDu0QNhQTUHrt7wRm6C4xA7DNGxV8uMiqQwa8-oxeNl9w828_Z_457JV0k-Hr97xpQj4wPmePbSFU0mUhVvN1-sQ1qPVpy24ol9eKgpGK5isVgUs-BYlpRQ54mJgkoqN14h7yHGwlHwGtLbT-DgTLDQcXG3rUGZS_PDhpsRV_M86fp74eQ6s2QQ-2nauBjWCc2pD4lfziCw-n6tvdmDsdrahohRFDt7E7ra25BfYRjkEGEAp0QY_sejV0i35hj9k7kLaB5c3hXd60lpdujLFy6Q3ogeXLTOajzTICtjxYhdADVm8sf1nGMKneCnMgaq5xEaDDw561AuPV4X2hAbk12PCmLso-mKs7XtKh0SXtkcFt5JjQPe3vVu-5Z_5ZE9ApLPkHkTZMUYGc2PmFHIaIkG3SSaHlKpszXeyTZSepPvEa3D1wILS6VZKUGcVDyZpC3UpILqZJRobt0NaehtMLQVdcIR6w-pM4rPKyUeRy7sAFmpPrY9-4InNaadkfTGlOpURoGAPxVyPXvzxfI4NAFsuuQpcwHASG9nX5lcYhDBaxHB6USVau4E4Kk9VsXtV3oMfpI1qXx1ZBCzmCqn13s6XeCdmL8uaH3XUUJueo39tRrh4jrELceR_zRonunWWXFbqo39nICQLH5fCO3If48TeVaa4TeSN4QKR4wiXr01bMC7Ya4QWLpNjBr2jUcLwP1qzzwjEYPFRGyen=w569-h854-s-no?authuser=0';

const img2 ='https://lh3.googleusercontent.com/pw/AIL4fc8b7DmXx2md_EUXHf2ReoVP-yevFvE7-7X6ElIoCVsU5TXboTwMDEGwGhM6p9LC1_gF9M-TglTV8kfkftHjV8hUPGm4k8MRVWcQHGB7S3NVebW-HgCQuKATQfr8eSZ0es9xvYgJIF_WEHmCscVuryBEcy1wx26JJ4qsQglGXM_HuGvKP2N39KUegPlEGeLoIAw7UXfZFU1YBOafsMuXL2H8xaeg89TjvP1v9OCzZcHPwe2yNCo_1r2pfV7tuT0U5mZJMPtHesdRdE04-ClqM5VzP3ST-yqYpSw7BtHJ-8YWn2EOLkNTXEkz1er8YpKiPaLyCrBiE9ZOTucM9Ulm0klY1DbKBQ_NJDS-v7CKz6xytC6hmIJwF9vb4hd1giuKBKK6f7f8HLTtFC-IhTgz7oGqqVwn2CtIhqUwSjoAilrjecvKv06ObR_3N0KOQaDy5RLEMm-AbTShX0lbR1SjBjE20f6vr8CqCqFME6ZzyKwCugU6SLY5uUEnDhvpGSDoBaG-87XbeYQaO_9SYhDR7uRflQO0tnoAdnhs7ssKzzA9Q7vOHLALnrGDtpu_NI_pTwcEau-DHjcmQkK0xwB1SEw7LDEVWhfwTqyJG_x0Y0-ougT6cHBX26PBR9oRiHbbX14WpKNpXgbCzpMTPfsQ25JiQ7f5kAqjxlkOJ4aFKgD69klsj5LSFrMiqc4e0F_jDQV8-OTiYFZf60kp0KX8FOVFEQnRvrkfLlXsMXg10o5zTEtGQawzyB9fn67l3vmJPUYDL3MUiQJ-WAfwzr1V8sgPe8BQnBtMoipZUqa5Y9HbQ_hCnMHEVtlQE3C4pPAjIErgGmMW7GLbMHkKmisplgF18ybArDfeN-CipWIYPAwFC6efPf-wsVoxcijl5GwlgWR8soOVEnkFDGcSTo4g_VwW=w587-h854-s-no?authuser=0';
const img3 ='https://lh3.googleusercontent.com/pw/AIL4fc8cwUBMGnQH4o8ZUAzTzrzmp6a3YKFiSB5gJsEWJYhhh7GJAkJlSgdwVvRkmQAXIRl3KMC2I5YFqjBZ_T51Xank-HXtZsI9tbwQkLRZhl6mlDuSfL4CueVXS3gKuB0Vaj88gF2jhtckhdDiDpddYaqciGJK3642BbgIquOPmSGnvBdVjr67QDtn1_Yw7bUXJhWjQoIUzvKvzDzf5kkLjUCmJcI8W1GJsufSruLJoYd3QcajPEyR2_oYyUmu171tnYJZO9MhjjGoKB9OrcCcpHxrpdb7JtlbJap4VchwuzND1ylP01qj7YBT42zTt9sA0qqhjJjRL3SgAus9UotP3d40pNrO-_oV-f8HUJrH-wPPHtOJ-vbZAM3kw44wE3QE1LoxoMqGvt6k7qR-qb9rQI6v3NXvJqJaBHfpgo22dhbznrWpm4xSNFLefosiOIzjJq3haUP1W8w5rsMAegkTKD3e32qjo_bx4PM4h_xrXyVjZHj_03uWqJP_lwQTJLZaV4N_52cLgiKGuEOc6rBdR6m21sUScz-8NgWHkLm8oj63mWU5VDdrePIUwufDonWX34wcol4cCkBq3lDH5hUeUMHcGZmZ0ITC7k3wSdhofhVDqgtpmW_HKqhaKaPK9bWwgCdnhbVbCbkN953IMfd1GQ679BP2bT03cL-q2sdrwDFo_919nI3_n-0MVutblGXZY-Ec9POZpnJD8GeG9NeAFOeknwjjYuC7SXJiiSC5Y64FJPF2t2rKaGAtkTsgSplDPbxLLTn4PHDxuOMoAEJ6JfoAqisxVahTlm_W0uVUXFZG_algbO6ieChfLZYu431el2pKk7v6p4hvncFX0XayUsH-TcOuH3LJn2B-hN-OEnPpagNEGcD0ElHXl1plf3UwAoh5plLXsXVsQbLjcXzVEinp=w569-h854-s-no?authuser=0';
    return(
        <div class="testimonials">
      <h2 class="title">What our Students Say</h2>
      <div class="row">
        
        <div class="testimonial">
  <figure class="Student">
    <img src={img1} alt="profile-sample3" class="profile"/>
    <figcaption>
      <h2>Sam Austin</h2>
      <h4>UX Design</h4>
      <blockquote>After taking this course , am now an AWS Certified Cloud Practitioner!.</blockquote>
    </figcaption>
  </figure>
  <figure class="Student"><img src={img2} alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Christina Worell</h2>
    <h4>CEO</h4>
    <blockquote>One of the best courses on management and leadership I have come across so far.</blockquote>
  </figcaption>
</figure>
  <figure class="Student"><img src={img3} alt="profile-sample6" class="profile" />
    <figcaption>
      <h2>Catherine Tuffey</h2>
      <h4>DATA SCIENTIST</h4>
      <blockquote>I highly recommend this course for all the budding  AI and data scientists.</blockquote>
    </figcaption>
  </figure>
</div>
      
      <button class="btn btn-primary">  Get Started  </button>
      </div>
  </div>

    );
}
export default Testimonial;