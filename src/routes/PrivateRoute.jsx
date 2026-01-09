import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");

  // No autentication
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Autentication
  return <Outlet />;
}
