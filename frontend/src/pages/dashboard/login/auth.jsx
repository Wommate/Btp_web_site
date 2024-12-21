import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        setUser({}); 
      } else {
        setUser(null); 
      }
    }, 100);
  }, []);

  if (user === undefined) {
    return null; 
  }

  if (!user) {
    return <Navigate to="/" />; 
  }

  return <>{children}</>;
};

export default AuthWrapper;
