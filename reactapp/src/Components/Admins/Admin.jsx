import React, { useEffect, useState } from "react";
import Card from "../Card";
import "./main.css";
import { Link } from "react-router-dom";
// import data from "./Data";

export default function Admin() {
  const [admindata, admindatachange] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/admins")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        admindatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [text, setText] = useState("false");
  const [bId, setBId] = useState(null);

  const btnClick = (id) => {
    // console.log("clicked on button");
    if (text === "false") {
      setBId(id);
      setText("true");
    } else if (id !== bId && text === "true") {
      setText("false");
      setBId(id);
      setText("true");
    } else {
      setText("false");
      setBId(null);
    }
  };

  return (
    <div>
      <section>
        <div className="container flow-content">
          <h2 className="section-title">Admin Details</h2>
          <ul role="list" className="grid" data-columns="3">
            {admindata &&
              admindata.map((e, index) => {
                return (
                  <div key={index}>
                    <Card
                      data={e}
                      bid={bId}
                      text={text}
                      id={e.id}
                      btnClick={btnClick}
                    />
                  </div>
                );
              })}
          </ul>
          <div className="card" style={{}}>
            <div data-card="front" className="card__front flow-content">
              <Link to="admin/add">
                <button className="Custom_add_button">
                  <i className="fa-solid fa-plus card__toggle-icon"></i>
                </button>
              </Link>
              <p className="card__name" style={{ marginTop: "4rem" }}>
                Add Admin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
