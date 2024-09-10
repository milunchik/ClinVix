/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import RoleProtectedRoute from "../ProtectedRoutes/RoleProtectedRoute";
import { adminRoutes } from "../../constants";

const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);
const Timetable = lazy(() => import("../../pages/Timetable/Timetable"));

export const adminRouter: RouteObject[] = [
  {
    element: <AppLayout hasFooter={false} />,
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <RoleProtectedRoute currentRole="admin" redirectPath="/" />,
        children: [
          {
            path: adminRoutes.timetable.path,
            element: <Timetable />,
          },
        ],
      },
    ],
  },
];
