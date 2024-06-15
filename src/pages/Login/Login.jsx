/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Login success.",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "User or password incorrect. Try again.",
          icon: "warning",
        });
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
        <form onSubmit={handleLoginForm} className="card-body">
          <h1 className="font-bold text-center text-3xl">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center">
            i don't have account{" "}
            <Link to="/register" className="text-blue-600">
              Register Now
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
}

export default Login;
