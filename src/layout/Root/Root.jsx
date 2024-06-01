import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import Footer from "../../pages/shared/Footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
