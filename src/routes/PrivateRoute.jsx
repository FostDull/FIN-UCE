import { Navigate } from "react-router-dom";
import { getToken } from "../utils/jwt";

export default function PrivateRoute({ children }) {
  const token = getToken();
  return token ? children : <Navigate to="/" replace />;
}
