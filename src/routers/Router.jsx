import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
