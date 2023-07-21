import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "./api";

export default function Card(props) {

const navigate = useNavigate();

  const LoadEdit =(id) => {
    navigate("/instructor/update/"+id);
  }

  const handledelete=(id)=>{
    if(window.confirm('Are you sure you want to remove this Instructor?')){
      axios.delete(`${base_url}/admins/${id}`).then(
        (response)=>{
          alert('Instructor Deleted Successfully.')
          props.update(id);
        },(error)=>{
          console.log(error);
          alert('OPS! Something went wrong | Internal server error.')
        }
      )
    }
  };
  
  return (
    <React.Fragment>
      <li>
        <article
          className="card"
          data-visible={props.bid === props.data.id && props.text}
        >
          <div data-card="front" className="card__front flow-content">
            <img
              className="card__img mx-auto"
              src={props.data.src}
              alt="Random images (from Unsplash)"
            />
            <div className="flow-content" data-spacing="sm">
              <p className="card__name">{props.data.name}</p>
              <p className="card__position">{props.data.designation}</p>
            </div>
          </div>
          <div data-card="back" className="card__back flow-content">
            <p className="card__name">{props.data.name}</p>
            <q>{props.data.description}</q>
            <ul role="list" className="card__social flex-group">
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter fa-xl"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </li>
            </ul>
            <ul
              className="card__social flex-group"
              style={{
                listStyle: "none",
                paddingLeft: "20px",
                marginBottom: "2em",
              }}
            >
              <li>
                  <button className="instructor_Custom_change" id="Edit" onClick={e=>LoadEdit(props.id)}>Update</button>
              </li>
              <li>
                <button onClick={e=>handledelete(props.id)}
                  className="instructor_Custom_change"
                  id="Delete"
                  style={{ background: "#ce1c1c" }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
          <Footer id={props.data.id} btnClick={props.btnClick} />
        </article>
      </li>
    </React.Fragment>
  );
}
