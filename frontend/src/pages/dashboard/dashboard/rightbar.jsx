import React, { useEffect, useState } from 'react';
import './rightbar.css';


const Rightbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [counts, setCounts] = useState({ unread: 0, read: 0 });
  const [expandedMessages, setExpandedMessages] = useState({});

  useEffect(() => {
    fetchCounts();
    fetchNotifications();
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

  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/notifications/get_notifications');
      if (!response.ok) throw new Error('Failed to fetch notifications');
      const data = await response.json();
      setNotifications(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/notifications/read/${id}`, {
        method: 'PUT',
      });
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      setCounts((prevCounts) => ({
        unread: Math.max(0, prevCounts.unread - 1),
        read: prevCounts.read + 1,
      }));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  const toggleMessageExpansion = (id) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const MAX_LENGTH = 50;
  const displayedNotifications = showAll ? notifications : notifications.slice(0, 7);

  return (
    <div className="rightbar">
      <div className="notification-count">
        <p>Notifications non Lues: <span className="notification-unred"> {counts.unread} </span> </p>
        {/* <p>Notifications Lues: <span className="notification-read">  {counts.read} </span></p>
        <p>Totales Notifications : <span className="notification-read">  {counts.total} </span></p> */}
      </div>
      {loading ? (
        <p>Loading notifications...</p>
      ) : notifications.length === 0 ? (
        <p>Aucune notification pour le moment !!!</p>
      ) : (
        <>
          <ul>
            {displayedNotifications.map((notif) => (
              <li key={notif.id} className="notification-item">
                <div>
                  <p>
                    <strong>Name:</strong> {notif.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {notif.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {notif.phone}
                  </p>
                  <p>
                    <strong>Message:</strong>{' '}
                    {expandedMessages[notif.id] ? (
                      <>
                        {notif.content}
                        <button
                          className="expand-button"
                          onClick={() => toggleMessageExpansion(notif.id)}
                          title="Voir moins"
                        >
                          -
                        </button>
                      </>
                    ) : (
                      <>
                        {notif.content.slice(0, MAX_LENGTH)}...
                        {notif.content.length > MAX_LENGTH && (
                          <button
                            className="expand-button"
                            onClick={() => toggleMessageExpansion(notif.id)}
                            title="Voir plus"
                          >
                            +
                          </button>
                        )}
                      </>
                    )}
                  </p>
                  <p>
                    <strong>Heure:</strong> {formatDate(notif.createdAt)}
                  </p>
                </div>
                <button
                  className="mark-as-read-button"
                  onClick={() => markAsRead(notif.id)}
                  disabled={loading}
                >
                  Mark as read
                </button>
              </li>
            ))}
          </ul>
          {notifications.length > 7 && (
            <button className="show-more-button" onClick={toggleShowAll}>
              {showAll ? 'Voir moins' : 'Voir plus'}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Rightbar;
