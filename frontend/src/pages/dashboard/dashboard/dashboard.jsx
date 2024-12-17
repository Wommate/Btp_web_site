import React from 'react';
import './dashboard.css';
// import Navbar from '../../components/navbar/navbar';
import Sidebar from './sidebar';
import Rightbar from './rightbar';
import Header from './header';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <h1>Bienvenue sur le Dashboard</h1>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Dashboard;
