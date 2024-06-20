/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full relative">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-white animate-checkmark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m1-4a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Payment Successful
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
      <style jsx>{`
        .animate-checkmark {
          animation: checkmark 0.5s ease-in-out;
        }
        @keyframes checkmark {
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
