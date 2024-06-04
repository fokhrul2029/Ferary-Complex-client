/* eslint-disable react/prop-types */
function Card({ handleRemove }) {
  return (
    <div className="shadow-md rounded-lg border p-4 flex justify-between items-center my-2">
      <div>
        <h3 className="text-lg font-medium">John Doe</h3>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>
      <button
        className="btn btn-sm btn-error disabled"
        onClick={() => handleRemove("Hello World")}
      >
        Remove
      </button>
    </div>
  );
}

export default Card;
