import React from "react";
// import "../src/components/Style.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Routes, Route, Link} from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputIcon from '@mui/icons-material/Input';


const App=()=>{
  return( <>

<nav>
    <ul>
    
        <li className="nav-todo"> <Link to="/signup"> <HowToRegIcon/> SignUp </Link></li>
        <li className="nav-todo"> <Link to="/"><InputIcon/> Login </Link> </li>

    </ul>
  </nav>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
      </>
  )
}
export default App;