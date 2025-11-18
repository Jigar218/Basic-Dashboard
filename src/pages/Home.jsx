import { FaUsers, FaChartLine, FaTasks } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container py-4">
      {/* Welcome Message */}
      <div className="text-center my-4">
        <h1 className="fw-bold home-text" style={{ color: "#333" }}>
          Welcome to the Dashboard
        </h1>
        <p className="text-muted home-text-subtitle">
          Quick overview of your system — simple and clean.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="row g-3 mt-4">
        {/* Users */}
        <div className="col-md-4">
          <div
            className="card shadow-sm text-white p-3"
            style={{ background: "#007bff", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ fontSize: "2rem" }}>
                <FaUsers />
              </div>
              <div>
                <h4 className="fw-bold m-0">120</h4>
                <p className="m-0">Total Users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="col-md-4">
          <div
            className="card shadow-sm text-white p-3"
            style={{ background: "#28a745", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ fontSize: "2rem" }}>
                <FaChartLine />
              </div>
              <div>
                <h4 className="fw-bold m-0">35</h4>
                <p className="m-0">Active Sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="col-md-4">
          <div
            className="card shadow-sm text-white p-3"
            style={{
              background: "#ffc107",
              borderRadius: "10px",
              color: "#333",
            }}
          >
            <div className="d-flex align-items-center">
              <div className="me-3" style={{ fontSize: "2rem" }}>
                <FaTasks />
              </div>
              <div>
                <h4 className="fw-bold m-0">8</h4>
                <p className="m-0">Pending Tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
