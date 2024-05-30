import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import background from './img/background.png';

function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`/edit_user/${id}`, data[0])
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div 
      className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center" 
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-50 d-flex justify-content-start">
        <Link to="/" className="btn btn-primary mb-3">
          Back
        </Link>
      </div>
      {data.map((student) => (
        <form onSubmit={handleSubmit} className="w-50 p-3 bg-white rounded shadow-sm" key={student.id}>
          <h2 className="mb-4 text-center">Edit User {id}</h2>
          <div className="form-group my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              value={student.name}
              type="text"
              className="form-control"
              name="name"
              required
              onChange={(e) => setData([{ ...data[0], name: e.target.value }])}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              value={student.email}
              type="email"
              className="form-control"
              name="email"
              required
              onChange={(e) => setData([{ ...data[0], email: e.target.value }])}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
              value={student.gender}
              className="form-control"
              name="gender"
              required
              onChange={(e) => setData([{ ...data[0], gender: e.target.value }])}
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="form-group my-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              value={student.age}
              type="number"
              className="form-control"
              name="age"
              required
              onChange={(e) => setData([{ ...data[0], age: e.target.value }])}
            />
          </div>
          <div className="form-group my-3 text-center">
            <button type="submit" className="btn btn-success w-100">
              Save
            </button>
          </div>
        </form>
      ))}
    </div>
  );
}

export default Edit;
