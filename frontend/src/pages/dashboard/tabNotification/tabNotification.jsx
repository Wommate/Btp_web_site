import React, { useEffect, useState } from 'react';
import './tabNotification.css';

const TabNotification = () => {
  const [readNotifications, setReadNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReadNotifications();
  }, []);

  const fetchReadNotifications = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/notifications/get_read_notifications');
      const data = await response.json();
      setReadNotifications(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch read notifications:', error);
      setLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/notifications/delete/${id}`, {
        method: 'DELETE',
      });
      setReadNotifications(readNotifications.filter((notif) => notif.id !== id));
    } catch (error) {
      console.error('Failed to delete notification:', error);
    }
  };

  return (
    <div className="tab-notification">
      <h2>Read Notifications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : readNotifications.length === 0 ? (
        <p>No read notifications.</p>
      ) : (
        <ul>
          {readNotifications.map((notif) => (
            <li key={notif.id}>
              <p>
                <strong>{notif.name}</strong>: {notif.subject}
                <span className="notif-date">
                  {new Date(notif.createdAt).toLocaleDateString('fr-FR')} à{' '}
                  {new Date(notif.createdAt).toLocaleTimeString('fr-FR')}
                </span>
              </p>
              <button
                className="delete-button"
                onClick={() => deleteNotification(notif.id)}
                title="Delete notification"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabNotification;
