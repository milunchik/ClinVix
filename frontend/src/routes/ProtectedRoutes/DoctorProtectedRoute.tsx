import { Outlet } from "react-router-dom";

const DoctorProtectedRoute = () => {
  // if (role !== "doctor") return <Navigate to={userRoutes.home.path} />;

  return <Outlet />;
};

export default DoctorProtectedRoute;
