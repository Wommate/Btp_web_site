import React, { useEffect, useState } from 'react';
import './dashboard.css';
// import Navbar from '../../components/navbar/navbar';
import Sidebar from './sidebar';
import Rightbar from './rightbar';
import Header from './header';
import TabNotification from '../tabNotification/tabNotification';

const Dashboard = () => {
  // counts
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

  // end


  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          {/* count  */}
          <div className="dashboard-count">
          <div className="card">
            <h3>Message archive</h3>
            <p className="counter" data-target="1500">  {counts.total} </p>
          </div>
          <div className="card">
            <h3>Message marquer lu</h3>
            <p className="counter" data-target="350"> {counts.read} </p>
          </div>
          <div className="card">
            <h3>Message non lu</h3>
            <p className="counter" data-target="1200"> {counts.unread} </p>
          </div>
          {/* <div className="card">
            <h3>Bénéfices</h3>
            <p className="counter" data-target="5000"></p>
          </div> */}
        </div>

        {/* message contact  */}
        <div>
        <TabNotification />
        </div>

        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Dashboard;
