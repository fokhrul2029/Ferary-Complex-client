import useAuth from "../../hooks/useAuth/useAuth";
import Card from "./Card";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Hello, {user.displayName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card
          title="My Profile"
          content="See your Profile"
          to="/dashboard/profile"
        />
        <Card
          title="Announcements"
          content="See The Announcements page"
          to="/dashboard/announcements"
        />
        <Card
          title="Manage Member"
          content="Manage your users efficiently."
          to="/dashboard/manage-member"
        />
        <Card
          title="Manage Coupons"
          content="Manage the all of coupons"
          to="/dashboard/coupons"
        />
      </div>
    </div>
  );
}

export default Dashboard;
