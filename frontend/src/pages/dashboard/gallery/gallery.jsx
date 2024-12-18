import React, { useState } from "react";
import axios from "axios";
import "./gallery.css"; 

function GalleryForm() {
  const [formData, setFormData] = useState({
    title: "",
    files: [],
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Gestion des champs texte
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion des fichiers multiples
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      files,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    formData.files.forEach((file) => {
      data.append("files", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/galleries/add_gallery",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("La galerie a été ajoutée avec succès !");
        setFormData({
          title: "",
          files: [],
        });
        setError(null);
      }
    } catch (err) {
      const message = err.response?.data?.error || "Erreur inconnue.";
      setError(message);
      setSuccessMessage(null);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Ajouter une Galerie</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="gallery-form">
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
          <label htmlFor="files">Images et Vidéos :</label>
          <input
            type="file"
            id="files"
            name="files"
            multiple
            onChange={handleFileChange}
            accept="image/*,video/*"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default GalleryForm;
