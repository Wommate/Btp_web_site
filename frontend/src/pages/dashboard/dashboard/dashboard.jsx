import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './dashboard.css';
import Sidebar from './sidebar';
import Rightbar from './rightbar';
import Header from './header';

const Dashboard = () => {
  const [counts, setCounts] = useState({ unread: 0, read: 0 });

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/notifications/count_notifications');
      if (!response.ok) throw new Error('Failed to fetch counts');
      const data = await response.json();
      setCounts(data);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          {/* Outlet rend le contenu dynamique ici */}
          <Outlet />
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Dashboard;
