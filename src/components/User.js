import styles from './User.module.css';
const User = (props) => {
  return (
    <div className={styles.user}>
      <h3>{`${props.name}(${props.year} years old)`}</h3>
    </div>
  );
};

export default User;
