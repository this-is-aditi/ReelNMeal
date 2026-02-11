import React from 'react'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        '/api/auth/user/register',
        { fullName: name, email, password },
        { withCredentials: true }
      );
      console.log('Register response:', res.data);
    } catch (err) {
      console.error('Register error:', err.response?.data || err.message);

    }
    navigate("/")
  };
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create an account</h2>
          <p>Register as a user to order delicious meals.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" placeholder="Full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Create password" />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="btn btn-primary">Create account</button>
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


// const UserRegister = () => {

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/auth/user/register",
//         { name, email, password }
//       );

//       console.log(res.data);
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <form onSubmit={handleSubmit}>

//           <input name="name" type="text" placeholder="Full name" />
//           <input name="email" type="email" placeholder="you@example.com" />
//           <input name="password" type="password" placeholder="Create password" />

//           <button type="submit">Create account</button>

//         </form>
//       </div>
//     </div>
//   );
// }
// export default UserRegister
