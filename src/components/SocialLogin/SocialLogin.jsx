import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function SocialLogin() {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignIn = (provider) => {
    provider()
      .then((res) => {
        console.log(res);
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        console.log(userInfo)
        axiosPublic.post("/users", userInfo).then((res) => {
          Swal.fire({
            title: `${res.data.message}`,
            icon: "success",
          });
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Something went wrong. Try later.",
          icon: "warning",
        });
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
