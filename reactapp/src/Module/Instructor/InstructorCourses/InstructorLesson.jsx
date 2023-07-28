import React, { useEffect, useState } from 'react'
import "./InstructorLesson.css"
import { Button, Table ,Modal,NumberInput,Input} from '@mantine/core'


import axios from 'axios';
import { useParams } from 'react-router-dom';


function InstructorLesson() {
const {id} = useParams()

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

   const [temp,setTemp] = useState(0)
  const [AddId,setAddId] =  useState(0)
  const [AddCourseId,setAddCourseId] = useState(0)
  const [AddTitle,setAddTitle] =  useState('')
  const [AddDescription,setAddDescription] =  useState('')
const [LessonAdminDetails,setLessonAdminDetails] = useState([{id:1,title:'react',description:'this is a react course',courseid:9},{
  id:3,title:'angular',description:'this is a angular course',courseid:0
},{id:4,title:'react',description:'this is a reacturse',courseid:2},{id:5,title:'react',description:'this is a react course',courseid:0}])
 


function handleLessonDelete(index) {
  const lessonIdToDelete = LessonAdminDetails[index].id;


  axios.delete(`http://localhost:8080/lesson/${lessonIdToDelete}`)
    .then(response => {

      const updatedLessonAdminDetails = LessonAdminDetails.filter((ele, idx) => idx !== index);
      setLessonAdminDetails(updatedLessonAdminDetails);
    })
    .catch(error => {
      console.error('Error deleting lesson:', error);
    });
}



function handleLessonUpdate(index)
{
setModal2Visible(true)

setAddId(LessonAdminDetails[index].id)
setAddTitle(LessonAdminDetails[index].title)
setAddDescription(LessonAdminDetails[index].description)
setAddCourseId(LessonAdminDetails[index].courseid)
setTemp(index)
}

function handleUpdateId(e)
{
setAddId(e.target.value)

}


function handleUpdateTitle(e)
{
setAddTitle(e.target.value)
}

function handleUpdateDescription(e)
{
  setAddDescription(e.target.value)
}


function handleUpdateCourseid(e)
{
  setAddCourseId(e.target.value)
}
function handleLessonSubmitUpdate() {
  const updatedLesson = {
    id: AddId,
    title: AddTitle,
    description: AddDescription,
    courseid:AddCourseId
  };

  axios.put(`http://localhost:8080/lesson/${AddId}`, updatedLesson)
    .then(response => {
      setLessonAdminDetails(prev => prev.map((ele, indx) => {
        if (indx === temp) {
          return { ...ele, ...response.data };
        }
        return ele;
      }));
      console.log(updatedLesson);
      setModal2Visible(false);
    })
    .catch(error => {
      console.error('Error updating lesson:', error);
    });
}



function handleLessonadd()
{
  const id = document.getElementById('id').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const courseid = document.getElementById('courseid').value;
  
  
  const newLesson = {
 
    title: title,
    description: description,
    courseid:courseid
   
  }
console.log(newLesson)

  axios.post('http://localhost:8080/lesson/add', newLesson).then(response => {
 
      setLessonAdminDetails([...LessonAdminDetails, response.data]);

   
      document.getElementById('id').value = '';
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('courseid').value = '';
      setModal1Visible(false);
    })
    .catch(error => {
      console.error('Error adding new lesson:', error);
    });
}

useEffect(() => {
  axios.get('http://localhost:8080/lesson/getlesson')
    .then(response => {
  
      setLessonAdminDetails(response.data);
    })
    .catch(error => {
      console.error('Error fetching lesson details:', error);
    });
}, []);


return (
    <div>

    <Button className='InstructorAddButton' onClick={() => setModal1Visible(true)}>Add Lesson</Button>
     

    <Table >
      <thead>
    <tr>
          <th> id</th>
          <th>title</th>
          <th>description</th>
           <th>Course id</th>
           <th></th>
           <th></th>
           <th></th>
        </tr>
      </thead>
      <tbody>{ LessonAdminDetails.map( (ele,index)=><tr key={index}>
      <td>{ele.id}</td>
      <td>{ele.title}</td>
      <td>{ele.description}</td>
      <td>{ele.courseid}</td>
    <td>  <Button className='tablerowButton' onClick={()=>handleLessonDelete(index)} >delete</Button></td>
      
    <td>  <Button className='tablerowButton lessonUpdatemodal' onClick={()=>handleLessonUpdate(index)}>update</Button></td>
    <td>  <br></br></td>
    <td>  <br></br></td>
    </tr>)}</tbody>
    



    </Table>


    <Modal opened={modal1Visible} onClose={() => setModal1Visible(false)} title="Add lesson" >
    <NumberInput placeholder="id" label="id" className='lessonaddmodal' id='id' />
    
    <label className='lessonaddmodal'>title</label>
    <Input placeholder="title"  id="title"  />
    
    <label className='lessonaddmodal'>description</label>
    <Input placeholder="description" id="description" />
    
    <label className='lessonaddmodal'>course id</label>
   
    <select   id="courseid"   >
      <option>{id}</option>
      </select>
   
    <Button onClick={handleLessonadd } className='lessonaddmodal'>submit</Button>
      </Modal>
      <Modal opened={modal2Visible} onClose={() => setModal2Visible(false)} title="update" className='lessonaddmodal'>
        <label className='lessonaddmodal'>Id</label>
    <Input value={AddId} label="id"  id='id'  onChange={handleUpdateId} />
   
    <label className='lessonaddmodal'>title</label>
    <Input value={AddTitle}  id="title" onChange={handleUpdateTitle} />
    
    <label  className='lessonaddmodal'>description</label>
    <Input value={AddDescription} id="description" onChange={handleUpdateDescription} />
   
   
  
    <Button className='lessonaddmodal'  onClick={handleLessonSubmitUpdate} >submit</Button>
      </Modal>
 
 



    </div>
  )
}

export default InstructorLesson