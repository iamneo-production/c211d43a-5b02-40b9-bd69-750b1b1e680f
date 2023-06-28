import React, { Component, useState,useEffect } from 'react';
import '../src/SingleCourseEnroll.css'
import images1 from '../src/SinngleCourseImages/AccessToCourseMaterisal.jpg'
import images2 from '../src/SinngleCourseImages/CostEffective.webp'
import images3 from '../src/SinngleCourseImages/InteractionImage.jpg'
import images4 from '../src/SinngleCourseImages/Tackingporgress.jpeg'
import facebook from '../src/SinngleCourseImages/Facebook.png'
import instagram from '../src/SinngleCourseImages/instagram.jpg'
import linkedin from '../src/SinngleCourseImages/linkedin.jpeg'
import telegram from '../src/SinngleCourseImages/telegram.jpeg'
import twitter from '../src/SinngleCourseImages/twitter.png'
import youtube from '../src/SinngleCourseImages/youtube.png'
import Helmet from 'react-helmet'
export default function SingleCourseEnroll()
{
 //rating


const checkarr = [{headingName:'GETTING STARTED',headingArr:['welcome to the react course','what is react js','setting up the course dev environment'],condition:false,oldDropDownIcon:'bx bx-chevron-up'},
{headingName:'JAVA SCRIPT REFRESHER',headingArr:['Arrow function','Exports and Imports','spread and rest operator','react state and working with Events'],condition:false,oldDropDownIcon:'bx bx-chevron-up'},
{headingName:'DEBUGGING REACT APPS',headingArr:['uderstanding error message','Analyzing code flow warnings','use the react dev tools'],condition:false,oldDropDownIcon:'bx bx-chevron-up'}]


const [emailId,setEmailId] = useState('')
const [phoneNo,setPhoneNo] =  useState('')

const [checkemailId,setcheckEmailId] = useState(true)
const [checkphoneNo,setcheckPhoneNo] =  useState(true)
const handleEmailId = (e)=>
{
  setEmailId(e.target.value)
  if(e.target.value==0)
  {
    setcheckEmailId(true)
  }
}

const handlePhoneNo = (e) =>
{
  setPhoneNo(e.target.value)
  if(e.target.value==0)
  {
    setcheckPhoneNo(true)
  }

    
}



const [newLargeDescription,setLargeDescription] = useState(checkarr)

const CourseDetails=[{
id:1,
CourseName:'React Course',
rating:3,

oldCoursePrice:'1000',
newCourseprice:'400',
Requirement:['HTML','CSS','JAVASCRIPT','REACT'],

CourseLargerDescription:newLargeDescription,
CourseModules:4,
CourseHours:3,
CourseLanguage:'English'


}]





const featuresArr = [
{id:1,headingName:'Access to Course Materials',quotes: 'By following a course website, you gain access to a wealth of course materials, including lecture notes, slides, readings, assignments, and supplementary resources. This allows you to conveniently access and review the content whenever you need it, even after the course has ended.',imaage:images1},
{id:2,headingName:'Interaction and Collaboration',quotes:' Many course websites incorporate discussion forums, chat features, or other communication channels that facilitate interaction and collaboration among students. This creates a supportive learning community where you can engage with your peers, ask questions, share ideas, and learn from each others perspectives.',imaage:images2},
{id:3,headingName:'Cost-Effective Learning',quotes:'Course websites, especially those offering Massive Open Online Courses (MOOCs), are often more cost-effective compared to traditional educational institutions. They provide access to high-quality educational content at a fraction of the cost, making learning more affordable and accessible to a wider audience.',imaage:images3},
{id:4,headingName:'Tracking Progress and Assessments',quotes:" Many course websites offer features that allow you to track your progress, complete assessments, and receive feedback on your performance. This helps you monitor your learning journey, identify areas where you may need additional focus, and gauge your understanding of the course material.",imaage:images4}





]





















function handleEnroll()
{
  if(emailId.match('@gmail.com') || emailId.length===0)
  {
setcheckEmailId(true)
  }  
  else
  {
    setcheckEmailId(false)
  }
  const regex = /^[0-9]+$/;



  if(regex.test(phoneNo) && phoneNo.length===10 || phoneNo.length===0)
  {
    setcheckPhoneNo(true)
  
  }
  else{
    setcheckPhoneNo(false)
  }
}



function handleScrollReq()
{window.scrollTo({
  top:800,
  behavior:'smooth'
  })
}
function handleScrollkey()
{
  window.scrollTo({
    top:400,
    behavior:'smooth'
    })
}
function handleScrolllearn()
{
  window.scrollTo({
    top:1200,
    behavior:'smooth'
    })
}
function handleScrollCont()
{
  window.scrollTo({
  top:2000,
  behavior:'smooth'
  })
}
const [leftCardNo,setLeftCardNo] = useState(0)
const [centerCardNo,setCenterCardNo] = useState(1)
const [rightCardNo,setRightCardNo] = useState(2) 
function handlerighttButton()
{
  setLeftCardNo((prevIndex) =>
  prevIndex === 3 ? prevIndex-prevIndex: prevIndex + 1
  );
  
  setCenterCardNo((prevIndex) =>
  prevIndex === 3 ?prevIndex-prevIndex: prevIndex + 1
  );
  setRightCardNo((prevIndex) =>
  prevIndex === 3 ?prevIndex-prevIndex: prevIndex + 1
  );
}


function handleleftButton()
{
setLeftCardNo((prevIndex) =>
prevIndex === 0 ? 3 : prevIndex - 1
);

setCenterCardNo((prevIndex) =>
prevIndex === 0 ? 3 : prevIndex - 1
);
setRightCardNo((prevIndex) =>
prevIndex === 0 ? 3 : prevIndex - 1
);



}

const [isFixed, setIsFixed] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition =  document.documentElement.scrollTop;
    setIsFixed(scrollPosition >= 1500);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [])















  function handleDropDownList(param)
  {
    let duplicate = [...(newLargeDescription)]
   duplicate[param].condition===true?duplicate[param].condition=false:duplicate[param].condition=true
   duplicate[param].oldDropDownIcon.match('bx bx-chevron-up')?duplicate[param].oldDropDownIcon = ('bx bx-chevron-down'):duplicate[param].oldDropDownIcon = ('bx bx-chevron-up')
  

  setLargeDescription(duplicate)

  }


    return(
        <div className='SingleCourseEnrollmentTotal'>
   <div>
    <Helmet>
    <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />

    </Helmet>

  
   </div>
     {/*//*/}
    <div className='SingleCourse-TopPart'>
    {/*//*/}
   <div className='SingleCourseEnrollMent'>
    <div className='CourseDetails'>
    <div className='smallNavigator'><h4 className='navunderline'>Home</h4><h4><i className='bx bx-chevron-right'></i></h4>
     <h4 className='navunderline'>Courses</h4><h4><i className='bx bx-chevron-right'></i></h4>
     <h4>{CourseDetails[0].CourseName}</h4>
    
    
    </div>
   <br></br>
   <div className='TableuIntro'><h1 >{CourseDetails[0].CourseName}</h1></div>
   <div><h2>Accelerate your Career</h2></div>
     <br></br>
  <div><div><h3>Buy this Course @ ₹{CourseDetails[0].newCourseprice}</h3></div>
  <div className='CoursePrices'><h2 className='oldCoursePrice'>₹{CourseDetails[0].oldCoursePrice } </h2><h2>₹ {CourseDetails[0].newCourseprice} </h2 ><h3 className='PriceDiff'>you save ₹{CourseDetails[0].oldCoursePrice-CourseDetails[0].newCourseprice}</h3></div>
  </div>

  <div className='CourseHeadBottomTable'>
  <div><h4>{CourseDetails[0].CourseModules} Modules</h4><h5>with Certifications</h5></div>
  <div className='vl'></div>
  <div><h4>{CourseDetails[0].CourseHours} Hours</h4><h5>of Recorded Content</h5></div>
  <div className='vl'></div>
  <div><h4>{CourseDetails[0].rating} Ratings</h4><h5>by 160 Learners</h5></div>
   <div className='vl'></div>
  <div><h4> {CourseDetails[0].CourseLanguage}</h4><h5>language</h5></div>
  <div></div>

  </div>
    
    </div>
    
        {/* // */}
        
        <div>
<div className={isFixed?'cardfixed':'cardrelative'} >
    <div ><h2>Get this Course @ ₹{CourseDetails[0].newCourseprice}</h2> </div>
    <div><label>Name</label><br></br><input type='text'></input></div>
    <div><label>Email ID</label><br></br><i id="error-icon-one" className={checkemailId?'error-icon-one-hidden':'bx bx-error-circle'} ></i><input type='text' className={checkemailId?null:'emailInput'} value={emailId} onChange={(e)=>handleEmailId(e)}></input></div>
    <div><label>Phone Number</label><br></br><i id="error-icon-two" className={checkphoneNo?'error-icon-one-hidden':'bx bx-error-circle'} ></i><input type='text' className={checkphoneNo?null:'phoneInput'} value={phoneNo} onChange={(e)=>handlePhoneNo(e)}></input></div>
    <div><button onClick={handleEnroll}>Enroll Now</button></div>
    <div><h3><i className='bx bxs-group' ></i> 3008 enrolled in this course</h3></div>
</div>

</div>
        {/* // */}
       
        </div>
 {/*//*/}
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
<div className='second-navbar'>
<div onClick={handleScrollkey}> Key Features</div>
<div onClick={handleScrollReq}>Advantages</div>
<div onClick={handleScrolllearn}>learning path</div>
<div onClick={handleScrollCont}>contact us</div>
<div></div>
<div></div>
</div>

 {/*//*/}
<div className='CourseIncludes'>


  <div><h2>Key Features</h2></div>
<div className='keyFeatures'>
<div className='keyFeaturesChild'><div className='smallchild'> <i className='bx bx-medal'></i> Globally Recognised Certification</div><div className='smallchild'> <i className='bx bx-desktop' ></i> 100% online and Self-paced learning</div></div>
<br></br>
<div className='keyFeaturesChild'> <div className='smallchild'> <i className='bx bxs-time-five' ></i> Full lifetime access to all content</div><div className='smallchild'> <i className='bx bx-code-alt' ></i> Access to 4 Gamified Practise Platforms</div></div>
<br></br>
<div className='keyFeaturesChild'><div className='smallchild'> <i className='bx bx-money' ></i>7 Days refund Policy</div><div className='smallchild'> <i className='bx bxs-contact' ></i>  Support to clear all your doubts</div></div>
  </div>


</div>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
 {/*//*/}
 <div className='features'>
<button><i className='bx bxs-left-arrow' id='leftBuutonArrow' onClick={handleleftButton}></i></button>

<div className='leftCard'>

<div className=''>
  <img src={featuresArr[leftCardNo].imaage} height='300px' width='250px' />
  <div className="container">
    <h4><b>{featuresArr[leftCardNo].headingName}</b></h4>
 
  </div>
  </div>

</div>




 <div className="centerCard">
  <div className='centerCardFront'>
  <img src={featuresArr[centerCardNo].imaage} height='300px' width='250px' />
  <div className="container">
    <h4><b>{featuresArr[centerCardNo].headingName}</b></h4>
 
  </div>
  </div>
  <div className='centerCardBack'>
<q>{featuresArr[centerCardNo].quotes}</q>
  </div>
</div>


<div className='rightCard'>
<div className=''>
  <img src={featuresArr[rightCardNo].imaage} height='300px' width='250px' />
  <div className="container">
    <h4><b>{featuresArr[rightCardNo].headingName}</b></h4>
 
  </div>
  </div>

  
</div>



<button onClick={handlerighttButton} id='rightBuutonArrow'><i className='bx bxs-right-arrow'></i></button>
</div>
 {/*//*/}

 {/*//*/}
 

<br></br>
<br></br>
  {/*//*/}
 
  <div className='CourseDropDownList'>
  <h2>CONTENT YOU WILL LEARN</h2>
{CourseDetails[0].CourseLargerDescription.map( (ele,index) =>(<div key={index} className='eachdropbox' ><h3 onClick={()=>handleDropDownList(index)} className='CourseDropHead'  >

  <i className={ele.oldDropDownIcon}></i>{ele.headingName}</h3><div className={CourseDetails[0].CourseLargerDescription[index].condition?'DropDownTail-Visible':'DropDownTail-hidden'}>{ele.headingArr.map((cont,rollno) =><h4  key={rollno}><i className='bx bx-chevrons-right'></i>{cont}</h4>)}</div></div>))}
<br></br>
<br></br>
 





</div>



  
  {/*//*/}


  <div className='contactDetails'>
    <div className='TypesOfCourses'>
<div><div><h3>Zen Class</h3></div><div>Full Stack Development</div> <div>Automation & Testing</div><div>UI/UX</div><div>Devops</div><div>Data Engineering</div> <div>All programs</div></div>
<div><div><h3>Popular Courses</h3></div><div>Python with IIT Certification</div> <div>Java</div><div>Mobile Hacking</div><div>C Programming</div><div>AWS</div> <div>Angular</div></div>
<div><div><h3>Products and Platform</h3></div><div></div> <div>HackerKid</div><div>Placement Preparation</div><div>Codekata</div><div>Webkata</div> <div>IDE</div></div>
<div><div><h3>Self Placed Courses</h3></div><div>Premium Pass</div> <div>Courses Library</div><div>Free Library</div><div>Combos</div><div></div> <div></div></div>
</div>

<div className='Horizontaolline'>
  <hr></hr>
</div>


<div className='Contacts'>
<div className='lastdescription'>This is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.</div>


<div className='contacts-column'>
  <div>
<div className='youtubeclass'><img src={youtube} height='20px' width='20px' ></img> YOUTUBE</div>
<div className='facebookclass'><img src={facebook} height='20px' width='30px'></img>FACEBOOK</div>
<div className='twitterclass'><img src={twitter} height='20px' width='20px' ></img> TWITTER</div>
</div>
<div>
<div className='telegramclass'><img src={telegram} height='20px' width='30px' ></img> TELEGRAM</div>
<div className='instagramclass'><img src={instagram} height='20px' width='20px'></img> INSTAGRAM</div>
<div className='linkedinclass'><img src={linkedin} height='20px' width='20px'></img> LINKEDIN</div>
</div>
<div>




</div>
</div>
</div>
</div>



  {/*//*/}


   </div>






   </div>

    )
}