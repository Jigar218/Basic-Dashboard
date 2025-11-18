import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
  };

  return (
    <div
      className="position-fixed top-0 start-0 bg-light text-dark p-3 sidebar"
      style={{
        width: "200px",
        height: "100vh",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "0.3s ease",
        zIndex: 999,
        display: "block",
      }}
    >
      <div className="d-flex justify-content-between align-items-center ">
        <h4 className="sidebar-title pt-3">
          <span className="me-1 me-md-2">
            <MdDashboardCustomize />
          </span>
          Dashboard
        </h4>
        <button
          className="btn btn-sm close-style bg-none d-md-none mt-2 ms-3 "
          onClick={closeSidebar}
        >
          ✕
        </button>
      </div>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto mt-4">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link textcolor ${
              location.pathname === "/" ? "active active-class" : ""
            }`}
            onClick={closeSidebar}
            style={linkStyle}
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/users"
            className={`nav-link textcolor ${
              location.pathname === "/users" ? "active active-class" : ""
            }`}
            onClick={closeSidebar}
            style={linkStyle}
          >
            <FaUser />
            <span>Users</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/settings"
            className={`nav-link textcolor ${
              location.pathname === "/settings" ? "active active-class" : ""
            }`}
            onClick={closeSidebar}
            style={linkStyle}
          >
            <IoMdSettings />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
