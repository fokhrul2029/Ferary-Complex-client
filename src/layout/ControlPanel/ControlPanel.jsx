import { Outlet } from "react-router-dom";
import Navbar2 from "../../pages/shared/Navbar2/Navbar2";

function ControlPanel() {
  return (
    <div className="flex h-20 lg:h-screen bg-gray-100">
      <Navbar2 />
      <div className="flex-1 lg:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default ControlPanel;
