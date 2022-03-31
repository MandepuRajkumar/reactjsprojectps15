import React from "react";
import PizzaLeft from "../assets/contact.jfif";
import "../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="rightSide">
          <center>
        <h1>Log in</h1>
        </center>
        

        <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
        <center>
    <button type="submit">Login</button>
    </center>
    
  </div>

  
        
      </div>
    </div>
  );
}

export default Login;
