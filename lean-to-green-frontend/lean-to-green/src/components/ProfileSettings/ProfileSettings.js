import React from 'react'
import './ProfileSettings.css'

function Profile() {
  return (
    <html>
      <title>HTML Tutorial</title>
      <div class="center">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
    </html>
  )
}

export default Profile
