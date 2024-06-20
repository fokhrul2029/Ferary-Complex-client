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
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory/PaymentHistory";
import MakePayment from "../pages/MakePayment/MakePayment";
import Payment from "../pages/Payment/Payment";
import AgreementRequest from "../pages/AgreementRequest/AgreementRequest/AgreementRequest";
import SuccessPayment from "../pages/SuccessPayment/SuccessPayment";
import FailPayment from "../pages/FailPayment/FailPayment";
import CancelPayment from "../pages/CancelPayment/CancelPayment";
import MembersRoute from "./MembersRoute";
import AdminRoute from "./AdminRoute";

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
            <AdminRoute>
              <ManageMember />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/coupons",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Coupon />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <PaymentHistory />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/make-payment",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <MakePayment />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <Payment />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/agreement-request",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AgreementRequest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/success-payment",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <SuccessPayment />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/fail-payment",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <FailPayment />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/cancel-payment",
        element: (
          <PrivateRoute>
            <MembersRoute>
              <CancelPayment />
            </MembersRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
