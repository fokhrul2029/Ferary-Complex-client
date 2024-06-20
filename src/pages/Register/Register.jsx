import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/Loader";

function Register() {
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { createUser, updateUserProfile, loading, user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  if (loading) return <Loader />;
  if (user) return navigate("/");

  const handleRegisterForm = (e) => {
    e.preventDefault();

    createUser(email, password)
      .then((res) => {
        axiosPublic.post("/users", { name, email }).then((res) => {
          Swal.fire({
            title: `${res.data.message}`,
            icon: "success",
          });
        });
        updateUserProfile(name, photo);
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later.",
          icon: "warning",
        });
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
        <form onSubmit={handleRegisterForm} className="card-body">
          <h1 className="font-bold text-center text-3xl">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center">
            I have an account{" "}
            <Link to="/login" className="text-blue-600">
              Login Now
            </Link>
          </p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
}

export default Register;
