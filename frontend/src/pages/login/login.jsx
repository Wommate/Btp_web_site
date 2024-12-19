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
        localStorage.setItem("token", response.data.token);
        setSuccessMessage("Connexion réussie !");
        setError(null);
      }
    } catch (err) {
      const message = err.response?.data?.message || "Erreur inconnue.";
      setError(message);
      setSuccessMessage(null);
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
      </form>
    </div>
  );
}

export default LoginForm;
