/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import { userRoutes } from "../../constants";

const Registration = lazy(
  () => import("../../pages/Registration/Registration")
);
const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);

export const userRouter: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { path: userRoutes.registration.path, element: <Registration /> },
    ],
  },
];
