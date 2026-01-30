import React from 'react'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create an account</h2>
          <p>Register as a user to order delicious meals.</p>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>
          </div>

          <div className="actions">
            <button type="button" className="btn btn-primary">Create account</button>
            <a className="muted-link" href="/user/login">Already have an account?</a>
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

export default UserRegister
