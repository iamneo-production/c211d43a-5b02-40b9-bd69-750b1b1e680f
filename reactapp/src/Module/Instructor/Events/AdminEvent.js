import React, { useEffect, useState } from 'react'
import { Button,Select, Table ,Modal,NumberInput,Input, Badge} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import './AdminEvent.css'
import axios from 'axios';


function AdminEvent() {

const [Inc,setInc] = useState(0)
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

 const [setName,setaddlessontitle] = useState('')
 const [addlessondes,setaddlessondes] = useState('')


 function handleaddlessontitle(e)
 {
setaddlessontitle(e.target.value)
 }

 function handleaddlessondes(e)
 {
setaddlessondes(e.target.value)
 }

const [LessonAdminDetails,setLessonAdminDetails] = useState([{setName:'react',quizzes:[{id:0,qus:'',ans:0,opt1:'',opt2:'',opt3:'',opt4:''}]}])
 
const [quizzes,setQusArr]  = useState([{id:0,qus:'',ans:0,opt1:'',opt2:'',opt3:'',opt4:'',cand:0}])

function handleLessonDelete(a) {
 const b = LessonAdminDetails[a].id
 console.log(b)
  axios.delete(`http://localhost:8080/event/delete/${b}`)
    .then(response => {
      // Handle the successful deletion (optional)
      console.log('Lesson deleted successfully.');
      
      // If you want to update the LessonAdminDetails state to reflect the updated data
      const updatedLessonAdminDetails = LessonAdminDetails.filter(lesson => lesson.id !== b);
      setLessonAdminDetails(updatedLessonAdminDetails);
    })
    .catch(error => {
      // Handle errors (optional)
      console.error('Error deleting lesson:', error);
    });
}







function handleLessonadd()
{
  const a = {
    id: Inc,
   setName:setName,
   quizzes:quizzes
    }
    console.log(a)

axios.post('http://localhost:8080/event/saveSet',a).then(response =>{
setLessonAdminDetails([...LessonAdminDetails,a])

}).catch( error => console.log(error))
setModal1Visible(false)

}



const handleInputChange = (index, event) => {
  const { name, value } = event.target;
  const updatedInputFields = [...quizzes];
  updatedInputFields[index] = { ...quizzes[index], [name]: value };
  setQusArr(updatedInputFields);
};



useEffect(() => {
  axios.get('http://localhost:8080/event/getall')
    .then(response => {
      // Update the LessonAdminDetails state with the fetched data
           
      setLessonAdminDetails(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching lesson details:', error);
    });
}, []);

const generateAnswerSelect = (index) => (
  
  <select style={{width:'390px',height:'40px'}} name="ans" value={quizzes[index].ans} onChange={(e) => handleInputChange(index, e)}>
    <option style={{width:'390px',height:'40px'}} value="">Select an answer</option>
    <option style={{width:'390px',height:'40px'}} value={quizzes[index].option1}>{1}</option>
    <option style={{width:'390px',height:'40px'}} value={quizzes[index].option2}>{2}</option>
    <option style={{width:'390px',height:'40px'}} value={quizzes[index].option3}>{3}</option>
    <option style={{width:'390px',height:'40px'}} value={quizzes[index].option4}>{4}</option>
  </select>


);

function handleAddEvent()
{
  setInc(Inc+1)
  setModal1Visible(true)
  setaddlessontitle('')
  setaddlessondes('')
  setQusArr([{id:0,qus:'',ans:0,opt1:'',opt2:'',opt3:'',opt4:'',cand:0}])

}

function handleModalExtend()
{
  setInc(Inc+1)
  const b ={id:0,qus:'',ans:0,opt1:'',opt2:'',opt3:'',opt4:'',cand:0}
  setQusArr([...quizzes,b])
}

return (
    <div>
<br></br>
    <Button className='LessonAddCourse' onClick={() => handleAddEvent()}>Add Lesson</Button>
     
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <Table >
      <thead >
    <tr >
          <th > id</th>
          <th>title</th>
   
           <th></th>
           <th></th>
           <th></th>
        </tr>
      </thead>
      <tbody>{ LessonAdminDetails.map( (ele,index)=><tr key={index}>
      <td>{index}</td>
      <td>{ele.setName}</td>
  

    <td>  <Button className='tablerowButton' onClick={()=>handleLessonDelete(index)} >delete</Button></td>
      
    <td>  <br></br></td>
    <td>  <br></br></td>
    </tr>)}</tbody>
    



    </Table>


    <Modal opened={modal1Visible} onClose={() => setModal1Visible(false)} title="Add lesson" className='lessonaddmodal'>
    <NumberInput placeholder="id"  label="id"  id='id' />
    <br></br>
    <label>title</label>
    <Input placeholder="title" value={setName}  onChange={(e)=>handleaddlessontitle(e)}  id="title"  />
    <br></br>
    <label >description</label>
    <Input placeholder="description" value={addlessondes} onChange={(e)=>handleaddlessondes(e)} id="description" />
    
    <br></br>
    {quizzes.map((ele,indx) => 
      <div>

<Badge >question {indx+1}</Badge>
    <br></br>
    <br></br>
    <Input value={ele.qus} name='qus' onChange={(e)=>handleInputChange(indx,e)} />
<br></br>
<label>ans</label>
{generateAnswerSelect(indx)}
<br></br>
    <br></br>
<label>option 1</label>
<Input value={ele.opt1} name='opt1' onChange={(e)=>handleInputChange(indx,e)} ></Input>
<br></br>
<label >option 2</label>
<Input value={ele.opt2} name='opt2' onChange={(e)=>handleInputChange(indx,e)} ></Input>
<br></br>
<label >option 3</label>
<Input value={ele.opt3 } name='opt3' onChange={(e)=>handleInputChange(indx,e)}></Input>
<br></br>
<label>option 4</label>
<Input  value={ele.opt4} name='opt4' onChange={(e)=>handleInputChange(indx,e)}></Input>
<br></br>





      </div>
      
      )}
   
    <br></br>
    <Button onClick={handleModalExtend}>add question</Button>
    
    <Button style={{marginLeft:'180px'}} onClick={handleLessonadd } >submit</Button>
      </Modal>

 



    </div>
  )
}

export default AdminEvent