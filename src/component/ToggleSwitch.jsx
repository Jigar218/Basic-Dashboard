const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <div
      className="form-check form-switch"
      style={{ paddingLeft: "0", cursor: "pointer" }}
    >
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{
          width: "3rem",
          height: "1.5rem",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
