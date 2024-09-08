import { createBrowserRouter } from "react-router-dom";

import { guestRouter } from "./Routers/guestRouter";
import NotFound from "../pages/NotFound/NotFound";
import { userRouter } from "./Routers/userRouter";
import { adminRouter } from "./Routers/adminRouter";
import { doctorRouter } from "./Routers/doctorRouter";

const router = createBrowserRouter([
  ...adminRouter,
  ...doctorRouter,
  ...userRouter,
  ...guestRouter,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
