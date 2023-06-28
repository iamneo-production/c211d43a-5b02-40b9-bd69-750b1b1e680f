import React, {useState} from 'react';
import './CourseList.css'; 
import  AngularImage from '../src/AllCourses/AngularImage.jpg';
import ReactImage from '../src/AllCourses/ReactImage.jpg';
import JavaImage from '../src/AllCourses/JavaImage.jpg';
import JavaScriptImage from '../src/AllCourses/JavaScriptImage.jpg';
import PythonImage from '../src/AllCourses/PythonImage.jpg';
import AIImage from '../src/AllCourses/AIImage.jpg';
import Card from './Card';
import Helmet from 'react-helmet'

const CourseList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value==='')
     setAllCourses(OldAllCourses);
    
    
  };





  const OldAllCourses = [{id:1,CourseName:'ANGULAR',image:AngularImage},
  {id:2,CourseName:'REACT',image:ReactImage},
  {id:3,CourseName:'JAVA',image:JavaImage},
  {id:4,CourseName:'JAVASCRIPT',image:JavaScriptImage},
  {id:5,CourseName:'PYTHON',image:PythonImage},
  {id:6,CourseName:'AI BASICS',image:AIImage}
  ];
  //
  const [AllCourses,setAllCourses]  = useState(OldAllCourses)



  

 


  function handleFilter()
  {


    let newSearchTerm = searchTerm.toUpperCase()
   
setAllCourses( AllCourses.filter(ele => ele.CourseName.match(newSearchTerm)) ) 

  }


function handlesort(ele)
{
  
  
  if(ele==="AtoZ")
    {
      const dumAr = [...OldAllCourses].sort((a,b)=> a.CourseName.localeCompare(b.CourseName))
      setAllCourses(dumAr)
    
    }
    if(ele==="ZtoA")
    {
      const dumAr = [...OldAllCourses].sort((a,b)=> b.CourseName.localeCompare(a.CourseName))
      setAllCourses(dumAr)
    
    }
}







  return (



    <div>
   <Helmet>
   <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
  <link rel="stylesheet"
  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />


   </Helmet>

   

    <div className="course-list-container"> 
     
    
     <select className="sortcontain" id="dropdown"  onChange={(e)=>handlesort(e.target.value)}>
     <option value="Sort">Sort</option>
     
        <option value="AtoZ">A - Z</option>
        <option value="ZtoA">Z - A</option>
        <option value="popular">Popular</option>
      </select>
    
      <input
        className="course-list-search" 
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <i onClick={handleFilter} className='bx bx-search-alt-2'></i>

      <h1 className='Dis'>CATALOG</h1> 
      
    </div>

{/* //card */}
<div className='cardLists'>
{AllCourses.map(ele=>
  <Card key={ele.id} ele={ele} />

  )}

</div>
  {/* //card */}
  

  </div>

  );
  
};

export default CourseList;
