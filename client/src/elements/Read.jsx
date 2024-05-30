import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import background from './img/background.png';

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div 
      className="container-fluid vw-100 vh-100 text-white d-flex flex-column align-items-center pt-5" 
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <div className="card bg-light text-dark w-50">
        <div className="card-header">
          <h1 className="card-title">User {id}</h1>
        </div>
        <div className="card-body">
          {data.map((student) => (
            <ul className="list-group list-group-flush" key={student.id}>
              <li className="list-group-item">
                <b>ID: </b>
                {student.id}
              </li>
              <li className="list-group-item">
                <b>Name: </b>
                {student.name}
              </li>
              <li className="list-group-item">
                <b>Email: </b>
                {student.email}
              </li>
              <li className="list-group-item">
                <b>Age: </b>
                {student.age}
              </li>
              <li className="list-group-item">
                <b>Gender: </b>
                {student.gender}
              </li>
            </ul>
          ))}
        </div>
        <div className="card-footer">
          <Link to="/" className="btn btn-success w-100">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
