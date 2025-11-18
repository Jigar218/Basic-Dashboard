const Loader = () => (
  <div className="d-flex flex-column justify-content-center align-items-center py-5">
    <div
      className="spinner-border text-primary mb-3"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    ></div>

    <p className="text-primary fw-semibold m-0" style={{ fontSize: "1.1rem" }}>
      Fetching users...
    </p>
  </div>
);

export default Loader;
