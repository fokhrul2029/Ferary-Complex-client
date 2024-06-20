import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../hooks/useAuth/useAuth";
import Loader from "../../../components/Loader/Loader";

function PaymentHistory() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: "paymentHistory",
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment-history?email=${user.email}`);
      return res.data;
    },
  });

  // console.log(data);

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
            {isPending ? (
              <Loader />
            ) : data.length > 0 ? (
              data?.map((payment) => (
                <Card key={payment._id} payment={payment} />
              ))
            ) : (
              <tr className="">
                <td
                  colSpan={4}
                  className="font-medium  text-3xl text-center text-red-600 py-4 !w-full"
                >
                  {data.message}
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
