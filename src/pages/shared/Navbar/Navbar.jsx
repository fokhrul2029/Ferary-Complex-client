import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import Logo from "../../../components/Logo/Logo";
import Swal from "sweetalert2";

function Navbar() {
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Logout success.",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "something went wrong! try later.",
          icon: "warning",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartment">Apartment</NavLink>
      </li>
    </>
  );

  const endNav = user ? (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt={user.displayName} src={user.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="hover:bg-transparent">
            <span>{user.displayName}</span>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <NavLink to="/login" className="btn">
      Login
    </NavLink>
  );

  return (
    <div className="bg-base-300">
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
            >
              {links}
            </ul>
          </div>
          <Logo title="Ferary Complex" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 z-10">{links}</ul>
        </div>
        <div className="navbar-end">{loading ? "Loading..." : endNav}</div>
      </div>
    </div>
  );
}

export default Navbar;
