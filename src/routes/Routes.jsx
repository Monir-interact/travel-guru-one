import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/shared/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/booking",
          element:<Booking></Booking>
        }
    ]
  },
]);

export default router;
