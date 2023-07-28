import React from "react";
import Top from './Top'
import './InstructorDashboard.css';
import { FaGraduationCap} from 'react-icons/fa';
import { FaBookOpen} from 'react-icons/fa';
import { FaUserGraduate} from 'react-icons/fa';
import { MdAssignment} from 'react-icons/md';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiSearchAlt} from 'react-icons/bi';
function Landing(){
    return(
        
        <div class="main-content" id="main-content">
      <header class="flex">
         <h2>
            <i class="uil uil-bars" id="menu-icon"></i>
           <AiOutlineMenu/> Dashboard
         </h2>

         <div className="searchBar flexx">
        
          <input type='text' placeholder='Search Courses '/>
          
               
            </div>

         <div class="admin-box flex" >
            <img src="" width="30px" height="30px" alt="Admin image"/>
            <div>
               <h4>Abinath</h4>
               <small>Admin</small>
            </div>
         </div>
      </header>

      <main>
         <div class="cards">
            <div class="single-card">
               <div>
                  <span>Courses</span>
                  <h2>30</h2>
               </div>
               <i><FaBookOpen/></i>
            </div>
            <div class="single-card">
               <div>
                  <span>Enrolled Students</span>
                  <h2>300</h2>
               </div>
               <i ><FaGraduationCap/></i>
            </div>
            <div class="single-card">
               <div>
                  <span>Assignments</span>
                  <h2>56</h2>
               </div>
               <i><MdAssignment/></i>
            </div>
            <div class="single-card">
               <div>
                  <span>Course Completed</span>
                  <h2>18</h2>
               </div>
               <i><FaUserGraduate/></i>
            </div>
         </div>


         <div class="wrapper flex">
            <div class="projects">
               <div class="card-header flex">
                  <h3>Recents Assignments</h3>
                  <buttonn>See all <i class="uil uil-angle-right"></i></buttonn>
               </div>

               <table>
                  <thead>
                     
                  </thead>

                  <tbody>
                     <tr>
                        <td>AI-Begininer</td>

                        <td class="status-box">
                           <span class="status review"></span>review
                        </td>
                     </tr>
                     <tr>
                        <td>Phyton</td>
                        
                        <td class="status-box">
                           <span class="status progress"></span>progress
                        </td>
                     </tr>
                     <tr>
                        <td>Java</td>
                        
                        <td class="status-box">
                           <span class="status pending"></span>pending
                        </td>
                     </tr>
                     <tr>
                      <td>C++</td>
                       
                        <td class="status-box">
                           <span class="status review"></span>review
                        </td>
                     </tr>
                     <tr>
                        <td>C-basis</td>
                       
                        <td class="status-box">
                           <span class="status progress"></span>progress
                        </td>
                     </tr>
                     <tr>
                        <td>Reactjs</td>
                     
                        <td class="status-box">
                           <span class="status pending"></span>pending
                        </td>
                     </tr>
                     <tr>
                        <td>Angularjs</td>
                        
                        <td class="status-box">
                           <span class="status review"></span>review
                        </td>
                     </tr>
                     <tr>
                        <td>Springboot</td>
                        
                        <td class="status-box">
                           <span class="status progress"></span>progress
                        </td>
                     </tr>
                     <tr>
                        <td>PHP</td>
                        
                        <td class="status-box">
                           <span class="status pending"></span>pending
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <div class="customers">
               <div class="card-header flex">
                  <h3>New Students</h3>
                  <buttonn>See all <i class="uil uil-angle-right"></i></buttonn>
               </div>

               <table>
                  
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>John Doe</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Dalton Hodges</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Shaja Khan</h5>
                           <small>Joseph Morris</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Hector McCarthy</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Louie Tapia</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Watson Freeman</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
                  <tr class="flex">
                     <td class="flex">
                        <img src="images/user.jpeg" width="30px" height="30px" alt=""/>
                        <div>
                           <h5>Andi Carey</h5>
                           <small>STUDENT</small>
                        </div>
                     </td>

                     <td>
                        <i class="uil uil-user-circle"></i>
                        <i class="uil uil-calender"></i>
                        <i class="uil uil-phone-alt"></i>
                     </td>
                  </tr>
               </table>
            </div>
         </div>
      </main>
   </div>

       
   
    );
}
export default Landing;