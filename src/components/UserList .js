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
  const userListClass = `${styles['user-list']}${
    props.allUsers.length === 0 ? styles.unvisible : ''
  }`;

  return <div className={userListClass}>{generatedUsers}</div>;
};
export default UserList;
