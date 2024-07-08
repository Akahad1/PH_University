import { ReactNode } from "react";
import { useCurrentToken } from "../../redux/Features/auth/AuthSlice";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";

const ProtectorRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectorRoute;
