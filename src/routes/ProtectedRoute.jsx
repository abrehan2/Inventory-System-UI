// IMPORTS -
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { logout } from "../redux/actions/userAction";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children, isAdmin, isUser }) => {
  const { user, isAuth } = useSelector((state) => state.USER);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const check = useCallback(
    (role) => {
      dispatch(logout());
      toast.error(`Role: ${role} cant access this resource`);
    },
    [dispatch]
  );

  if (isAuth === false) {
    navigate("/auth", {
      replace: true,
    });
  }

  if (isAdmin === true && user?.role !== "admin") {
    check("user");
  }

  if (isUser === true && user?.role !== "user") {
    check("admin");
  }

  return children;
};

export default ProtectedRoute;
