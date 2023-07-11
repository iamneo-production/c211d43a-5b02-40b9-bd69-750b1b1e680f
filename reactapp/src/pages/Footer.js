import React from "react";



function Footer(){
  const logo='https://lh3.googleusercontent.com/pw/AIL4fc--v2jpMca1wBi25k4ObbRMlYwZnf5WvBudDTMLrky-2mAFjaL_xnHwv8s0Tr3I5cqJPpWPyXu--XkRJsoPMmWnDsadUFFEB6T7Z5vVbcZQs5AFt93y4PHMzI7IRNLNEyVl2yT_SymjgAQSSQ2jmB59GOorffOHu-16hgWLwz1jc86Zd9vlHWo3q6VKEMZkrmPxpY_rVXjD3xOH3ZVExmCD_Ox87wl9zic7KUZ6gaDDFiUgUvkkfztjHZ9JQt2uRe7x4Ykcc5nw_8A-PtXRT2YeuaAlmgx0lzbBvNHKmtGDvyWVu-4HJKcDTx0KLkCaWhslvykBoDe2Cg_OqCoIVnTjdnBgQB27BD7hVqJl3zBfcakKFM9J1s9YTrLnchGZppYkyexkPuZIsJnTXIY6wFYctvTnyjAeTuTeuUmpjxJ3WgaUFrlA98yt-_0KslRqyMcyzNdSzjZUT5LAUfK75Rimbf49ihZu9mm8z_2ZSmdLEMioYXXGbTNxRNYtx3Nc_v6MM9swzob2N6Fw3_cCmvF16WDMVmKjf_LjyMw-sr57B--SSaOdqdY5-izktt3xTdH6nt210cr0JkcxEKcXKx-VLYEmjbHS6K_bATaRoYSeZ-2m4qGK_WvQ45o8EIR_8LHOtckhKlUJ6X_KBjEJnQVPVz116oYY7B1FhoQVdqAv1VpAJpEOrFCWRywuZ2Q7sO0KdBhJ8t3LTILTgrR6qeD4H6EkbzyRRM3Q4zYgXI1ipR_7d5jqPuLuiWooxfHGjDjR7Xa6WY_r9jFLv5r4f3gi-4pI4sqloLcdFI7mPEPu-5cNNE93DzELkKcmq8cPHvdClLQL8-uHoKq947nsLLFEOc4rs3CB481FBdJuv6YQF3qw4f-7jkTAYcbYjXHxdiw5KAbrlW6DD2DL3xLlNf-H=w356-h355-s-no?authuser=0';
       return(
       <div class="footer">

        <div class="footer-top">
          <div class="container">
    
            <div class="footer-brand">
    
              <a href="#" class="logo">
                <img src={logo} alt=""/>
              </a>
    
              <p class="footer-text">
                Investing in Education for the Future.<br/>Learning from anywhere, anytime!
              </p>
    
              <ul class="social-list">
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-google"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
    
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
            <div class="footer-link-box">
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Services</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Design</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Development</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Marketing</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Content Writing</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Company</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">About</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Terms</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Privacy Policy</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Careers</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Job Info</p>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Select</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Services</a>
                </li>
    
                <li>
                  <a href="#" class="footer-link">Payment</a>
                </li>
    
              </ul>
    
              <ul class="footer-list">
    
                <li>
                  <p class="footer-link-title">Contact</p>
                </li>
    
                <li class="contact-item">
                  <span>Call : </span>
    
                  <a href="tel:5463876387" class="contact-link">04424 256464</a>
                </li>
    
                <li class="contact-item">
                  <span>Email : </span>
    
                  <a href="mailto:example@gmail.com" class="contact-link">edu@gmail.com</a>
                </li>
    
                <li class="contact-item">
                  <span>Address : </span>
    
                  <a href="#" class="contact-link">
                    <address>Chennai,India</address>
                  </a>
                </li>
    
              </ul>
    
            </div>
    
          </div>
        </div>
    
        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2023 <a href="">edusmart</a>. All right reserved
            </p>
          </div>
        </div>
    
      </div>
    
    );
}

export default Footer;