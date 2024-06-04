import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar2() {
  const links = (
    <>
      <li>
        <NavLink to="/" className="flex items-center space-x-3">
          <FaHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaUser />
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaChartBar />
          <span>Manage User</span>
        </a>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaCog />
          <span>Make Announcement</span>
        </a>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaCog />
          <span>Agreement Requests</span>
        </a>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaCog />
          <span>Manage Coupons</span>
        </a>
      </li>
      <li>
        <a className="flex items-center space-x-3">
          <FaSignOutAlt />
          <span>Logout</span>
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className="lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-blue-500 text-white hidden">
        <Link
          to="/dashboard"
          className="flex items-center justify-center h-16 bg-blue-600"
        >
          <span className="text-2xl font-bold">Dashboard</span>
        </Link>
        <div className="flex-1 overflow-y-auto">
          <ul className="menu p-4 space-y-2">{links}</ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between   text-black p-4">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost text-black"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      {/* Main Content */}

      {/* Drawer for Mobile */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side lg:hidden z-10">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-blue-500 text-white space-y-2 h-screen">
          {links}
        </ul>
      </div>
    </>
  );
}

export default Navbar2;
