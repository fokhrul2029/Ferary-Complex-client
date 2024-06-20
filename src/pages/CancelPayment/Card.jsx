import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
function Card() {
    return ( 
        <div className="flex items-center justify-center pt-20">
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full relative">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-white animate-cross" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Payment Cancelled</h2>
            <p className="text-gray-600 mb-8">Your payment has been cancelled. If you have any questions, please contact support.</p>
            <Link to="/dashboard" className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
              Go Back
            </Link>
          </div>
        </div>
        <style jsx>{`
          .animate-cross {
            animation: cross 0.5s ease-in-out;
          }
          @keyframes cross {
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