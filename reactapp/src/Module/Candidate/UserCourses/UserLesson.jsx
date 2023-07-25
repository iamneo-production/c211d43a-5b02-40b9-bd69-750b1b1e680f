import React, { Component, useState,useEffect } from 'react';
import "./UserLesson.css"

import axious from 'axios'

import { useNavigate, useParams } from 'react-router-dom';

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

function UserLesson() {
  
const checkarr = [{headingName:'BEGINNER CONTENT',headingArr:['welcome to the react course','what is react js','setting up the course dev environment'],condition:false,oldDropDownIcon:'fas fa-chevron-up'},
{headingName:'INTERMEDIATE CONTENT',headingArr:['Arrow function','Exports and Imports','spread and rest operator','react state and working with Events'],condition:false,oldDropDownIcon:'fas fa-chevron-up'},
{headingName:'ADVANCED CONTENT',headingArr:['uderstanding error message','Analyzing code flow warnings','use the react dev tools'],condition:false,oldDropDownIcon:'fas fa-chevron-up'}]

const {a}= useParams()
 const nav = useNavigate()
const [emailId,setEmailId] = useState('')
const [phoneNo,setPhoneNo] =  useState('')

const [lesson,setLesson] = useState([{id:0,title:'',description:'',instructorId:'',lessons:[]}])


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

const [Id,setId] = useState(0)
const [oldprice,setOldPrice] = useState(0)

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
CourseLanguage:'English',
topDiplayCourses:["REACT","JAVA SCRIPT","ANGULAR","JAVA","PYTHON","AI"]

}]





const featuresArr = [
{id:1,headingName:'Access to Course Materials',quotes: 'By following a course website, you gain access to a wealth of course materials, including lecture notes, slides, readings, assignments, and supplementary resources. This allows you to conveniently access and review the content whenever you need it, even after the course has ended.',imaage:'https://th.bing.com/th/id/R.a8b10af99482e1f792cf671642c32cf9?rik=u9GPkryhxcNM%2bQ&riu=http%3a%2f%2fprsay.prsa.org%2fwp-content%2fuploads%2f2021%2f05%2fcollaboration-768x513.jpg&ehk=kpeyHEpbu%2biG3SU3E0BZ6Iog4T1li5WuehMDfJsH2Qg%3d&risl=&pid=ImgRaw&r=0'},
{id:2,headingName:'Interaction and Collaboration',quotes:' Many course websites incorporate discussion forums, chat features, or other communication channels that facilitate interaction and collaboration among students. This creates a supportive learning community where you can engage with your peers, ask questions, share ideas, and learn from each others perspectives.',imaage:'https://image.freepik.com/free-photo/close-up-coins-stack-decrease-white-background-financial-economy-investor_50039-295.jpg'},
{id:3,headingName:'Cost-Effective Learning',quotes:'Course websites, especially those offering Massive Open Online Courses (MOOCs), are often more cost-effective compared to traditional educational institutions. They provide access to high-quality educational content at a fraction of the cost, making learning more affordable and accessible to a wider audience.',imaage:'https://th.bing.com/th/id/R.af5ab75c72bd749c625671ec534eb49b?rik=6i%2bFJL7%2bnGDq1Q&riu=http%3a%2f%2fatlantablackstar.com%2fwp-content%2fuploads%2f2015%2f02%2fcollege-students-in-discussion.jpg&ehk=jlNIL6d6zzOJ6UPRbelpoR3qSBFa1wFuQegFeW1DU9Y%3d&risl=1&pid=ImgRaw&r=0'},
{id:4,headingName:'Tracking Progress and Assessments',quotes:" Many course websites offer features that allow you to track your progress, complete assessments, and receive feedback on your performance. This helps you monitor your learning journey, identify areas where you may need additional focus, and gauge your understanding of the course material.",imaage:'https://th.bing.com/th/id/OIP.e5SR07JRGUfsUY1MAN1n1AHaHH?pid=ImgDet&rs=1'}





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

if(checkemailId && checkphoneNo)
{
  // axious.get("http://localhost:8080/lesson").then((response)=> setLesson(response.data)).catch((error)=>catchthe(error)).finally(finaloda)
   nav('/')
}
}

function callthe(response)
{
  console.log(response)
  setId(response.data[0].id)
  setOldPrice(response.data[0].oldValue)
}

function catchthe(error)
{
  console.log(error)
}

function finaloda()
{
  console.log('clear-up')
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

 
}, [])







