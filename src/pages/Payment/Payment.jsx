import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

function Payment() {
  const location = useLocation();
  const { userInfo, month, floor_no, block_name, apartment_no, rent } =
    location.state;

  const axiosPublic = useAxiosPublic();
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [apartmentRent, setApartmentRent] = useState(rent);

  const { isPending, data } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosPublic.get("/coupons");
      return res.data;
    },
  });

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setMessage("");
    setDiscount(0); // Reset discount

    const couponData = data?.find(
      (newCoupon) => coupon.toLowerCase() === newCoupon.code.toLowerCase()
    );

    if (couponData) {
      const calculateDiscount = rent - (rent * couponData.discount) / 100;
      setApartmentRent(calculateDiscount);
      setDiscount(couponData.discount);
      setMessage(
        `Coupon applied! You received a ${couponData.discount}% discount.`
      );
    } else {
      setMessage("Invalid coupon code. Please try again.");
    }
  };

  // here are payment processing code 
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStatus("");

    try {
      // Simulate payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate a successful payment
      setPaymentStatus("Payment successful!");
    } catch (error) {
      setPaymentStatus("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!location.state) return <Navigate to="/dashboard" />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 lg:mb-4">Payment page</h1>
      <div className="flex items-center justify-center bg-gray-100 py-10">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Payment Process
          </h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Email:</span>
              <span>{userInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Floor:</span>
              <span>{floor_no}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Block Name:</span>
              <span>{block_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Apartment No:</span>
              <span>{apartment_no}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Month:</span>
              <span>{month}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Rent:</span>
              <span>${apartmentRent.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-500">
                <span className="font-semibold">Discount:</span>
                <span>{discount}%</span>
              </div>
            )}
            <div className="mt-4">
              <label className="block mb-2 font-semibold">Coupon Code:</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
            </div>
            <button
              onClick={handleApplyCoupon}
              className="btn btn-primary w-full mt-4"
            >
              {isPending ? "Pending..." : "Apply Coupon"}
            </button>
            {message && (
              <p
                className={`mt-4 ${
                  discount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
            {/* Add your payment processing form or component here */}

            <div className="py-10 border">
              <div className="mt-6">
                <button
                  onClick={handlePayment}
                  className="btn btn-primary w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Pay $${apartmentRent.toFixed(2)}`}
                </button>
                {paymentStatus && (
                  <p
                    className={`mt-4 ${
                      paymentStatus.includes("successful")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {paymentStatus}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
