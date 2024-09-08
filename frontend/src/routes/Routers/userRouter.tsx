import { RouteObject } from "react-router-dom";

import Sidebar from "../../layouts/Sidebar/Sidebar";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import AppLayout from "../../layouts/AppLayout/AppLayout";
import Home from "../../pages/Home/Home";
import ErrorFallback from "../../pages/ErrorFallback/ErrorFallback";
import About from "../../pages/About/About";
import Tips from "../../pages/Tips/Tips";
import Registration from "../../pages/Registration/Registration";
import Departments from "../../pages/Departments/Departments";
import Team from "../../pages/Team/Team";
import Specialist from "../../pages/Specialist/Specialist";
import { userRoutes } from "../../constans/routes/userRoutes";

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
          <Home />
        </Wrapper>
      </div>
    ),
    errorElement: <ErrorFallback />,
  },
  {
    element: <AppLayout />,
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
