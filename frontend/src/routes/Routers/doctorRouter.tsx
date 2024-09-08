import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import ErrorFallback from "../../pages/ErrorFallback/ErrorFallback";
import Profile from "../../pages/Profile/Profile";
import DoctorProtectedRoute from "../ProtectedRoutes/DoctorProtectedRoute";
import { doctorRoutes } from "../../constans/routes/doctorRoutes";

export const doctorRouter: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <DoctorProtectedRoute />,
        children: [{ path: doctorRoutes.profile.path, element: <Profile /> }],
      },
    ],
  },
];
