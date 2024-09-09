/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner";
import { guestRoutes } from "../../constants";
import AuthProtectedRoute from "../ProtectedRoutes/AuthProtectedRoute";

const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp/SignUp"));
const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);

export const guestRouter: RouteObject[] = [
  {
    element: <AuthProtectedRoute />,
    children: [
      {
        path: guestRoutes.signIn.path,
        element: (
          <Suspense
            fallback={
              <div className="container">
                <Spinner />
              </div>
            }
          >
            <SignIn />
          </Suspense>
        ),
        errorElement: <ErrorFallback />,
      },
      {
        path: guestRoutes.signUp.path,
        element: (
          <Suspense
            fallback={
              <div className="container">
                <Spinner />
              </div>
            }
          >
            <SignUp />
          </Suspense>
        ),
        errorElement: <ErrorFallback />,
      },
    ],
  },
];
