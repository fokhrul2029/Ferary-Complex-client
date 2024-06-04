import useAuth from "../../../hooks/useAuth/useAuth";
import UserProfile from "../UserProfile/UserProfile";

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">
        Profile of {user.displayName}
      </h1>
      <UserProfile user={user} />
    </div>
  );
}

export default Profile;
