import { Navigate, Outlet } from "react-router-dom";

import { commonRoutes } from "../../constants";

const AuthProtectedRoute = () => {
  // temp
  const isAuth = true;
  //

  if (isAuth) return <Navigate to={commonRoutes.home.path} />;

  return <Outlet />;
};

export default AuthProtectedRoute;
