function Coupon() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center">
        <div className="bg-orange-100 p-6 rounded-lg shadow-lg w-full text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Exclusive Coupon</h2>
          <div className="card bg-white shadow-md rounded-lg p-6 border border-orange-200">
            <h3 className="text-2xl font-semibold mb-4">Special Offer</h3>
            <p className="mb-4">
              Enjoy a special discount with our exclusive coupon code!
            </p>
            <div>
              <p className="font-mono text-2xl font-bold bg-orange-200 py-2 px-10 rounded-lg inline-block">
                Fokhrul
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Valid on all purchases*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
