import Card from "../Card/Card";
import MakeAnnounce from "../MakeAnnounce/MakeAnnounce";

function Announcements() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Announcements Page</h1>

      <Card /> 

      <div>
        <MakeAnnounce />
      </div>
    </div>
  );
}

export default Announcements;
