import React from 'react';
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="logo-container"><img src="/img/ETEP.png" alt="Logo" className="logo" /></div>
      <ul>
        <li>Accueil</li>
        <li>Blog</li>
        <li>Gallery</li>
        <li>Services</li>
      </ul>
    </div>
  );
};

export default Sidebar;
