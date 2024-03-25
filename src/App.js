import './App.css';
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes component
import SignUpPage from './pages/SignUp';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <Router>
      <Routes> {/* Wrap Route components in a Routes component */}
        <Route exact path="/" element={<Home user={user} setUser={setUser} />} /> {/* Use 'element' prop to specify the component */}
        <Route path="/signup" element={user?<Home/>:<SignUpPage setUser={setUser} />} />
        <Route path="/signin" element={user?<Home/>:<SignIn setUser={setUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
