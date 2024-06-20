import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
function Card() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full relative">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-white animate-exclamation"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01M12 7a4.5 4.5 0 00-4.5 4.5v.5a4.5 4.5 0 009 0v-.5A4.5 4.5 0 0012 7z"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-8">
            Your payment could not be processed. Please try again or contact
            support if the issue persists.
          </p>
          <Link
            to="/dashboard/make-payment"
            className="bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Retry Payment
          </Link>
        </div>
      </div>
      <style jsx>{`
        .animate-exclamation {
          animation: exclamation 0.5s ease-in-out;
        }
        @keyframes exclamation {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Card;
