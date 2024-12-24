import React, { useEffect } from "react";
import "./login.css";

function ProtectionRoutes() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.pathname = "/login"; 
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="notfound">
      <h1>404</h1>
      <p>Page non trouvée. Vous serez redirigé...</p>
    </div>
  );
}

export default ProtectionRoutes;
