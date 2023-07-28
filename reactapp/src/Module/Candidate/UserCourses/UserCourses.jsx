import "./UserCourses.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import NavCandidate from "../../../Components/NavCandidate";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />;

function UserCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [AllCourses, setAllCourses] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const token = localStorage.getItem('token');
  console.log(token,"hi");
  
  useEffect(() => {
    axios.get('https://8080-bbcbbfdbbaaeabaccffcffeaeaadbdbabf.project.examly.io/course', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setAllCourses(response.data);
        console.log(response.data);
      })
      
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  function handleFilter() {
    let newSearchTerm = searchTerm.toUpperCase();
    setAllCourses(AllCourses.filter(ele => ele.title.toUpperCase().match(newSearchTerm)));
  }

  function handlesort(ele) {
    if (ele === "AtoZ") {
      const dumAr = [...AllCourses].sort((a, b) => a.title.localeCompare(b.title));
      setAllCourses(dumAr);
    }
    if (ele === "ZtoA") {
      const dumAr = [...AllCourses].sort((a, b) => b.title.localeCompare(a.title));
      setAllCourses(dumAr);
    }
  }

  return (
    <div>
      <NavCandidate />

      <div className="course-list-container">
        <select className="sortcontain" id="dropdown" onChange={(e) => handlesort(e.target.value)}>
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

      {AllCourses.length === 0 ? (
        <div className="sa-enrolled">
          <h2 className="sa-en">No Courses Available!</h2>
        </div>
      ) : (
        <div className='cardLists'>
          {AllCourses.map((ele, index) =>
            <Card key={index} ele={ele.title} ele1={ele.description} />
          )}
        </div>
      )}

    </div>
  );
}

export default UserCourses;
