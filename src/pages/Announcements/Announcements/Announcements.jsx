import Card from "../Card/Card";

function Announcements() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Announcements Page</h1>

      <Card />
      <Card />
      <Card />

      <div>
        <h1>Make Announcement</h1>
      </div>
    </div>
  );
}

export default Announcements;
