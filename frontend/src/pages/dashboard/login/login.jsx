import React, { useState } from "react";
import axios from "axios";
import "./login.css";


function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const MAX_ATTEMPTS = 3;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/api/login", formData);

      if (response.status === 200) {
        // Sauvegarder le token JWT dans le localStorage
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Console log du token
        console.log("Token JWT reçu :", token);

        setSuccessMessage("Connexion réussie !");
        setError(null);
        setLoginAttempts(0);

        // Redirection vers le tableau de bord après un délai
        setTimeout(() => {
          window.location.pathname = "/dashboard";
        }, 2000);
      }
    } catch (err) {
      const message = err.response?.data?.message || "Erreur inconnue.";
      setError(message);
      setSuccessMessage(null);

      // Augmenter le nombre de tentatives en cas d'échec
      setLoginAttempts((prevAttempts) => prevAttempts + 1);

      if (loginAttempts + 1 >= MAX_ATTEMPTS) {
        setError("Vous n'êtes pas autorisé à accéder à cette page.");
        setTimeout(() => {
          window.location.pathname = "/";
        }, 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Connexion</h2>
        {successMessage && <div className="popup success-popup">{successMessage}</div>}
        {error && <div className="popup error-popup">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Chargement..." : "Se connecter"}
        </button>

        {/* Afficher le nombre de tentatives restantes */}
        {loginAttempts > 0 && loginAttempts < MAX_ATTEMPTS && (
          <div className="attempts-info">
            Tentatives restantes : {MAX_ATTEMPTS - loginAttempts}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
