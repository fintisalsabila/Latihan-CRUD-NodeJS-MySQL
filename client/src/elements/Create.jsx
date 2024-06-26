import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('/add_user', values)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='container vh-100 vw-100 bg-primary text-white'>
            <div className='row'>
                <h3 className='my-4'>Add Student</h3>
                <div className='d-flex justify-content-end mb-3'>
                    <Link to='/' className='btn btn-success'>Home</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group my-3'>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            className='form-control' 
                            required 
                            onChange={(e) => setValues({ ...values, name: e.target.value })} 
                        />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            className='form-control' 
                            required 
                            onChange={(e) => setValues({ ...values, email: e.target.value })} 
                        />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='gender'>Gender</label>
                        <select 
                            name='gender' 
                            className='form-control' 
                            required 
                            onChange={(e) => setValues({ ...values, gender: e.target.value })}>
                            <option value='' disabled selected>Select Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='age'>Age</label>
                        <input 
                            type='number' 
                            name='age' 
                            className='form-control' 
                            required 
                            onChange={(e) => setValues({ ...values, age: e.target.value })} 
                        />
                    </div>
                    <div className='form-group my-3'>
                        <button type='submit' className='btn btn-success'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
