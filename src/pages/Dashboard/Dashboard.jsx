import useAuth from "../../hooks/useAuth/useAuth";
import Card from "./Card";
import useUsersRole from "../../hooks/useUsersRole/useUsersRole";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const usersRole = useUsersRole();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Hello, {user.displayName}
      </h1>
      <div className="pb-10">
        <Link to="/" className="btn btn-primary link px-10 font-bold">
          Click here to go to Home Page
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card
          title="My Profile"
          content="See your Profile"
          to="/dashboard/profile"
        />
        {usersRole === "admin" && (
          <Card
            title="Manage Member"
            content="Manage your users efficiently."
            to="/dashboard/manage-member"
          />
        )}
        <Card
          title={usersRole === "admin" ? "Make Announcement" : "Announcement"}
          content="See The Announcements page"
          to="/dashboard/announcements"
        />

        {usersRole === "member" && (
          <>
            <Card
              title="Payment History"
              content="See The Payment History"
              to="/dashboard/payment-history"
            />
            <Card
              title="Make Payment"
              content="Make a Payment"
              to="/dashboard/make-payment"
            />
          </>
        )}

        {usersRole === "admin" && (
          <>
            <Card
              title="Agreement Request"
              content="Agreement Request"
              to="/dashboard/agreement-request"
            />
            <Card
              title="Manage Coupons"
              content="Manage the all of coupons"
              to="/dashboard/coupons"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
