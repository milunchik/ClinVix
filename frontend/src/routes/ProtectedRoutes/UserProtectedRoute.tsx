import { Navigate, Outlet } from "react-router-dom";

import { guestRoutes } from "../../constans/routes/guestRoutes";

const UserProtectedRoute = () => {
  // temp
  const isAuth = true;
  //

  if (!isAuth) return <Navigate to={guestRoutes.signIn.path} />;

  return <Outlet />;
};

export default UserProtectedRoute;
