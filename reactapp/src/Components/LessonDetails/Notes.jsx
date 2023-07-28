import axios from "axios";
import React, { useEffect, useState } from "react";
import base_url from "./api"

export default function Notes(props) {
  const [inputValue, setInputValue] = useState("");

  const [notes, setNotes] = useState();

  // const token = localStorage.getItem('token');
  //   console.log(token,"hi");
  //   ,{
  //     headers: {
  //    'Authorization': `Bearer ${token}`
  //  }}


  // Get Functions 
  const getAllNotes = () => {
    axios.get(`${base_url}/notes`).then(
      (response) => {
        console.log(response);
        setNotes(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllNotes();
  }, []);


  // Add Functions 

  const handleSubmit = (e) => {
    e.preventDefault();
    postDataToServer(notes);
    console.log(notes);
  };

  const postDataToServer = () => {
    axios.post(`${base_url}/notes`, { notes: inputValue }).then(
      (response) => {
        console.log(response);
        console.log("Success");
        setNotes([...notes, { notes: inputValue }]);
        setInputValue("");
      },
      (error) => {
        console.log(error);
        console.log("Ops! Something Went Wrong");
      }
    );
  };


  // Delete Functions 
  const updateNotes=(id)=>{
    setNotes(notes.filter((c) => c.id !== id))
  };

  const handledelete=(id)=>{
      axios.delete(`${base_url}/notes/${id}`).then(
        (response)=>{
          updateNotes(id);
        },(error)=>{
          console.log(error);
        }
      )
  };

  return (
    <React.Fragment>
      <div className="textarea content-width border_radius">
        <textarea
          className="border_radius"
          cols="30"
          rows="5"
          placeholder="Add your notes ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <div className="textarea_button">
          <button onClick={handleSubmit} id="lesson_button">
            Submit
          </button>
        </div>
      </div>
      <div id="notes-list">
        <ul>
          {notes &&
            notes.map((e, index) => (
              <li
                key={index}
                style={{ padding: "20px"}}
                id="lesson-left-notes_li"
                className="border_radius lesson_left-notes"
              >
                {e.notes}
                <i className="fa-regular fa-circle-xmark lesson-notes_delete" onClick={()=>handledelete(e.id)} />
              </li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
