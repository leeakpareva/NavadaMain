import React from 'react';
import { motion } from 'framer-motion';

interface NotificationPreferences {
  daily_summary: boolean;
  new_jobs: boolean;
  status_updates: boolean;
  tech_artistic_scores: boolean;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  category: 'daily_summary' | 'new_job' | 'status_update' | 'tech_artistic_score';
  timestamp: string;
  read: boolean;
  jobId?: string;
  score?: number;
}

interface NotificationCenterProps {
  preferences?: NotificationPreferences;
  onPreferencesChange?: (prefs: NotificationPreferences) => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  preferences = {
    daily_summary: true,
    new_jobs: true,
    status_updates: true,
    tech_artistic_scores: true
  },
  onPreferencesChange
}) => {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);
  const [showPreferences, setShowPreferences] = React.useState(false);

  // Real-time notification updates
  React.useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // In a real implementation, this would connect to a WebSocket or polling endpoint
        // For now, we'll simulate updates every 30 seconds
        const mockUpdates: Notification[] = [
          {
            id: `notification_${Date.now()}`,
            title: 'New Job Match Found',
            message: 'A new job matching your tech-artistic criteria has been found.',
            type: 'info',
            category: 'new_job',
            timestamp: new Date().toISOString(),
            read: false
          }
        ];

        if (preferences.new_jobs) {
          setNotifications(prev => [...mockUpdates, ...prev]);
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    // Check for updates every 30 seconds
    const interval = setInterval(checkForUpdates, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [preferences]);

  // Analytics pipeline integration
  React.useEffect(() => {
    const updateAnalytics = async () => {
      try {
        // In a real implementation, this would send analytics data to the backend
        const analyticsData = {
          total_notifications: notifications.length,
          unread_count: notifications.filter(n => !n.read).length,
          category_distribution: notifications.reduce((acc, n) => {
            acc[n.category] = (acc[n.category] || 0) + 1;
            return acc;
          }, {} as Record<string, number>)
        };

        console.log('Analytics Update:', analyticsData);
      } catch (error) {
        console.error('Error updating analytics:', error);
      }
    };

    updateAnalytics();
  }, [notifications]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <button
          onClick={() => setShowPreferences(!showPreferences)}
          className="text-blue-600 hover:text-blue-800"
        >
          Settings
        </button>
      </div>
      
      {showPreferences && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-3">Notification Preferences</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.daily_summary}
                onChange={(e) => onPreferencesChange?.({
                  ...preferences,
                  daily_summary: e.target.checked
                })}
                className="mr-2"
              />
              Daily Summary
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.new_jobs}
                onChange={(e) => onPreferencesChange?.({
                  ...preferences,
                  new_jobs: e.target.checked
                })}
                className="mr-2"
              />
              New Job Matches
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.status_updates}
                onChange={(e) => onPreferencesChange?.({
                  ...preferences,
                  status_updates: e.target.checked
                })}
                className="mr-2"
              />
              Status Updates
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.tech_artistic_scores}
                onChange={(e) => onPreferencesChange?.({
                  ...preferences,
                  tech_artistic_scores: e.target.checked
                })}
                className="mr-2"
              />
              Tech-Artistic Score Updates
            </label>
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No new notifications</p>
        ) : (
          notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded ${
                notification.read ? 'bg-gray-50' : 'bg-blue-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{notification.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    notification.category === 'daily_summary' ? 'bg-purple-100 text-purple-800' :
                    notification.category === 'new_job' ? 'bg-green-100 text-green-800' :
                    notification.category === 'status_update' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {notification.category.replace('_', ' ')}
                  </span>
                </div>
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <p className="text-sm mt-2">{notification.message}</p>
              
              {notification.category === 'tech_artistic_score' && notification.score && (
                <div className="mt-2 bg-gray-50 p-2 rounded">
                  <span className="font-medium">Tech-Artistic Score: </span>
                  <span className="text-blue-600">{notification.score}</span>
                </div>
              )}

              {notification.category === 'status_update' && notification.jobId && (
                <div className="mt-2">
                  <a
                    href={`#job-${notification.jobId}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Job Details
                  </a>
                </div>
              )}
              
              <div className="mt-2 flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  {new Date(notification.timestamp).toLocaleString()}
                </span>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;
