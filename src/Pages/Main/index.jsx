import { USERS } from "../../constants";
import { UserList } from '../../Components/userList';

export const Main = () => {
    return (
      <div>
        <h1>Main Page</h1>
        <UserList users={USERS} />
      </div>
    );
  }