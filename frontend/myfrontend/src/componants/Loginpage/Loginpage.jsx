

import './Loginpage.css';
import validator from "validator";
import { useState } from 'react';

function Loginpage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let messages = [];

    if (!validator.isEmail(email)) {
      messages.push("Invalid email, try again");
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      messages.push(
        "Password insecure, choose a stronger password: 8 characters including 1 number"
      );
    }

    if (messages.length > 0) {
      setMessage(messages.join(" & "));
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        onLoginSuccess();
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.log(err);
      setMessage("Server error");
    }
  };

  return (
    <div className='parentDiv'>
      <div className='login'>
        <h1>Log In</h1>

        <p className='empasstxt'>Email</p>
        <input
          className='enterinfo'
          type="text"
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className='empasstxt'>Password</p>
        <input
          className='enterinfo'
          type="password"
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id='loginbtn' onClick={handleSubmit}>Submit</button>

        {message && <p style={{ color: "red" }}>{message}</p>}
      </div>
    </div>
  );
}

export default Loginpage;
