import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "/data",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
