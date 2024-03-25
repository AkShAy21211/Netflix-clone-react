import React from 'react'
import "./NavBar.css";
import {useNavigate,Link} from "react-router-dom"
function NavBar({user,setUser}) {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    if(user){
    localStorage.removeItem('user');
    setUser(null);
    }
  };

  const handleLogin = () => {

    navigate('/signin');
    
  };
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo'/>
      {user?<Link className='logout' onClick={handleLogout} to="/signin">Logout</Link>:<Link  className='login' onClick={handleLogin} to="/signin">Login</Link>}
    </div>
  )
}

export default NavBar
