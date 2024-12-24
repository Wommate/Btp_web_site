import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Supprime les données de l'utilisateur token
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    
    // Redirige vers la page home
    navigate("/");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} id="notfound">
      <h2>Déconnexion en cours...</h2>
      <p>Vous allez être redirigé vers la page de connexion.</p>
    </div>
  );
};

export default Logout;
