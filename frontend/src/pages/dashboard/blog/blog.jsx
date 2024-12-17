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

    try {
      const response = await axios.post(
        "http://localhost:4000/api/blogs/add_blog",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Le blog a été ajouté avec succès !");
        setFormData({
          title: "",
          photo: "",
          long_description: "",
        });
        setError(null);
      }
    } catch (err) {
      setError("Une erreur s'est produite lors de l'ajout du blog.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="blog-container">
      <h2>Ajouter un Blog</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="blog-form">
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
        <button type="submit" className="submit-button">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
