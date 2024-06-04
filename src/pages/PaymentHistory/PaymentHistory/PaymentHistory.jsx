import Card from "../Card/Card";

function PaymentHistory() {
  const paymentData = [
    {
      _id: 1,
      id: 1234,
      amount: 100.0,
      date: "2024-06-01",
      method: "Credit Card",
    },
    {
      _id: 2,
      id: 5678,
      amount: 50.5,
      date: "2024-05-15",
      method: "PayPal",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Payment History page</h1>
      <div>
        <div className="shadow-md rounded-lg overflow-x-auto">
          <table className="w-full min-w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-500 text-white">
                <th className="px-3 py-2">Payment ID</th>
                <th className="px-3 py-2">Amount</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Payment Method</th>
              </tr>
            </thead>
            {paymentData?.map((payment) => (
              <Card key={payment._id} payment={payment} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
