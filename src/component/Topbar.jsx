import { FaBars, FaSearch } from "react-icons/fa";

const Topbar = ({ title, toggleSidebar }) => {
  return (
    <nav
      className="navbar bg-white shadow-sm sticky-md-top px-3"
      style={{
        height: "60px",
        zIndex: 900,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div className="d-flex align-items-center">
        <button
          className="btn btn-outline-primary d-md-none me-3"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <h5 className="m-0 fw-bold setting-title" style={{ color: "#333" }}>
          {title}
        </h5>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center shadow-sm"
          style={{
            width: "40px",
            height: "40px",
            background: "#f3f4f6",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#555",
          }}
        >
          JM
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
