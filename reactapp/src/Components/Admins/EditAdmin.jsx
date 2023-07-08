import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import base_url from "./api";

export default function EditAdmin() {
  const { adminid } = useParams();


  const [adminData, setAdminData] = useState({
    id: "",
    name: "",
    designation: "",
    description: "",
    src: "",
  });

  useEffect(() => {
    document.title = "Update Instructor";
    fetchAdminData();
  }, []);

  const fetchAdminData = () => {
    axios
      .get(`${base_url}/admins/${adminid}`)
      .then((response) => {
        const { id, name, designation, description, src } = response.data;
        setAdminData({ id, name, designation, description, src });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...adminData };

    axios
      .put(`${base_url}/admins/${adminid}`, data)
      .then((response) => {
        alert("Instructor Details Updated Successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-box">
      <h2>Update Instructor</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input type="number" defaultValue={adminData.id} />
          <label>ID</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={adminData.name}
            onChange={(e) =>
              setAdminData({ ...adminData, name: e.target.value })}
            required
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={adminData.designation}
            onChange={(e) =>
              setAdminData({ ...adminData, designation: e.target.value })}
            required
          />
          <label>Designation</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={adminData.description}
            onChange={(e) =>
              setAdminData({ ...adminData, description: e.target.value })}
            required
          />
          <label>Description</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={adminData.src}
            onChange={(e) =>
              setAdminData({ ...adminData, src: e.target.value })}
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
