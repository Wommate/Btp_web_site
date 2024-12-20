import React, { useEffect, useState } from 'react';
import './tabNotification.css';

const TabNotification = () => {
  const [readNotifications, setReadNotifications] = useState([]);
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [expandedMessages, setExpandedMessages] = useState({});
  const ITEMS_TO_SHOW = 4;
  const MAX_LENGTH = 50;

  useEffect(() => {
    fetchReadNotifications();
  }, []);

  const fetchReadNotifications = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/notifications/get_read_notifications');
      const data = await response.json();
      setReadNotifications(data);
      setVisibleNotifications(data.slice(0, ITEMS_TO_SHOW));
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch read notifications:', error);
      setLoading(false);
    }
  };

  const toggleMessageExpansion = (id) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleShowAll = () => {
    setShowAll((prev) => {
      if (!prev) {
        setVisibleNotifications(readNotifications);
      } else {
        setVisibleNotifications(readNotifications.slice(0, ITEMS_TO_SHOW));
      }
      return !prev;
    });
  };

  const deleteNotification = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/notifications/delete/${id}`, {
        method: 'DELETE',
      });
      const updatedNotifications = readNotifications.filter((notif) => notif.id !== id);
      setReadNotifications(updatedNotifications);
      setVisibleNotifications(showAll ? updatedNotifications : updatedNotifications.slice(0, ITEMS_TO_SHOW));
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
        <>
          <ul className={showAll ? 'full-list' : 'limited-list'}>
            {visibleNotifications.map((notif) => (
              <li key={notif.id} className="notification-item">
                <p>
                  <strong>Name:</strong> {notif.name} <br />
                  <strong>Subject:</strong> {notif.subject} <br />
                  <strong>Email:</strong> {notif.email || 'N/A'} <br />
                  <strong>Phone:</strong> {notif.phone || 'N/A'} <br />
                  <strong>Content:</strong>{' '}
                  {expandedMessages[notif.id] ? (
                    <>
                      {notif.content}{' '}
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
                <span className="notif-date">
                  <strong>Date:</strong>{' '}
                  {new Date(notif.createdAt).toLocaleDateString('fr-FR')} à{' '}
                  {new Date(notif.createdAt).toLocaleTimeString('fr-FR')}
                </span>
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
          <button className="show-more-button" onClick={toggleShowAll}>
            {showAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </>
      )}
    </div>
  );
};

export default TabNotification;
