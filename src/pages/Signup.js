import React from "react";
import PizzaLeft from "../assets/contact.jfif";
import "../styles/Login.css";

function Signup() {
  return (
    <div className="signup">
      <div className="rightSide">
          <center>
        <h1>Sign Up</h1>
        </center>
        

        <div class="container">
    
    <label for="uname"><b>Firstname</b></label>
    <input type="text" placeholder="Enter Firstname" name="uname" required />
    <label for="uname"><b>Lastname</b></label>
    <input type="text" placeholder="Enter Lastname" name="uname" required />
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
    <label for="psw"><b>Retype Password</b></label>
    <input type="password" placeholder="Enter Retype-Password" name="psw" required />
        <center>
    <button type="submit">Signup</button>
    </center>
    
  </div>

  
        
      </div>
    </div>
  );
}

export default Signup;
