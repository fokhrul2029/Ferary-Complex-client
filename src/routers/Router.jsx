import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Apartment from "../pages/Apartment/Apartment/Apartment";
import ControlPanel from "../layout/ControlPanel/ControlPanel";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile/Profile";
import Announcements from "../pages/Announcements/Announcements/Announcements";
import ManageMember from "../pages/ManageMember/ManageMember/ManageMember";
import Coupon from "../pages/Coupon/Coupon/Coupon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ControlPanel />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/announcements",
        element: (
          <PrivateRoute>
            <Announcements />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manage-member",
        element: (
          <PrivateRoute>
            <ManageMember />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/coupons",
        element: (
          <PrivateRoute>
            <Coupon />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
