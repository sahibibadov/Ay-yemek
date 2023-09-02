import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

 const PrivateRoute = () => {
  const { users } = useSelector((state) => state.users);

  if (!users) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute