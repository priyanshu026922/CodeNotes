import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
};
