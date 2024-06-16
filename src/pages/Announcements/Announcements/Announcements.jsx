import Card from "../Card/Card";
import MakeAnnounce from "../MakeAnnounce/MakeAnnounce";
import useUsersRole from "../../../hooks/useUsersRole/useUsersRole";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import Loader from "../../../components/Loader/Loader";

function Announcements() {
  const usersRole = useUsersRole();

  const axiosPublic = useAxiosPublic();

  const { isPending, data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Announcements Page</h1>

      {isPending ? (
        <Loader />
      ) : (
        announcements?.map((announcement) => (
          <Card key={announcement._id} announcement={announcement} />
        ))
      )}

      {usersRole === "admin" && <MakeAnnounce />}
    </div>
  );
}

export default Announcements;
