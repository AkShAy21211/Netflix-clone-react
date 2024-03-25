import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

function SignUpPage({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Corrected variable name


  const handleRegister = (e) => {

    e.preventDefault()
    if(email && password){
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    setUser(user);
    navigate("/")
    }else{
      alert("Enter email and password")
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg')`,
          height:"100vh"

        }}
      >
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form noValidate  className="signup-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Pass a function to onClick */}
            <button type='submit' onClick={handleRegister}>Sign Up</button>
          </form>
          <div className='existing'>
            <p>Already have an account? <b><a href="#">SignIn</a></b> </p>
            <p>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <small>Learn more.</small></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
