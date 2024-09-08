import { RouteObject } from "react-router-dom";

import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import ErrorFallback from "../../pages/ErrorFallback/ErrorFallback";
import { guestRoutes } from "../../constans/routes/guestRoutes";

export const guestRouter: RouteObject[] = [
  {
    path: guestRoutes.signIn.path,
    element: <SignIn />,
    errorElement: <ErrorFallback />,
  },
  {
    path: guestRoutes.signUp.path,
    element: <SignUp />,
    errorElement: <ErrorFallback />,
  },
];
