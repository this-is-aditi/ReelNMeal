import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {
   const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        '/api/auth/user/login',
        {  email, password },
        { withCredentials: true }
      );
      console.log('Login response:', res.data);
    } catch (err) {
      console.error('Login error:', err.res?.data || err.message);

    }
    navigate("/")
  };

  return (
    
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome back</h2>
          <p>Sign in to continue to your account.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Your password" />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">Sign in</button>
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
