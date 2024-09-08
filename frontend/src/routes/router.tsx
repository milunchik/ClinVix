/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { guestRouter } from "./Routers/guestRouter";
import { userRouter } from "./Routers/userRouter";
import { adminRouter } from "./Routers/adminRouter";
import { doctorRouter } from "./Routers/doctorRouter";
import UserProtectedRoute from "./ProtectedRoutes/UserProtectedRoute";

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const ErrorFallback = lazy(
  () => import("../pages/ErrorFallback/ErrorFallback")
);

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
