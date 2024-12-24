import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/dashboard/blog" activeClassName="active">
            <FaBlog className="icon" />
            <span>Ajouter Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/gallery" activeClassName="active">
            <FaPhotoVideo className="icon" />
            <span>Ajouter Gallery</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/register" activeClassName="active">
            <FaUserPlus className="icon" />
            <span>Ajouter utilisateur</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/profil" activeClassName="active">
            <FaUserPlus className="icon" />
            <span>Modifier Profil</span>
          </NavLink>
        </li>
      </ul>
      <hr className="separator" />
      <ul>
        <li>
          <NavLink to="/logout" className="logout" activeClassName="active">
            <FaSignOutAlt className="icon" />
            <span>Déconnexion</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
