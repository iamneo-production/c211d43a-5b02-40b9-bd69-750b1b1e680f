import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Card(props) {

const navigate = useNavigate();

  const LoadEdit =(id) => {
    navigate("/admin/edit/"+id);
  }

  const handledelete=(id)=>{
    if(window.confirm('Are you sure you want to remove this admin?')){
      fetch("http://localhost:8000/admins/"+id,{
            method:"DELETE"
        }).then((res)=>{
            alert('Admin Deleted Successfully.')
            window.location.reload();
            
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  }
  
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
                  <button className="Custom_change" id="Edit" onClick={e=>LoadEdit(props.id)}>Edit</button>
              </li>
              <li>
                <button onClick={e=>handledelete(props.id)}
                  className="Custom_change"
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
