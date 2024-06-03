/* eslint-disable react/prop-types */
function Card({ apartment }) {
  const { image, apartment_no, block_name, floor_no, rent } = apartment;
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
          <button className="btn btn-primary">Agreement</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
