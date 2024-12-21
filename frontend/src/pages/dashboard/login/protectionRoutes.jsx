import React, { useEffect } from "react";
import "./login.css";

function ProtectionRoutes() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.pathname = "/";
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div id="notfound">

    </div>
  );
}

export default ProtectionRoutes;
