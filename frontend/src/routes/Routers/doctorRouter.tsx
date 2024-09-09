/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import RoleProtectedRoute from "../ProtectedRoutes/RoleProtectedRoute";
import { doctorRoutes } from "../../constants";

const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);
const Profile = lazy(() => import("../../pages/Profile/Profile"));
const Timetable = lazy(() => import("../../pages/Timetable/Timetable"));

export const doctorRouter: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <RoleProtectedRoute currentRole="doctor" redirectPath="/" />,
        children: [
          { path: doctorRoutes.profile.path, element: <Profile /> },
          { path: doctorRoutes.timetable.path, element: <Timetable /> },
        ],
      },
    ],
  },
];
