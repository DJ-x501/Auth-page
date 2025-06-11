import React from 'react';
import { useNavigate } from 'react-router-dom';
//componets
import Sign from './Sign';
import Login from './Login';


const Home = () => {
    //hooks used
    const navigate = useNavigate();
  return (
     <div className='wrapper'>
      <div className="head">
        <div className="heading">Auth Page</div>
        <div className="subHeading">
            This is a simple authentication page to validate users.
        </div>
        <div className="buttons">
            <button className="btn" onClick={()=>navigate("/sign")}>Sign Up</button>
            <button className="btn" onClick={()=>navigate("/login")}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Home