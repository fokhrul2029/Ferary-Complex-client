import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth/useAuth";
import Agreement from "../Agreement/Agreement";
import UserProfile from "../UserProfile/UserProfile";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Loader from "../../../components/Loader/Loader";

function Profile() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isPending, data: apartment } = useQuery({
    queryKey: ["bookedApartment"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bookedApartments/${user.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Profile of {user.displayName}
      </h1>
      <UserProfile user={user} />
      {isPending ? <Loader /> : <Agreement apartment={apartment} />}
    </div>
  );
}

export default Profile;
