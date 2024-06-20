/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";
import Loader from "../components/Loader/Loader";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { loading, user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: "membersRoles",
    queryFn: async () => {
      const res = await axiosPublic.get(`/usersRole?email=${user.email}`);
      return res.data;
    },
  });

  if (loading) return <Loader />;
  if (isPending) return <Loader />;
  if (data.role === "admin") return children;

  return <Navigate to="/" />;
}

export default AdminRoute;
