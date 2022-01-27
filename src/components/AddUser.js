import { useState } from 'react';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userYear, setUserYear] = useState('');

  const getUserName = (e) => {
    setUserName(e.target.value);
  };
  const getUserYear = (e) => {
    setUserYear(e.target.value);
  };

  const getAllData = (e) => {
    e.preventDefault();
    if (userName === '' || userYear === '') {
      const info = {
        message: 'Please enter valid name and Age (non-empty values)',
        status: true,
      };
      return props.formValidation(info);
    }

    if (Number(userYear) <= 0) {
      const info = {
        message: 'Please enter a valid age (>0)',
        status: true,
      };
      return props.formValidation(info);
    }

    const userData = {
      name: userName,
      year: userYear,
    };
    setUserName('');
    setUserYear('');
    props.userInfo(userData);
  };
  return (
    <form className={styles['user-form']} onSubmit={getAllData}>
      <label>User Name</label>
      <input onChange={getUserName} value={userName}></input>
      <label>Age (Years)</label>
      <input onChange={getUserYear} value={userYear}></input>
      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUser;
