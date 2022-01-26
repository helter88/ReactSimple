import User from './User';
import styles from './UserList.module.css';

const UserList = (props) => {
  let generatedUsers;

  if (props.allUsers.length > 0) {
    generatedUsers = props.allUsers.map((user) => (
      <User
        key={`${user.name}-${Math.random()}`}
        name={user.name}
        year={user.year}
      />
    ));
  }
  return <div className={styles['user-list']}>{generatedUsers}</div>;
};
export default UserList;
