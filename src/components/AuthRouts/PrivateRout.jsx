import { Navigate } from "react-router-dom";
import { useCustomContext } from "../../services/Context/Context";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const { auth, setAuth } = useCustomContext(false);

  useEffect(() => {
    // const data = http
    setAuth(false);
  }, [setAuth]);

  return auth ? (
    <Navigate to="/main/authorization" replace />
  ) : (
    <Navigate to="/main/accountAdverticer" replace />
  );
};
