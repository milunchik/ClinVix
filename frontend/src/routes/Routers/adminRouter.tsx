/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import AdminProtectedRoute from "../ProtectedRoutes/AdminProtectedRoute";
import { adminRoutes } from "../../constans/routes/adminRoutes";

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
        element: <AdminProtectedRoute />,
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
