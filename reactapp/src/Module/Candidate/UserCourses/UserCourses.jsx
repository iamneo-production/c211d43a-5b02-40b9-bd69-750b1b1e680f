import "./UserCourses.css"
import React, {useState,useEffect} from 'react';
import axios from 'axios';
 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

import Card from './Card';


function UserCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [AllCourses,setAllCourses]  = useState([{title:'',description:'',instructorId:''}])


  
const handleSearch = (event) => {
  setSearchTerm(event.target.value)
};

useEffect(()=> {
  axios.get('http://localhost:8080/course')
  .then(response => {
   
    setAllCourses(response.data);
  })
  .catch(error => {
    console.error('Error fetching courses:', error);
  });
},[]);



function handleFilter()
{


  let newSearchTerm = searchTerm.toUpperCase()
setAllCourses( AllCourses.filter(ele => ele.title.toUpperCase().match(newSearchTerm)) ) 

}


function handlesort(ele)
{
  
  
  if(ele==="AtoZ")
    {
      const dumAr = [...AllCourses].sort((a,b)=> a.title.localeCompare(b.title))
      setAllCourses(dumAr)
    
    }
    if(ele==="ZtoA")
    {
      const dumAr = [...AllCourses].sort((a,b)=> b.title.localeCompare(a.title))
      setAllCourses(dumAr)
    
    }

}

  return (
    
    
    <div>
  

   

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
      <i onClick={handleFilter} className='fa fa-search'></i>

      <h1 className='Dis'>CATALOG</h1> 
      
    </div>

{/* //card */}
<div className='cardLists'>
{AllCourses.map((ele,index)=>
  <Card key={index} ele={ele.title} />

  )}

</div>
  {/* //card */}
  

  </div>
  )
}

export default UserCourses;