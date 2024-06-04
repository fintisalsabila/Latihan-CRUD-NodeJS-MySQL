import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import background from './img/background.png';

function Home() {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        if (deleted) {
            setDeleted(false);
            axios.get('/students')
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => console.error(err));
        }
    }, [deleted]);

    function handleDelete(id) {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete(`/delete/${id}`)
                .then(() => {
                    setDeleted(true);
                })
                .catch((err) => console.error(err));
        }
    }

    return (
        <div 
            className="container-fluid d-flex flex-column vh-100 vw-100 text-white"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="my-4">
                <h3 className="text-center">User List</h3>
                <div className="d-flex justify-content-end mb-3">
                    <Link className="btn btn-success" to="/create">Add User</Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-striped table-bordered bg-white text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>
                                    <Link className="btn btn-info mx-2" to={`/read/${student.id}`}>Read</Link>
                                    <Link className="btn btn-warning mx-2" to={`/edit/${student.id}`}>Edit</Link>
                                    <button onClick={() => handleDelete(student.id)} className="btn btn-danger mx-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
