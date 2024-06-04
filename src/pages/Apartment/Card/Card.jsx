/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";

function Card({ apartment }) {
  const { _id, image, apartment_no, block_name, floor_no, rent } = apartment;

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAgreement = (id) => {
    if (!user) return navigate("/login");

    if (user) {
      const apartmentInfo = {
        userInfo: {
          name: user.displayName,
          email: user.email,
        },
        apartment_id: id,
      };

      console.log(apartmentInfo);
    }
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Apartment" className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Apartment No: {apartment_no}</h2>
        <p>Block: {block_name}</p>
        <p>Floor: {floor_no}</p>
        <p>Rent: ${rent}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAgreement(_id)}
            className="btn btn-primary"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
