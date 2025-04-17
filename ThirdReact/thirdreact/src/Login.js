import React from 'react'

const Login = () => {
  return (
    <div className="login"><h1>Login Page</h1>
    <label >Username</label>
    <input type="text" placeholder="Enter Username"  ></input>
<br/>
    <label>Password</label>
    <input type="password" placeholder="Enter Password"  ></input>
    <br/>
    <button type="submit">Login</button> 
    </div>
  )
}

export default Login