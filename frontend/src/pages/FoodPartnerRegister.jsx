import React from 'react'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner sign up</h2>
          <p>Register your restaurant to start receiving orders.</p>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Restaurant Name</label>
              <input type="text" placeholder="Name of restaurant" />
            </div>

            <div className="form-group">
              <label>Contact Email</label>
              <input type="email" placeholder="contact@restaurant.com" />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" placeholder="+1 555 555 5555" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                placeholder="Street, city, state, zip"
                rows="3"
                style={{
                  width: '100%',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  background: 'var(--input-bg)',
                  color: 'var(--text)',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>
          </div>

          <div className="actions">
            <button type="button" className="btn btn-primary">Register</button>
            <a className="muted-link" href="/food-partner/login">Already have an account?</a>
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

export default FoodPartnerRegister
