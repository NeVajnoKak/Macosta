import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div className="login-box">
            <h2>Register</h2>
            <form>
              <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Username</label>
              </div>
              <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
              </div>
              {/* <a to={"/"}  className='me-5'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
            </a> */}

            <Link to={"/login"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Акк 
            </Link>
            </form>
          </div>
    </>
  )
}

export default Register