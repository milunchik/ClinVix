import { RouteObject } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout/AppLayout";
import ErrorFallback from "../../pages/ErrorFallback/ErrorFallback";
import Timetable from "../../pages/Timetable/Timetable";
import { adminRoutes } from "../../constans/routes/AdminRoutes";

export const adminRouter: RouteObject[] = [
  {
    element: <AppLayout hasFooter={false} />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: adminRoutes.timetable.path,
        element: <Timetable />,
      },
    ],
  },
];
