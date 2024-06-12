import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth/useAuth";

function SocialLogin() {
  const { googleSignIn } = useAuth();

  const handleSignIn = (provider) => {
    provider()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <fieldset className="border rounded-md">
      <legend className="text-center">Continue with</legend>
      <div className="flex gap-2 justify-center items-center w-full p-4">
        <div className="flex gap-2 items-center border   cursor-pointer hover:text-red-600 font-bold w-full rounded-md justify-center text-center text-orange-500 border-orange-400 active:bg-orange-50">
          <div
            onClick={() => handleSignIn(googleSignIn)}
            className="flex gap-2 items-center py-4"
          >
            <FaGoogle />
            <p>Google</p>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default SocialLogin;
