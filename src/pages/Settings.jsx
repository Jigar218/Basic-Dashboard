import { useState, useEffect } from "react";
import ToggleSwitch from "../component/ToggleSwitch";

const Settings = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );
  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") === "false" ? false : true
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("notifications", notifications);
    alert("Settings Saved!");
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h2 className="fw-bold mb-4 setting-title">Settings</h2>
      <form
        onSubmit={handleSubmit}
        className="p-5 shadow-sm bg-white rounded"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {/* Username */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            className="form-control input-style"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Dark Mode</span>
          <ToggleSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        {/* Notifications Toggle */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Notifications</span>
          <ToggleSwitch
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <button className="btn btn-primary w-100 mt-3" type="submit">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
