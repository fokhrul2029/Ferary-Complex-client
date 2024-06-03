import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="grid justify-center items-center h-screen">
      <div className="flex flex-col gap-8 bg-slate-100 p-10 rounded-lg w-96 text-center">
        <h1 className="text-5xl text-orange-600 font-bold">Oops</h1>
        <p className="text-2xl font-bold">Page not found</p>
        <div className="text-center">
          <Link className="btn btn-accent" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
