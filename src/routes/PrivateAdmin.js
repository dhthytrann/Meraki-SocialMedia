import { Navigate } from "react-router-dom";
import { LOGIN_PAGE } from "../settings/constant";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const PrivateAdmin = ({ children }) => {
  const [isAuth, setAuth] = useContext(AuthContext);
  return isAuth ? children : <Navigate to={LOGIN_PAGE} />;
};

export default PrivateAdmin;
