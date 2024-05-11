import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <div className="login-box">
        <h2>Login</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required="" />
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required="" />
                <label>Password</label>
              </div>
              {/* <a to={"/"}  className='me-5'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Войти
            </a> */}

            <Link to={"/register"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
            </Link>
        </form>
    </div>
    </>
  )
}

export default Login