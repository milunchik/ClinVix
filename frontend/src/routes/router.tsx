/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { guestRouter } from "./Routers/guestRouter";
import { userRouter } from "./Routers/userRouter";
import { adminRouter } from "./Routers/adminRouter";
import { doctorRouter } from "./Routers/doctorRouter";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import AppLayout from "../layouts/AppLayout/AppLayout";
import { commonRoutes } from "../constants";

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const ErrorFallback = lazy(
  () => import("../pages/ErrorFallback/ErrorFallback")
);
const About = lazy(() => import("../pages/About/About"));
const Departments = lazy(() => import("../pages/Departments/Departments"));
const Team = lazy(() => import("../pages/Team/Team"));
const Tips = lazy(() => import("../pages/Tips/Tips"));
const Specialist = lazy(() => import("../pages/Specialist/Specialist"));

const router = createBrowserRouter([
  {
    path: commonRoutes.home.path,
    element: <HomeLayout />,
    errorElement: <ErrorFallback />,
  },
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { path: commonRoutes.about.path, element: <About /> },
      { path: commonRoutes.departments.path, element: <Departments /> },
      { path: commonRoutes.team.path, element: <Team /> },
      { path: commonRoutes.tips.path, element: <Tips /> },
      { path: commonRoutes.teamMember.path, element: <Specialist /> },
    ],
  },
  ...guestRouter,
  ...userRouter,
  ...doctorRouter,
  ...adminRouter,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
