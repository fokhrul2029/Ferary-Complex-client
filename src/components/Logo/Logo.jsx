/* eslint-disable react/prop-types */
import img from "../../assets/logo.png";

function Logo({ title }) {
  return (
    <div className="flex items-center">
      <img className="w-20" src={img} alt="" />
      <p className="text-2xl font-semibold italic">{title || ""}</p>
    </div>
  );
}

export default Logo;
