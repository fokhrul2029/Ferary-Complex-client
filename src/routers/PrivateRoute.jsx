/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  if (user) return children;

  return <Navigate to="/login"></Navigate>;
}

export default PrivateRoute;
