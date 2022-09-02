import React from 'react'
import { useState } from 'react'
import './Login.css'
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login__form">

        <div className="login__formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="login__formGroup">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Submit</button>

      </div>
    </div>
  )
}

export default Login