import React, { useEffect, useState } from "react";
// import Form from './Form'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAdmin() {
  const { adminid } = useParams();

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [designation, designationchange] = useState("");
  const [description, descriptionchange] = useState("");
  const [src, srcchange] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/admins/" + adminid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        designationchange(resp.designation);
        descriptionchange(resp.description);
        srcchange(resp.src);
      }).catch((err)=>{
        console.log(err.message);
      })
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, name, designation, description, src };

    fetch("http://localhost:8000/admins/" + adminid, {
      method: "PUT",
      headers: { "content-type": "application/json" },

      body: JSON.stringify(data),
    })
      .then((res) => {
        alert("Admin Details Updated Successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="login-box">
      <h2>Update Admin details</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="number" defaultValue={id} />
          <label>ID</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={name}
            onChange={(e) => namechange(e.target.value)}
            required
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={designation}
            onChange={(e) => designationchange(e.target.value)}
            required
          />
          <label>Designation</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={description}
            onChange={(e) => descriptionchange(e.target.value)}
            required
          />
          <label>Description</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={src}
            onChange={(e) => srcchange(e.target.value)}
            required
          />
          <label>Image src : </label>
        </div>
        <button type="submit" className="create_admin">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Update
        </button>
        <Link to="/">
          <button className="mx-4 create_admin">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}
