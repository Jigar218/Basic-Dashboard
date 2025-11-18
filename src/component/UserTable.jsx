const UserTable = ({ users }) => {
  return (
    <div className="user-table-container shadow-sm rounded">
      <div className="table-responsive ">
        <table className="table align-middle user-table ">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody className="user-data">
            {users.map((u, index) => (
              <tr key={index} className="user-row">
                <td>
                  <img
                    src={u.picture.large}
                    alt="profile"
                    className="profile-img"
                  />
                </td>
                <td className="fw-semibold">
                  {u.name.first} {u.name.last}
                </td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td className="fw-bold text-primary">{u.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
