function MakePayment() {
  const memberInfo = {
    email: "johndoe@example.com",
    floor: "3rd",
    blockName: "A",
    apartmentNo: "101",
    rent: "$1000.00",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Make Payment page </h1>

      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 shadow-2xl py-10 px-6 rounded-lg"
        >
          <h2 className="text-3xl font-semibold">Member Information</h2>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2">
              Member Email
            </label>
            <input
              type="text"
              id="email"
              value={memberInfo.email}
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="floor" className="text-sm font-medium mb-2">
              Floor
            </label>
            <input
              type="text"
              id="floor"
              value={memberInfo.floor}
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="blockName" className="text-sm font-medium mb-2">
              Block Name
            </label>
            <input
              type="text"
              id="blockName"
              value={memberInfo.blockName}
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="apartmentNo" className="text-sm font-medium mb-2">
              Apartment No / Room No
            </label>
            <input
              type="text"
              id="apartmentNo"
              value={memberInfo.apartmentNo}
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rent" className="text-sm font-medium mb-2">
              Rent
            </label>
            <input
              type="text"
              id="rent"
              value={memberInfo.rent}
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              readOnly
            />
          </div>
          <h2>Payment Details</h2>
          <div className="flex flex-col">
            <label htmlFor="month" className="text-sm font-medium mb-2">
              Month
            </label>
            <select
              id="month"
              className="shadow-sm rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              {/* Add options for all months */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default MakePayment;
