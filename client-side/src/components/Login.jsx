import React from 'react';
import '../styles/login.css';
import '../styles/sign.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  //hooks use
  const navigate = useNavigate();
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="mainBox">
          <div className="backButton">
            <button className="back" onClick={() => navigate("/")}>X</button>
          </div>
          <div className="formBox">
            <div className="formHeading">Welcome Back</div>
            <div className="inputMain">
              <input type="email" className='inputBox' placeholder='Email' />
              <input type="password" className='inputBox' placeholder='Password' />
            </div>
            <div className="regButton">
              <button className="btn">Log in</button>
              <p>Don't have an account? <a href='sign' onClick={() => navigate('/sign')}>Register</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;