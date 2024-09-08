import { Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  // if (role !== "admin") return <Navigate to={userRoutes.home.path} />;

  return <Outlet />;
};

export default AdminProtectedRoute;
