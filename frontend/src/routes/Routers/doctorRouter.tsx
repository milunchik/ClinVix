/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import DoctorProtectedRoute from "../ProtectedRoutes/DoctorProtectedRoute";
import { doctorRoutes } from "../../constans/routes/doctorRoutes";

const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);
const Profile = lazy(() => import("../../pages/Profile/Profile"));

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