useEffect(()=>{
  axious.get("http://localhost:8080/course").then((response)=> setLesson(response.data)).catch((error)=>catchthe(error)).finally(finaloda)

},[])







  function handleDropDownList(param)
  {
    let duplicate = [...(newLargeDescription)]
   duplicate[param].condition===true?duplicate[param].condition=false:duplicate[param].condition=true
   duplicate[param].oldDropDownIcon.match('fas fa-chevron-up')?duplicate[param].oldDropDownIcon = ('fas fa-chevron-down'):duplicate[param].oldDropDownIcon = ('fas fa-chevron-up')
  

  setLargeDescription(duplicate)

  }      
console.log(lesson)

  return (
    <div className='SingleCourseEnrollmentTotal'>
{lesson.length === 0 ? (
    <div>No Lesson available</div>
  ) : (<div>
      {/*//*/}
     <div className='SingleCourse-TopPart'>
     {/*//*/}
    <div className='SingleCourseEnrollMent'>
     <div className='CourseDetails' id='toppartLesson' >
     <div className='smallNavigator'><h4 className='navunderline'>Home</h4><h4><i className='fa fa-chevron-right'></i></h4>
      <h4 className='navunderline'>Courses</h4><h4><i className='fa fa-chevron-right'></i></h4>
      <h4>{CourseDetails[0].CourseName}</h4>
     
     
     </div>
    <br></br>
    <div className='TableuIntro' id='toppartLesson' ><h1 >{lesson[0].title}</h1></div>
    <div><h2>{lesson[0].description}</h2></div>
      <br></br>
   <div><div id='toppartLesson' ><h3>Buy this Course @ ₹ 2500</h3></div>
   <div className='CoursePrices' id='toppartLesson'><h2 className='oldCoursePrice CoursePrices_h2'>₹2500 </h2><h2 className='CoursePrices_h2' >₹ 2000 </h2 ><h3 className='PriceDiff'>you save ₹500</h3></div>
   </div>
 
   <div className='CourseHeadBottomTable' id='toppartLesson'>
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
     <div id="cardfixeddiv" ><h2>Get this Course @ ₹2000</h2> </div>
     <div id="cardfixeddiv"><label>Name</label><br></br><input id='cardinput' type='text'></input></div>
  
     <div id="cardfixeddiv" ><label>Email ID</label><br></br><i id="error-icon-one" className={checkemailId?'error-icon-one-hidden':'fas fa-exclamation-circle'} ></i><input type='text' className={checkemailId?null:'emailInput'} id='cardinput' value={emailId} onChange={(e)=>handleEmailId(e)}></input></div>
     <div id="cardfixeddiv" ><label>Phone Number</label><br></br><i id="error-icon-two" className={checkphoneNo?'error-icon-one-hidden':'fas fa-exclamation-circle'} ></i><input type='text' className={checkphoneNo?null:'phoneInput'} id='cardinput' value={phoneNo} onChange={(e)=>handlePhoneNo(e)}></input></div>
     <div id="cardfixeddiv"><button onClick={handleEnroll}>Enroll Now</button></div>
     <div id="cardfixeddiv"><h3><i className='fa fa-user' style={{position:'relative',right:'10px',color:'green'}}  ></i> 3008 enrolled in this course</h3></div>
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
 <div className='keyFeaturesChild'><div className='smallchild'> <i className='fa fa-certificate'></i> Globally Recognised Certification</div><div className='smallchild'> <i className='fa fa-desktop' ></i> 100% online and Self-paced learning</div></div>
 <br></br>
 <div className='keyFeaturesChild'> <div className='smallchild'> <i className='fa fa-universal-access' ></i> Full lifetime access to all content</div><div className='smallchild'> <i className='fa fa-cloud' ></i> Access to 4 Gamified Practise Platforms</div></div>
 <br></br>
 <div className='keyFeaturesChild'><div className='smallchild'> <i className='fa fa-clock'  ></i>7 Days refund Policy available</div><div className='smallchild'> <i className='fa fa-user' ></i>  Support to clear all your doubts</div></div>
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
 <button><i className='fa fa-caret-left '  id='leftBuutonArrow' onClick={handleleftButton}></i></button>
 
 <div className='leftCard'>
 
 <div className=''>
   <img src={featuresArr[leftCardNo].imaage} className='leftCardimage' height='300px' width='250px' />
   <div className="">
     <h4>{featuresArr[leftCardNo].headingName}</h4>
  
   </div>
   </div>
 
 </div>
 
 
 
 
  <div className="centerCard">
   <div className='centerCardFront'>
   <img src={featuresArr[centerCardNo].imaage} height='300px' width='250px' />
   <div className="rollcontainer">
     <h4>{featuresArr[centerCardNo].headingName}</h4>
  
   </div>
   </div>
   <div className='centerCardBack'>
 <q className='centerCardBackq'>{featuresArr[centerCardNo].quotes} </q>
   </div>
 </div>
 
 
 <div className='rightCard'>
 <div className=''>
   <img src={featuresArr[rightCardNo].imaage}  className='leftCardimage' height='300px' width='250px' />
   <div className="">
     <h4>{featuresArr[rightCardNo].headingName}</h4>
  
   </div>
   </div>
 
   
 </div>
 
 
 
 <button onClick={handlerighttButton} id='rightBuutonArrow'><i className='fa fa-caret-right'></i></button>
 </div>
  {/*//*/}
 
  {/*//*/}
  
 
 <br></br>
 <br></br>
   {/*//*/}
  
   <div className='CourseDropDownList'>
   <h2>CONTENT YOU WILL LEARN</h2>
 {CourseDetails[0].CourseLargerDescription.map( (ele,index) =>(<div key={index} className='eachdropbox' ><h3 onClick={()=>handleDropDownList(index)} className='CourseDropHead'  >
 
   <i className={ele.oldDropDownIcon}></i>{ele.headingName}</h3><div className={CourseDetails[0].CourseLargerDescription[index].condition?'DropDownTail-Visible':'DropDownTail-hidden'}>{ele.headingArr.map((cont,rollno) =><h4  key={rollno}><i className='fa fa-chevron-right'></i><i>{cont}</i></h4>)}</div></div>))}
 <br></br>
 <br></br>
  
 
 
 
 
 
 </div>
 
 
 
   
   {/*//*/}
 
 
   <div className='contactDetails'>
     <div className='TypesOfCourses'>
 <div><div><h3>Available Courses</h3></div>{CourseDetails[0].topDiplayCourses.slice(0,3).map( (ele,index )=> <div key={index}>{ ele}</div>)}</div>
 <div><div><h3>Popular Courses</h3></div>{CourseDetails[0].topDiplayCourses.slice(3,6).map( (ele,index) => <div key={index}>{ele}</div>)}</div>
 
 </div>
 
 <div className='Horizontaolline'>
   <hr></hr>
 </div>
 
 
 <div className='Contacts'>
 <div className='lastdescription'>This is an IIT-M & IIM-A incubated Ed-tech company that focuses on providing personalized learning solutions for its learners right from online learning, upskilling & recruitment opportunities in world-class quality. And, bestow tech-skills with the comfort of your native language.</div>
 
 
 <div className='contacts-column'>
   <div>
 <div className='youtubeclass'><img src='https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png' height='20px' width='20px' ></img> <div className='logonamevis'>YOUTUBE</div></div>
 <div className='facebookclass'><img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png' height='20px' width='30px'></img><div className='logonamevis'>FACEBOOK</div></div>
 <div className='twitterclass'><img src='https://th.bing.com/th/id/OIF.U3bRXVZg8LcVoSYFDF72xQ?pid=ImgDet&rs=1' height='20px' width='20px' ></img> <div className='logonamevis'>TWITTER</div></div>
 </div>
 <div >
 <div className='telegramclass'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png' height='20px' width='20px'  ></img> <div className='contacts-column-second logonamevis'> TELEGRAM</div></div>
 <div className='instagramclass' style={{position:'relative',left:'-5px'}}><img src='https://th.bing.com/th/id/OIP.m-Yx687f--Vfv1Zioj2KuAHaHw?pid=ImgDet&rs=1' style={{backgroundColor:"black"}} height='20px' width='20px'></img> <div className='contacts-column-third logonamevis'>INSTAGRAM</div></div>
 <div className='linkedinclass' style={{position:'relative',left:'-5px'}}><img src='https://th.bing.com/th/id/OIP.b5oDvUVU5UVN4cefTJGq3wHaHa?pid=ImgDet&rs=1' height='20px' width='20px'></img> <div className='contacts-column-fourth logonamevis'>LINKEDIN</div></div>
 </div>
 <div>
 
 
 
 
 </div>
 </div>
 </div>
 </div>
 
 
 
   {/*//*/}
 
   
    </div>
 

 
 
  
    </div>)}
    </div>
  )
}

export default UserLesson