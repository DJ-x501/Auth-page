import React from 'react';
import '../styles/sign.css';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const navigate = useNavigate();
    return (
        <div className='wrapper'>
            <div className="container">
                <div className="mainBox">
                    <div className="backButton">
                        <button className="back" onClick={() => navigate("/")}>X</button>
                    </div>
                    <div className="formBox">
                        <div className="formHeading">Sign In</div>
                        <div className="inputMain">
                            <input type="text" className='inputBox' placeholder='Username'/>
                            <input type="email" className='inputBox' placeholder='Email'/>
                            <input type="password" className='inputBox' placeholder='Password'/>
                        </div>
                        <div className="inputSub">
                            <input type="number" className='age' placeholder='Age'/>
                            <select id="city" name="city" className='city'>
                                <option value="Select">Select City</option>
                                <option value="jaipur">Jaipur</option>
                                <option value="sikar">Sikar</option>
                                <option value="ajmer">Ajmer</option>
                                <option value="udaipur">Udaipur</option>
                                <option value="pune">Pune</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="gurugram">Gurugram</option>
                            </select>

                        </div>
                    </div>
                    <div className="regButton">
                        <button className="btn">Register</button>
                        <p>Already have an account? <a href='login' onClick={()=>navigate('/login')}>Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign;