import UserTable from "../component/UserTable";
import Loader from "../component/Loader";
import ErrorMessage from "../component/ErrorMessage";
import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { data: users, isLoading, isError } = useUsers();

  return (
    <div>
      <h3 className="fw-bold mb-3 text-primary">Users List</h3>

      {isLoading && <Loader />}
      {isError && <ErrorMessage message="Failed to load users." />}

      {users && <UserTable users={users} />}
    </div>
  );
};

export default Users;
