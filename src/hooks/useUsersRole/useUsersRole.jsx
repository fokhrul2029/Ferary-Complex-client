import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../useAuth/useAuth";

function useUsersRole() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["usersRole"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/usersRole?email=${user.email}`);
      return res.data;
    },
  });
  if (!isPending) {
    const usersRole = data.role;
    return usersRole;
  }
}

export default useUsersRole;
