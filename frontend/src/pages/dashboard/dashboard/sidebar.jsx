import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { FaBlog, FaPhotoVideo, FaUserPlus, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/img/ETEP.png" alt="Logo" className="logo" />
      </div>
      <ul>
        <li>
          <Link to="/dashboard/blog">
            <FaBlog className="icon" />
            <span>Ajouter Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/gallery">
            <FaPhotoVideo className="icon" />
            <span>Ajouter Gallery</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/register">
            <FaUserPlus className="icon" />
            <span>Ajouter utilisateur</span>
          </Link>
        </li>
      </ul>
      <hr className="separator" />
      <ul>
        <li>
          <Link to="/logout" className="logout">
            <FaSignOutAlt className="icon" />
            <span>Déconnexion</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
