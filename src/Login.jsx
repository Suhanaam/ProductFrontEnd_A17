import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const apiUrl = import.meta.env.VITE_PRODUCTS_API;
  const navigate = useNavigate();

  const checkLogin = (data) => {
    console.log("Form data", data);
    axios.post(`${apiUrl}/users/login`, data)
      .then(response => {
        console.log(response.data);
        onLogin();
         navigate('/products');
      })
      .catch(error => console.log("There is an error", error));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(checkLogin)}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="Enter email"
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              {...register("password", { required: "Password is required", minLength: 6 })}
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Enter password"
            />
            {errors.password && <div className="invalid-feedback">Password must be at least 6 characters.</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
