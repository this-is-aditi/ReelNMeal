import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {
    const navigate=useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const address=e.target.address.value;
        const contactNumber=e.target.contactNumber.value;
    
        try {
          const res = await axios.post(
            '/api/auth/food-partner/register',
            { name, email, password,address,contactNumber },
            { withCredentials: true }
          );
          console.log('Register response:', res.data);
        } catch (err) {
          console.error('Register error:', err.response?.data || err.message);
    
        }
        navigate("/create-food")
      };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner sign up</h2>
          <p>Register your restaurant to start receiving orders.</p>
        </div>

        <form onSubmit={handleSubmit 
}>
          <div className="form-row">
            <div className="form-group">
              <label>Restaurant Name</label>
              <input name="name" type="text" placeholder="Name of restaurant" />
            </div>

            <div className="form-group">
              <label>Contact Email</label>
              <input name="email" type="email" placeholder="contact@restaurant.com" />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input name="contactNumber" type="tel" placeholder="+1 555 555 5555" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
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
              <input name="password" type="password" placeholder="Create password" />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">Register</button>
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
