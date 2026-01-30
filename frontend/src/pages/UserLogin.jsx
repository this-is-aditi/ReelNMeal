import React from 'react'
import '../styles/auth.css'

const UserLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome back</h2>
          <p>Sign in to continue to your account.</p>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Your password" />
            </div>
          </div>

          <div className="actions">
            <button type="button" className="btn btn-primary">Sign in</button>
            <a className="muted-link" href="/user/register">Create an account</a>
          </div>
          <div className="auth-switch">
            <a href="/user/register">Register as a normal user</a>
            <a href="/food-partner/register">Register as a food-partner</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
