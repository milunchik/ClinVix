import { Navigate, Outlet } from "react-router-dom";

interface RoleProtectedRouteProps {
  currentRole: string;
  redirectPath: string;
}

const RoleProtectedRoute = ({
  currentRole,
  redirectPath,
}: RoleProtectedRouteProps) => {
  // temp
  const role = "doctor";
  //

  if (role === currentRole) return <Outlet />;

  return <Navigate to={redirectPath} />;
};

export default RoleProtectedRoute;
