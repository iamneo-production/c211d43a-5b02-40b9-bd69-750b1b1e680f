import React, { useEffect, useState ,useCallback} from 'react';

import { Button, Table ,Input,Modal} from '@mantine/core';
import axios from 'axios';

function Assessment() {
  const[pop1,setPop1]=useState(false);
  const[pop2,setPop2]=useState(false);
  const[pop3,setPop3]=useState(false);
  
  const [AssessAdminDetails, setAssessAdminDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/assessment')
      .then((response) => {
        setAssessAdminDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, []);

  const handleAssessAdd = ()=>
  {
    const questiontitle = document.getElementById('questiontitle').value;
    const optiona=document.getElementById('optiona').value;
    const optionb=document.getElementById('optionb').value;
    const optionc=document.getElementById('optionc').value;
    const optiond=document.getElementById('optiond').value;
    const correctans=document.getElementById('correctans').value;

    const assessdata ={
            questiontitle:questiontitle,
            optiona:optiona,
            optionb:optionb,
            optionc:optionc,
            optiond:optiond,
            correctans:correctans

    };

    axios.post('http://localhost:8080/assessment', assessdata)
    .then(response => {
      setAssessAdminDetails([...AssessAdminDetails, response.data]);
      setPop1(false);
    })
    .catch(error => {
      console.error('Error adding new course', error);
    });
  };

  const handleAssessUpdate = useCallback (async () => {
    const id = document.getElementById('id').value;
    const questiontitle = document.getElementById('questiontitle').value;
    const optiona=document.getElementById('optiona').value;
    const optionb=document.getElementById('optionb').value;
    const optionc=document.getElementById('optionc').value;
    const optiond=document.getElementById('optiond').value;
    const correctans=document.getElementById('correctans').value;

    const assessupdate ={
      id:id,
      questiontitle:questiontitle,
      optiona:optiona,
      optionb:optionb,
      optionc:optionc,
      optiond:optiond,
      correctans:correctans
    }

    try {
      const response = await axios.put(`http://localhost:8080/assessment/${id}`, assessupdate);
      setAssessAdminDetails(prevAssessAdminDetails => {
        const updatedIndex = prevAssessAdminDetails.findIndex(assess => assess.id === id);
        if (updatedIndex !== -1) {
          const updatedAdminDetails = [...prevAssessAdminDetails];
          updatedAdminDetails[updatedIndex] = response.data;
          return updatedAdminDetails;
        }
        return prevAssessAdminDetails;
      });

      const updatedResponse = await axios.get('http://localhost:8080/assessment');
      setAssessAdminDetails(updatedResponse.data);
  
      
      setPop2(false);
    } catch (error) {
      console.error('Error updating course', error);
    }
  }, []); 

  const handleAssessDelete = ()=> {
    const id = document.getElementById('id').value;

    axios.delete(`http://localhost:8080/assessment/${id}`)
      .then(response => {
        console.log('deleted');
      
        axios
          .get('http://localhost:8080/assessment')
          .then(resp => {
            setAssessAdminDetails(resp.data);
          })
          .catch(error => {
            console.error('Error fetching course details:', error);
          });
        setPop3(false);
      })
      .catch(error => {
        console.error('Error deleting course', error);
      });
  
  

  };


  
  
  return (
    <div>
      <Button className="Addbutton" onClick={()=>setPop1(true)}>
        Add Course
      </Button>
      <Button className="Updatebutton" onClick={()=>setPop2(true)}>
        Update
      </Button>
      <Button className="Delbutton" onClick={()=>setPop3(true)}>
        Delete
      </Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>question</th>
            <th>optiona</th>
            <th>optionb</th>
            <th>optionc</th>
            <th>optiond</th>
            <th>correctans</th>
          </tr>
        </thead>
        <tbody>
          {AssessAdminDetails.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.questiontitle}</td>
              <td>{ele.optiona}</td>
              <td>{ele.optionb}</td>
              <td>{ele.optionc}</td>
              <td>{ele.optiond}</td>
              <td>{ele.correctans}</td>
              <br />
              <br />
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal opened={pop1} onClose={() => setPop1(false)} title="Add ">
        <label>Question</label>
        <Input placeholder="title" id="questiontitle" />
        <br />
        <label>Option A</label>
        <Input placeholder="option" id="optiona" />
        <br />
        <label>Option B</label>
        <Input placeholder="option" id="optionb" />
        <br />
        <label>Option C</label>
        <Input placeholder="option" id="optionc" />
        <br />
        <label>Option D</label>
        <Input placeholder="option" id="optiond" />
        <br />
        <label>Correct Answer</label>
        <Input placeholder="ans" id="correctans" />
        <br />
        <Button onClick={handleAssessAdd}>submit</Button>
      </Modal>

      <Modal opened={pop2} onClose={() => setPop2(false)} title="Update">
      <label>Question</label>
        <Input placeholder="id" id="id" />
        <br />
        <label>Question</label>
        <Input placeholder="title" id="questiontitle" />
        <br />
        <label>Option A</label>
        <Input placeholder="option" id="optiona" />
        <br />
        <label>Option B</label>
        <Input placeholder="option" id="optionb" />
        <br />
        <label>Option C</label>
        <Input placeholder="option" id="optionc" />
        <br />
        <label>Option D</label>
        <Input placeholder="option" id="optiond" />
        <br />
        <label>Correct Answer</label>
        <Input placeholder="ans" id="correctans" />
        <br />
        <Button onClick={handleAssessUpdate}>submit</Button>
      </Modal>

      <Modal opened={pop3} onClose={() => setPop3(false)} title="Delete">
      <label>Id</label>
        <Input placeholder="id" id="id" />
        <br />
        <Button  onClick={handleAssessDelete}>Delete</Button>
    </Modal>
    </div>
  );
  };

export default Assessment;
