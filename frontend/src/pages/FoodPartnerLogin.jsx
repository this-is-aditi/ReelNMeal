import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerLogin = () => {
    const navigate=useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        try {
          const res = await axios.post(
            '/api/auth/food-partner/login',
            {  email, password },
            { withCredentials: true }
          );
          console.log('Register response:', res.data);
        } catch (err) {
          
           console.error(err.response?.data || err.message);

        }
        navigate("/create-food")
      };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Partner sign in</h2>
          <p>Sign in to manage your restaurant and orders.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="contact@restaurant.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Your password" />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">Sign in</button>
            <a className="muted-link" href="/food-partner/register">Create an account</a>
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

export default FoodPartnerLogin
