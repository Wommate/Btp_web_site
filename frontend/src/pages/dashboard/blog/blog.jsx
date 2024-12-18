import React, { useState } from "react";
import axios from "axios";
import "./blog.css";

function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    photo: "",
    long_description: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/blogs/add_blog",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Le blog a été ajouté avec succès !");
        setError(null);
        setFormData({
          title: "",
          photo: "",
          long_description: "",
        });

        setTimeout(() => {
          setSuccessMessage(null);
        }, 4000);
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de l'ajout du blog.");
      setSuccessMessage(null);

      setTimeout(() => {
        setError(null);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blog-container">
      <h2>Ajouter un Blog</h2>

      <form onSubmit={handleSubmit} className="blog-form">
              {/* Pop-up pour les messages de succès */}
      {successMessage && (
        <div className="popup success-popup">{successMessage}</div>
      )}

      {/* Pop-up pour les messages d'erreur */}
      {error && <div className="popup error-popup">{error}</div>}
      
        <div className="form-group">
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">URL de la photo :</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="long_description">Description :</label>
          <textarea
            id="long_description"
            name="long_description"
            value={formData.long_description}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "En cours..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
