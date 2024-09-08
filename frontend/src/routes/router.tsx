import { createBrowserRouter } from "react-router-dom";

import ErrorFallback from "../pages/ErrorFallback/ErrorFallback";
import NotFound from "../pages/NotFound/NotFound";
import { guestRouter } from "./Routers/guestRouter";
import { userRouter } from "./Routers/userRouter";
import { adminRouter } from "./Routers/adminRouter";
import { doctorRouter } from "./Routers/doctorRouter";
import UserProtectedRoute from "./ProtectedRoutes/userProtectedRoute";

const router = createBrowserRouter([
  ...guestRouter,
  {
    element: <UserProtectedRoute />,
    errorElement: <ErrorFallback />,
    children: [...adminRouter, ...doctorRouter, ...userRouter],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
