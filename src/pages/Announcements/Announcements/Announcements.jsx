import Card from "../Card/Card";
import MakeAnnounce from "../MakeAnnounce/MakeAnnounce";
import useUsersRole from "../../../hooks/useUsersRole/useUsersRole";

function Announcements() {
  const usersRole = useUsersRole();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Announcements Page</h1>

      <Card />

      {usersRole === "admin" && <MakeAnnounce />}
    </div>
  );
}

export default Announcements;
