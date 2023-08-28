import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { users } = useSelector((state) => state.users);

  if (!users) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
