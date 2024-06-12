import axios from "axios";
import useAuth from "../useAuth/useAuth";

const axiosSecure = axios.create({
  // https://b9-battle-for-supremacy-server-flame.vercel.app
  // http://localhost:3000

  baseURL: "http://localhost:3000",
});
function useAxiosSecure() {
  const { user } = useAuth();

  if (user) return axiosSecure;
}

export default useAxiosSecure;
