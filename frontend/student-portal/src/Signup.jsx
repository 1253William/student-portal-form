import  React, { useState } from 'react';
import '../src/App.css';
import Time from './Time';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    ///function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err));
        navigate('/login');
    }
      
    return (
        <>     
    <div className="container vh-100 d-flex">
      <div className="row justify-content-center rounded p-3">
        <div className="col-md-12">
                 <h5 className='text-white'>
                  <Time/>Please Sign Up
                 </h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name:</label>
                        <input type="text" placeholder='Enter Full Name' className="form-control" name='userName'
                         id="exampleInputEmail1" aria-describedby="emailHelp"
                         onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email:</label>
                        <input type="email" placeholder='Enter Your Email' className="form-control" name='email' 
                        id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Password:</label>
                        <input type="password" placeholder='Enter Your Password' className="form-control" name='password'
                         id="exampleInputEmail1" aria-describedby="emailHelp"
                         onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 pb-2'>Sign Up</button>
                    <p>Already having an account?</p>
                 </form>
                 <Link to="/login" className='btn btn-default bg-light w-100 pb-2'>
                    Log In
                 </Link>
        </div>
      </div>
    </div>
        </>
    )
};

export default SignUp;