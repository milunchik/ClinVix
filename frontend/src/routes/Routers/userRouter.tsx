/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import Sidebar from "../../layouts/Sidebar/Sidebar";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import Spinner from "../../components/Spinner/Spinner";
import { userRoutes } from "../../constans/routes/userRoutes";

const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Tips = lazy(() => import("../../pages/Tips/Tips"));
const Registration = lazy(
  () => import("../../pages/Registration/Registration")
);
const Departments = lazy(() => import("../../pages/Departments/Departments"));
const Team = lazy(() => import("../../pages/Team/Team"));
const Specialist = lazy(() => import("../../pages/Specialist/Specialist"));
const ErrorFallback = lazy(
  () => import("../../pages/ErrorFallback/ErrorFallback")
);

export const userRouter: RouteObject[] = [
  {
    path: userRoutes.home.path,
    element: (
      <div>
        <Sidebar>
          <Header>
            <span style={{ justifySelf: "end" }}>Button</span>
          </Header>
          <Sidebar.Menu />
        </Sidebar>
        <Wrapper>
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        </Wrapper>
      </div>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      { path: userRoutes.about.path, element: <About /> },
      { path: userRoutes.tips.path, element: <Tips /> },
      { path: userRoutes.registration.path, element: <Registration /> },
      { path: userRoutes.departments.path, element: <Departments /> },
      { path: userRoutes.team.path, element: <Team /> },
      { path: userRoutes.teamMember.path, element: <Specialist /> },
    ],
  },
];
